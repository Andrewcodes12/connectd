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

  const rsvps = Object.values(rsvp);


  const rsvpdEvents = rsvps.filter(rsvp => rsvp.user_id === sessionUser.id)

  const rsvpdEvent = rsvpdEvents.find(rsvp => rsvp.event_id === event.id)



  const handleRsvp =  (e) => {
    e.preventDefault();
    const rsvp = {
      user_id: sessionUser.id,
      event_id: event.id
    }

    dispatch(createRsvp(rsvp.event_id));
    setRsvpd(true)
  }

  const handleUnRsvp =  (e) => {
    e.preventDefault();
    dispatch(deleteRsvp(event.id));
    setRsvpd(false)
    rsvp.length--
  }

  // allow user to only rsvp once and not rsvp on their own event


function handleRsvpp(){
  if(sessionUser.id !== event.user_id){
    if(rsvpd === false){
    return (
      <div className='rsvp-button'>
        <button onClick={handleRsvp} className='rsvp-button'>RSVP</button>
        {rsvp.length} <span>people are attending this event.</span>
      </div>
    )
  } else {
    return (
      <div className='rsvp-button'>
        <button onClick={handleUnRsvp} className='rsvp-button'>UNRSVP</button>
        {rsvp.length} <span>people are attending this event.</span>
      </div>
    )
  }
} else {
  return (
    <div className="rsvp-length">
      {rsvp.length} <span>people are attending your event.</span>
    </div>
  )
}
}



  return (
    <>
      {handleRsvpp()}
    </>
  )
}


export default RsvpdEvents
