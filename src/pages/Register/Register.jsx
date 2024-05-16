import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import togglePassword from "../../services/togglePassword";
import { writeUserData } from "../../services/authServices";
import { registerThunk } from "../../redux/auth/operations";
import { updateUser } from "../../redux/auth/authSlice";

const Register = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleSecondIcon, setToggleSecondIcon] = useState(false);
  const [toggleSecondInput, setToggleSecondInput] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const signup = async (data) => {
    const { name, email, birthDate, password } = data;
    try {
      dispatch(registerThunk({ email, password })).then((userInfo) => {
        const newUser = {
          uid: userInfo.payload.uid,
          name,
          email,
          birthDate,
        };

        writeUserData(newUser);

        dispatch(updateUser({ birthDate, name }));
        reset();
        navigate("/");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");

  return (
    <>
      <form onSubmit={handleSubmit(signup)}>
        <label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Adam"
          />
        </label>
        <label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email@gmail.com"
          />
          {errors.email && <span> {errors.email.message}</span>}
        </label>
        <label>
          <input
            type="date"
            {...register("birthDate", { required: true })}
            placeholder="08.08.1988"
          />
          {errors.number && <span> {errors.number.message}</span>}
        </label>
        <label>
          <input
            type={toggleInput}
            {...register("password", { required: true })}
            placeholder="Password"
            className="form-control"
          />
          <svg
            onClick={() =>
              togglePassword(toggleInput, setToggleInput, setToggleIcon)
            }
          >
            {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
          </svg>
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label>
          <input
            type={toggleSecondInput}
            {...register("repeatPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Confirm Password"
            className="form-control"
          />
          <svg
            onClick={() =>
              togglePassword(
                toggleSecondInput,
                setToggleSecondInput,
                setToggleSecondIcon
              )
            }
          >
            {toggleSecondIcon ? <RiEyeOffLine /> : <RiEyeLine />}
          </svg>
          {errors.repeatPassword && (
            <span>{errors.repeatPassword.message}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "rgb(144, 64, 246)" : "#CFC5DC",
          }}
        >
          Submit
        </button>
      </form>
      <Link to="/login">Log in</Link>
    </>
  );
};

export default Register;
