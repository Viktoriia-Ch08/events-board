import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addParticipant } from '../../redux/participants/operation';
import {
  Input,
  InputWrap,
  RadioBtnLabel,
  RegisterWrap,
  ReturnBackBtn,
  SubmitBtn,
} from './Register.styled';
import { failedNotification } from '../../services/notifications';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  const registerParticipant = async data => {
    const { name, email, birthDate, answer } = data;
    try {
      dispatch(addParticipant({ id, user: { name, email, birthDate, answer } }))
        .unwrap()
        .then(() => {
          console.log('okey');
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
        <div>
          <InputWrap>
            <label>
              <Input
                type="text"
                {...register('name', { required: true })}
                placeholder="Adam"
              />
            </label>
            <label>
              <Input
                type="email"
                {...register('email', { required: true })}
                placeholder="email@gmail.com"
              />
              {errors.email && <span> {errors.email.message}</span>}
            </label>
            <label>
              <Input
                type="date"
                placeholder="08.08.1988"
                min="1920-01-01"
                max="2018-12-31"
                {...register('birthDate', { required: true })}
              />
            </label>
          </InputWrap>
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
