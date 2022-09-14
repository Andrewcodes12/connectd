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


function handleRsvpp(){
  if(sessionUser.id === event.user_id){
//     if(rsvpd === false){
//     return (
//       <div className='rsvp-button'>
//         <button onClick={handleRsvp} className='rsvp-button'>RSVP</button>
//         {rsvp.length === 0 ? <span className="rsvp-span">Be the first to RSVP!</span>
//         : rsvp.length === 1 ? <span className="rsvp-span">{rsvp.length} person is attending this event.</span>
//         : <span className="rsvp-span">{rsvp.length} people are attending this event.</span>}
//       </div>
//     )
//   } else {
//     return (
//       <div className='rsvp-button'>
//         <button onClick={handleUnRsvp} className='rsvp-button'>Cancel RSVP</button>
//         {rsvp.length === 0 ? <span className="rsvp-span">Be the first to RSVP!</span>
//         : rsvp.length === 1 ? <span className="rsvp-span">{rsvp.length} person is attending this event.</span>
//         : <span className="rsvp-span">{rsvp.length} people are attending this event.</span>}
//       </div>
//     )
//   }
//  }else if (sessionUser.id === parseInt(rsvp.user_id)){
//   return (
//     <div className='rsvp-button'>
//       <button onClick={handleUnRsvp} className='rsvp-button'>Cancel RSVP</button>
//       {rsvp.length === 0 ? <span className="rsvp-span">Be the first to RSVP!</span>
//       : rsvp.length === 1 ? <span className="rsvp-span">{rsvp.length} person is attending this event.</span>
//       : <span className="rsvp-span">{rsvp.length} people are attending this event.</span>}
//     </div>
//   )
//  }else {
  return (
    <div className="rsvp-length">
      {rsvp.length} <span className="rsvp-span">people are attending your event.</span>
    </div>
  )}
}


  return (
    <>
    {rsvp && rsvpdEvent ?
    <div className="rsvp-length">
      <button onClick={handleUnRsvp} className='rsvp-button'>Cancel RSVP</button>
      {rsvp.length} <span className="rsvp-span">people are attending your event.</span>
    </div>
    :
    <div className='rsvp-button'>
      <button onClick={handleRsvp} className='rsvp-button'>RSVP</button>
      {rsvp.length === 0 ? <span className="rsvp-span">Be the first to RSVP!</span>
      : rsvp.length === 1 ? <span className="rsvp-span">{rsvp.length} person is attending this event.</span>
      : <span className="rsvp-span">{rsvp.length} people are attending this event.</span>
      }
    </div>
    }
    </>
  )
}


export default RsvpdEvents
