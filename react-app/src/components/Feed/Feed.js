import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadEvents} from '../../store/event';
import {loadAllReviews} from '../../store/review';
import {load_all_rsvp} from '../../store/rsvp';
import {setUser} from '../../store/session';


import './feed.css'

function Feed() {
const dispatch = useDispatch();
const events = useSelector(state => state.events.events);
const reviews = useSelector(state => state.reviews.reviews);
const rsvps = useSelector(state => state.rsvps.rsvps);
const user = useSelector(state => state.session.user);

useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadAllReviews());
    dispatch(load_all_rsvp());
} , [dispatch]);


  return (
    <>
        <h1>Feed</h1>
        {/* {rsvps.filter(rsvp => rsvp.event_id === 1).map(rsvp => (
            <div key={rsvp.id}>
                <h3>{rsvp.user_id}</h3>
                display the title of the event
                {events.filter(event => event.id === rsvp.event_id).map(event => (
                    <div key={event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                ))}
                </div>
        ))} */}

    </>
  )
}


export default Feed
