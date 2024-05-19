// import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { selectIsAuth } from '../../redux/auth/selectors';
// import { logOut } from "../../redux/auth/authSlice";
import { Suspense } from 'react';
import { HeaderWrap, Link, Nav } from './Layout.styled';

const Layout = () => {
  // const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  // const navigate = useNavigate();

  return (
    <header>
      <HeaderWrap>
        <Nav className="main-container">
          <Link to="/">Events</Link>
          {/* {!isAuth && <Link to="/login">Login</Link>} */}
        </Nav>
        {/* {isAuth && (
        <button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          LogOut
        </button>
      )} */}
      </HeaderWrap>
      <main className="main-container">
        <section className="section">
          <Suspense>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </header>
  );
};

export default Layout;
