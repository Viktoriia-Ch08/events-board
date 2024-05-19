import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const ParticWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const ParticList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ParticItem = styled.li`
  display: flex;
  gap: 30px;

  width: 300px;
`;

export const ParticInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ParticImg = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: gray;
`;

export const ParticName = styled.h3`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  @media ${device.tablet} {
    font-size: 24px;
  }
`;
