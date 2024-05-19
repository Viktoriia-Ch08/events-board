import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SvgSpan = styled.span`
  position: absolute;
  top: 50px;
  transform: translateY(-50%);
  right: 10px;
`;

export const SvgEye = styled.svg`
  width: 24px;
`;

export const SvgWrap = styled.div`
  position: relative;
`;

export const AuthText = styled.p`
  font-size: 16px;
  font-weight: var(--font-weight-bold);
`;

export const AuthLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: var(--text-grey-clr);
  color: var(--text-special-clr);
`;

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
