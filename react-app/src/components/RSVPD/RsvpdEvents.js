import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadRsvpsOnEvent,createRsvp,deleteRsvp } from '../../store/rsvp';
import { loadUserInfo } from '../../store/user';
import './rsvpdevents.css'




function RsvpdEvents({event}) {
  const rsvp = useSelector(state => state.rsvp);
  const users = useSelector(state => state.session.users);

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
  }

  const handleRsvp = (e) => {
    e.preventDefault();

    // const rsvp = {
    //   event_id: parseInt(eventsId),
    //   user_id: 1,
    //   rsvp: true
    // }
    dispatch(createRsvp(parseInt(eventsId)));
  }



// function to check if user has rsvp'd to event
  const checkRsvp = () => {
    let rsvp = false;
    rsvp.forEach(rsvp => {
      users.forEach(user => {
        if (rsvp.user_id === user.id) {
          rsvp = true;
        }
      }
    )
    })
    return rsvp;
  }




  return (
    <div>
      <h1>RSVP</h1>
      {}
      <button onClick={handleRsvp}>RSVP</button>
    </div>
  )
}

export default RsvpdEvents
