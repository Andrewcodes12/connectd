import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadRsvpsOnEvent,createRsvp,deleteRsvp } from '../../store/rsvp';
import { loadUserInfo } from '../../store/user';
import './rsvpdevents.css'




function RsvpdEvents({event}) {
  const [rsvpd , setRsvpd] = useState(false)

  const rsvp = useSelector(state => state.rsvps);
  const sessionUser = useSelector(state => state.session);
  const users = useSelector(state => state.users.users);

  const {eventsId} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRsvpsOnEvent(eventsId));
    dispatch(loadUserInfo());
    dispatch(createRsvp());
    dispatch(deleteRsvp());
  } , []);

  const deleteARsvp = (id) => {
    dispatch(deleteRsvp(id));
    setRsvpd(!rsvpd);
  }

  const handleRsvp = (e) => {
    e.preventDefault();
    dispatch(createRsvp(parseInt(eventsId)));
    setRsvpd(!rsvpd)
  }



  // display rsvp button if you are not the host
  // display the users who have rsvp'd
  // if you are not the host display the rsvp button
  const rsvpButton = () => {
    if (sessionUser.id !== event.user_id) {
      return (
        <>
        <h4>RSVP</h4>
        <button onClick={handleRsvp}>RSVP</button>
        </>
      )
    }else if (sessionUser.id === event.user_id){
      return (
        <>
        <h4>You cannot RSVP to your own event.</h4>
        </>
      )
    } else {
      return (
        <>
        <h4>RSVP</h4>
        <button onClick={deleteARsvp}>RSVP</button>
        </>
      )
    }
  }






  return (
    <>
    {rsvpd ? null : rsvpButton()}
    {rsvp.length} <span>People attending this event</span>
    </>
  )
}


export default RsvpdEvents
