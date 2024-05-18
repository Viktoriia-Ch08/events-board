import styled from 'styled-components';
import { device } from '../../css/deviceSizes';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;

  z-index: 100;
  width: 100%;

  border-bottom: 1px solid black;
  background-color: var(--text-clr-black);
  color: var(--text-special-clr);
`;

export const Nav = styled.nav`
  min-width: 200px;
  max-width: 700px;
  padding: 20px;

  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 1100px;
  }
  @media ${device.desktop} {
    max-width: 1440px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;

  font-weight: var(--font-weight-bold);
  font-size: 24px;

  border: 2px solid var(--text-clr-light-grey);
  border-radius: 12px;
  &.active {
    color: var(--text-clr-black);
    background-color: var(--text-special-clr);
    border: 2px solid var(--text-special-clr);
  }

  @media ${device.tablet} {
    width: 100px;
    font-size: 20px;
  }
`;
