import styled from 'styled-components';
import { device } from '../../css/deviceSizes';
import { NavLink } from 'react-router-dom';

export const EventWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  margin-bottom: 50px;
`;

export const EventInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin-bottom: 20px;
`;

export const ImageWrap = styled.div`
  min-width: 200px;

  @media ${device.tablet} {
    min-width: 350px;
  }
`;

export const EventImg = styled.img`
  width: 100%;
`;

export const EventHeader = styled.h2`
  font-size: 24px;
  font-weight: var(--font-weight-bold);

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

export const EventTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: var(--font-weight-bold);
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const EventText = styled.p`
  font-size: 16px;
  color: var(--text-grey-clr);
  text-align: justify;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const EventDate = styled.p`
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--text-special-clr);
`;

export const EventThumb = styled.div`
  display: flex;
`;

export const EventLinkWrap = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
  @media ${device.tablet} {
    justify-content: space-between;
  }

  @media ${device.desktop} {
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const EventLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  border: 1px solid var(--text-clr-black);
  border-radius: 12px;
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
`;
