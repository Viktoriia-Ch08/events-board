import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 320px;
  height: 40px;
  border-radius: 12px;
  cursor: 'pointer';
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-bottom: 7px;
  margin-top: 7px;
`;

export const SubmitBtn = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);

  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  &:disabled {
    background-color: var(--text-clr-second-light-grey);
    border: 1px solid var(--text-clr-black);
  }

  @media ${device.tablet} {
    width: 230px;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }

  @media ${device.desktop} {
    width: 260px;
  }
`;

export const ReturnBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;

  font-size: 20px;
  text-shadow: 1px 1px 2px var(--text-clr-black);
  border-radius: 12px;

  color: var(--text-special-clr);
  background-color: transparent;
  border: 2px solid var(--text-clr-black);

  @media ${device.tablet} {
    width: 200px;
    font-size: 20px;
  }
`;

export const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media ${device.tablet} {
  }
`;
