import { useDispatch, useSelector } from 'react-redux';
import {
  selectEvents,
  selectPage,
  selectTotalEvents,
} from '../../redux/events/selectors';
import { nanoid } from 'nanoid';
import Pagination from 'rc-pagination/lib/Pagination';
import { fetchEvents } from '../../redux/events/operations';
import {
  Card,
  Cards,
  DateInfo,
  Image,
  ImgThumb,
  InfoCardWrap,
  InfoText,
  LinkInfo,
  LinkInfoWrap,
  Title,
} from './Home.styled';
import { setPage } from '../../redux/events/eventsSlice';
import { useEffect } from 'react';
import { LIMIT_NUMBER } from '../../services/config';

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const page = useSelector(selectPage);
  const totalEvents = useSelector(selectTotalEvents);

  useEffect(() => {
    dispatch(fetchEvents(page))
      .unwrap()
      .then(() => {
        window.scrollTo(0, 0);
      });
  }, [dispatch, page]);

  return (
    <>
      {events.length > 0 && (
        <>
          <Cards>
            {events.map(({ imageUrl, title, eventDate, organizer, _id }) => {
              return (
                <Card key={`${_id}${nanoid()}`}>
                  <ImgThumb>
                    <Image src={imageUrl} alt={title} />
                  </ImgThumb>
                  <InfoCardWrap>
                    <Title>{title}</Title>
                    <InfoText>{organizer}</InfoText>
                    <DateInfo>{eventDate}</DateInfo>
                  </InfoCardWrap>
                  <LinkInfoWrap>
                    <LinkInfo to={`/register/${_id}`}>Register</LinkInfo>
                    <LinkInfo to={`/event-details/${_id}`}>View</LinkInfo>
                  </LinkInfoWrap>
                </Card>
              );
            })}
          </Cards>
          <Pagination
            current={page}
            pageSize={LIMIT_NUMBER}
            total={totalEvents}
            onChange={newPage => dispatch(setPage(newPage))}
          />
        </>
      )}
    </>
  );
};

export default Home;
