import { useDispatch, useSelector } from 'react-redux';
import { selectAllParticipants } from '../../redux/participants/selectors';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { fetchAllParticipantsByEventId } from '../../redux/participants/operation';
import { useNavigate, useParams } from 'react-router';
import { selectEventTitle } from '../../redux/events/selectors';
import {
  EventHeader,
  NoParticText,
  ParticHeader,
  ParticImg,
  ParticInfoWrap,
  ParticItem,
  ParticList,
  ParticName,
  ParticWrap,
} from './Participants.styled';
import defaultImg from '../../assets/default-img.png';
import { ReturnBackBtn } from '../Register/Register.styled';

const Participants = () => {
  const dispatch = useDispatch();
  const participants = useSelector(selectAllParticipants);
  const { id } = useParams();
  const title = useSelector(selectEventTitle);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllParticipantsByEventId(id));
  }, [dispatch, id]);

  return (
    <>
      <ReturnBackBtn onClick={() => navigate(-1)}>Return back</ReturnBackBtn>
      <ParticHeader>Participants</ParticHeader>
      {participants.length > 0 ? (
        <ParticWrap>
          <EventHeader>{title}</EventHeader>
          <ParticList>
            {participants.map(({ user: { name, email } }) => {
              return (
                <ParticItem key={nanoid()}>
                  <ParticImg src={defaultImg} alt={name} />
                  <ParticInfoWrap>
                    <ParticName>{name}</ParticName>
                    <p>{email}</p>
                  </ParticInfoWrap>
                </ParticItem>
              );
            })}
          </ParticList>
        </ParticWrap>
      ) : (
        <NoParticText>No one register yet.</NoParticText>
      )}
    </>
  );
};

export default Participants;
