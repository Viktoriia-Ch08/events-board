import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserEvents } from '../../redux/auth/selectors';
import { fetchUserEventsByEmail } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';
import {
  Cards,
  Image,
  ImgThumb,
  InfoCardWrap,
  LinkInfo,
  Title,
} from '../Home/Home.styled';
import { EmptyEventsText, UserEventCard } from './User.styled';
import { ReturnBackBtn } from '../Register/Register.styled';
import { useNavigate } from 'react-router';

export const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userEventsData = useSelector(selectUserEvents);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserEventsByEmail(user.email));
  }, [dispatch, user.email]);

  return (
    <>
      <ReturnBackBtn onClick={() => navigate(-1)}>Return back</ReturnBackBtn>
      {userEventsData.length > 0 ? (
        <Cards>
          {userEventsData.map(el => {
            return (
              <UserEventCard key={nanoid()}>
                <ImgThumb>
                  <Image src={el.user.eventImg} alt={el.user.eventTitle} />
                </ImgThumb>
                <InfoCardWrap>
                  <Title>
                    {el.user.eventTitle.length > 15
                      ? `${el.user.eventTitle.substring(0, 15)}...`
                      : el.user.eventTitle}
                  </Title>
                  <LinkInfo to={`/event-details/${el.eventId}`}>View</LinkInfo>
                </InfoCardWrap>
              </UserEventCard>
            );
          })}
        </Cards>
      ) : (
        <EmptyEventsText>
          You haven&apos;t register for any events yet!
        </EmptyEventsText>
      )}
    </>
  );
};

export default User;
