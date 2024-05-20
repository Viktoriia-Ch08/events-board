import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const UserEventCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${device.tablet} {
    min-width: 0;
    width: calc((100% - 40px) / 3);
    height: 350px;
  }
`;

export const EmptyEventsText = styled.p`
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  text-align: center;
`;
