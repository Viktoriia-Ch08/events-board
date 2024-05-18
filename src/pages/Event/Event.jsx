import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchEventById } from '../../redux/events/operations';
import { selectEventDetails } from '../../redux/events/selectors';
import { Link } from 'react-router-dom';

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectEventDetails);

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  return (
    <>
      {Object.keys(eventDetails).length > 0 && (
        <div>
          <div>
            <p>{eventDetails.title}</p>
            <p>{eventDetails.organizer}</p>
            <p>{eventDetails.eventDate}</p>
            <p>{eventDetails.description}</p>
          </div>
          <Link to={`/${id}/participants`}>Show all participants</Link>
          <Link to={`/register/${id}`}>Register on event</Link>
        </div>
      )}
    </>
  );
};

export default Event;
