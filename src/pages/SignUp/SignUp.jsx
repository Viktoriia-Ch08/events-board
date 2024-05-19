import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import togglePassword from '../../services/togglePassword';
import { writeUserData } from '../../services/authServices';
import { registerThunk } from '../../redux/auth/operations';
import { updateUser } from '../../redux/auth/authSlice';
import { Input, SubmitBtn } from '../Register/Register.styled';
import {
  AuthLink,
  AuthText,
  AuthWrap,
  SvgEye,
  SvgSpan,
  SvgWrap,
} from '../Login/Login.styled';
import { failedNotification } from '../../services/notifications';

const SignUp = () => {
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleSecondIcon, setToggleSecondIcon] = useState(false);
  const [toggleSecondInput, setToggleSecondInput] = useState('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  const signup = async data => {
    const { name, email, birthDate, password } = data;
    try {
      dispatch(registerThunk({ email, password }))
        .unwrap()
        .then(userInfo => {
          const newUser = {
            uid: userInfo.uid,
            name,
            email,
            birthDate,
          };

          writeUserData(newUser);

          dispatch(updateUser({ birthDate, name }));
          reset();
          navigate('/');
        })
        .catch(() => {
          failedNotification('Sorry, user has already exist');
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const password = watch('password', '');

  return (
    <AuthWrap>
      <form onSubmit={handleSubmit(signup)} className="auth-form">
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
            {...register('birthDate', { required: true })}
            placeholder="08.08.1988"
            min="1920-01-01"
            max="2018-12-31"
          />
          {errors.number && <span> {errors.number.message}</span>}
        </label>
        <label>
          <Input
            type={toggleInput}
            {...register('password', { required: true })}
            placeholder="Password"
            className="form-control"
          />
          <SvgWrap>
            <SvgSpan>
              <SvgEye
                onClick={() =>
                  togglePassword(toggleInput, setToggleInput, setToggleIcon)
                }
              >
                {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
              </SvgEye>
            </SvgSpan>
          </SvgWrap>
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label>
          <Input
            type={toggleSecondInput}
            {...register('repeatPassword', {
              required: true,
              validate: value => value === password || 'Passwords do not match',
            })}
            placeholder="Confirm Password"
            className="form-control"
          />
          <SvgWrap>
            <SvgSpan>
              <SvgEye
                onClick={() =>
                  togglePassword(
                    toggleSecondInput,
                    setToggleSecondInput,
                    setToggleSecondIcon
                  )
                }
              >
                {toggleSecondIcon ? <RiEyeOffLine /> : <RiEyeLine />}
              </SvgEye>
            </SvgSpan>
          </SvgWrap>
          {errors.repeatPassword && (
            <span>{errors.repeatPassword.message}</span>
          )}
        </label>

        <SubmitBtn type="submit" disabled={!isValid}>
          Sign up
        </SubmitBtn>
      </form>
      <AuthText>Or</AuthText>
      <AuthLink to="/login">Log in</AuthLink>
    </AuthWrap>
  );
};

export default SignUp;
