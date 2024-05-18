// import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { selectIsAuth } from '../../redux/auth/selectors';
// import { logOut } from "../../redux/auth/authSlice";
import { Suspense } from 'react';
import { Header, Link, Nav } from './Layout.styled';

const Layout = () => {
  // const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  // const navigate = useNavigate();

  return (
    <>
      <Header>
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
      </Header>
      <main className="main-container">
        <section className="section">
          <Suspense>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default Layout;
