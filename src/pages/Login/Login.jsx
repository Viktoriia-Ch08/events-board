import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import togglePassword from '../../services/togglePassword';
import { fetchUser, loginThunk } from '../../redux/auth/operations';
import { Input, SubmitBtn } from '../Register/Register.styled';
import {
  AuthHeader,
  AuthLabel,
  AuthLink,
  AuthText,
  AuthWrap,
  SvgEye,
  SvgSpan,
  SvgWrap,
} from './Login.styled';
import { failedNotification } from '../../services/notifications.js';

const Login = () => {
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const logIn = async data => {
    try {
      dispatch(loginThunk(data))
        .unwrap()
        .then(info => {
          dispatch(fetchUser(info.uid));
          reset();
          navigate('/');
        })
        .catch(() => {
          failedNotification('Sorry, write your login or password correctly');
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthWrap>
      <form onSubmit={handleSubmit(logIn)} className="auth-form">
        <AuthHeader>Log In</AuthHeader>
        <AuthLabel>
          Enter your email
          <Input
            type="email"
            {...register('email', { required: true })}
            placeholder="email@gmail.com"
          />
          {errors.email && <span> {errors.email.message}</span>}
        </AuthLabel>
        <AuthLabel>
          Enter your password
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
        </AuthLabel>
        <SubmitBtn type="submit" disabled={!isValid}>
          Login
        </SubmitBtn>
      </form>
      <AuthText>Haven&apos;t signed up yet? </AuthText>
      <AuthLink to="/signup">Sign up</AuthLink>
    </AuthWrap>
  );
};

export default Login;
