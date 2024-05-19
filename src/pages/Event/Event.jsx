import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchEventById } from '../../redux/events/operations';
import { selectEventDetails } from '../../redux/events/selectors';
import {
  EventDate,
  EventHeader,
  EventImg,
  EventInfoWrap,
  EventLink,
  EventLinkWrap,
  EventText,
  EventTitle,
  EventWrap,
  ImageWrap,
} from './Event.styled';
import { ReturnBackBtn } from '../Register/Register.styled';

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectEventDetails);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  return (
    <div>
      <ReturnBackBtn onClick={() => navigate(-1)}>Return back</ReturnBackBtn>
      {Object.keys(eventDetails).length > 0 && (
        <EventWrap>
          <ImageWrap>
            <EventImg src={eventDetails.imageUrl} alt={eventDetails.title} />
          </ImageWrap>
          <div>
            <EventInfoWrap>
              <EventHeader>{eventDetails.title}</EventHeader>
              <EventText>{eventDetails.organizer}</EventText>
              <EventDate>{eventDetails.eventDate}</EventDate>
            </EventInfoWrap>
            <EventLinkWrap>
              <EventLink to={`/${id}/participants`}>Participants</EventLink>
              <EventLink to={`/register/${id}`}>Register</EventLink>
            </EventLinkWrap>
            <EventTitle>Description</EventTitle>
            <EventText>{eventDetails.description}</EventText>
          </div>
        </EventWrap>
      )}
    </div>
  );
};

export default Event;
