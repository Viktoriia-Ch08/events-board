import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/authSlice';
import { Suspense } from 'react';
import { AuthBtn, HeaderWrap, Link, Nav } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <HeaderWrap className="main-container">
        <Nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Events
          </Link>
          {!isAuth ? (
            <Link
              to="/login"
              className={location.pathname === '/login' ? 'active' : ''}
            >
              Login
            </Link>
          ) : (
            <Link
              to="/user-events"
              className={location.pathname === '/user-events' ? 'active' : ''}
            >
              User
            </Link>
          )}
          {isAuth && (
            <AuthBtn
              type="button"
              onClick={() => {
                dispatch(logOut());
                navigate('/');
              }}
            >
              LogOut
            </AuthBtn>
          )}
        </Nav>
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
