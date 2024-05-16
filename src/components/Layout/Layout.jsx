import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/authSlice";
import { Suspense } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth && <Link to="/login">Login</Link>}
      </nav>
      {isAuth && (
        <button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          LogOut
        </button>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
