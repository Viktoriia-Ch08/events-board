import { useDispatch, useSelector } from 'react-redux';
import { selectAllParticipants } from '../../redux/participants/selectors';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { fetchAllParticipants } from '../../redux/participants/operation';
import { useParams } from 'react-router';
import { selectEventTitle } from '../../redux/events/selectors';

const Participants = () => {
  const dispatch = useDispatch();
  const participants = useSelector(selectAllParticipants);
  const { id } = useParams();
  const title = useSelector(selectEventTitle);

  useEffect(() => {
    dispatch(fetchAllParticipants(id));
  }, [dispatch, id]);

  return (
    <>
      {participants.length > 0 ? (
        <div>
          <p>{title}</p>
          <ul>
            {participants.map(({ user: { name, email } }) => {
              return (
                <li key={nanoid()}>
                  <p>{name}</p>
                  <p>{email}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No one register yet</p>
      )}
    </>
  );
};

export default Participants;
