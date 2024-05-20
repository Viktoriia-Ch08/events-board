import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addParticipant } from '../../redux/participants/operation';
import {
  Input,
  InputWrap,
  RadioBtnLabel,
  RegisterQuestion,
  RegisterText,
  RegisterWrap,
  ReturnBackBtn,
  SubmitBtn,
} from './Register.styled';
import { failedNotification } from '../../services/notifications';
import { selectEventDetails } from '../../redux/events/selectors';
import { useEffect } from 'react';
import { fetchEventById } from '../../redux/events/operations';
import { selectUser } from '../../redux/auth/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const eventDetails = useSelector(selectEventDetails);
  const user = useSelector(selectUser);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  const registerParticipant = async data => {
    const { name, email, birthDate, answer } = data;
    try {
      dispatch(
        addParticipant({
          id,
          user: {
            name,
            email,
            birthDate,
            answer,
            eventTitle: eventDetails.title,
            eventImg: eventDetails.imageUrl,
          },
        })
      )
        .unwrap()
        .then(() => {
          reset();
          navigate('/');
        })
        .catch(() => {
          failedNotification('You have already registered');
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RegisterWrap>
      <ReturnBackBtn onClick={() => navigate(-1)}>Return back</ReturnBackBtn>
      <form onSubmit={handleSubmit(registerParticipant)} className="form">
        <RegisterText>Event registration</RegisterText>
        <div>
          <InputWrap>
            <label>
              <Input
                defaultValue={user && user.name}
                type="text"
                {...register('name', { required: true })}
                placeholder="Adam"
              />
            </label>
            <label>
              <Input
                defaultValue={user && user.email}
                type="email"
                {...register('email', { required: true })}
                placeholder="email@gmail.com"
              />
              {errors.email && <span> {errors.email.message}</span>}
            </label>
            <label>
              <Input
                defaultValue={user && user.birthDate}
                type="date"
                placeholder="08.08.1988"
                min="1920-01-01"
                max="2018-12-31"
                {...register('birthDate', { required: true })}
              />
            </label>
          </InputWrap>
          <RegisterQuestion>How did you know about us?</RegisterQuestion>
          <RadioBtnLabel>
            <input
              type="radio"
              value="Social media"
              {...register('answer', { required: true })}
            />
            Social media
          </RadioBtnLabel>
          <RadioBtnLabel>
            <input
              type="radio"
              value="Friends"
              {...register('answer', { required: true })}
            />
            Friends
          </RadioBtnLabel>
          <RadioBtnLabel>
            <input
              type="radio"
              value="Found myself"
              {...register('answer', { required: true })}
            />
            Found myself
          </RadioBtnLabel>
        </div>
        <SubmitBtn type="submit" disabled={!isValid}>
          Submit
        </SubmitBtn>
      </form>
    </RegisterWrap>
  );
};

export default Register;
