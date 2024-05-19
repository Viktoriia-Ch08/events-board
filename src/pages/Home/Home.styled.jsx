import styled from 'styled-components';
import { device } from '../../css/deviceSizes';
import { NavLink } from 'react-router-dom';

export const Cards = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${device.tablet} {
    min-width: 0;
    width: calc((100% - 40px) / 3);
    height: 400px;
  }
`;

export const ImgThumb = styled.div`
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  height: 250px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: var(--font-weight-bold);

  @media ${device.tablet} {
    font-size: 18px;
    width: 180px;
  }
`;

export const InfoCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 0 5px;
  @media ${device.tablet} {
    padding: 0 15px;
  }
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: var(--text-grey-clr);
`;

export const DateInfo = styled.p`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--text-special-clr);

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const LinkInfo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
  border: 2px solid var(--text-clr-light-grey);

  &:active {
    background-color: var(--btn-dark-hover-focus);
  }

  @media ${device.tablet} {
    width: 100%;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-dark-hover-focus);
    }
  }
`;

export const LinkInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    padding: 0 15px;
  }
`;
