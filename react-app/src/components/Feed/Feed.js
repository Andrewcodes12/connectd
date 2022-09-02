import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink,Switch,Route} from 'react-router-dom';


import {loadEvents} from '../../store/event';
import {loadAllReviews} from '../../store/review';
import {load_all_rsvp} from '../../store/rsvp';
import {setUser} from '../../store/session';
import SingleEvent from '../SingleEvent/SingleEvent';


import './feed.css'

function Feed({eventss}) {
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
    <div className="feed">
                    <div className="feed-events-container">
                        {eventss.map(event => (
                            <div className="feed-event" key={event.id}>
                                <NavLink to={`/events/${event.id}`}>
                                <div className="feed-event-img">
                                    <img src={event.event_imgs} alt="event-img" />
                                    </div>
                                    <div className="feed-event-info">
                                        <h3 className="event-title">{event.title}</h3>
                                        <p className="event-description">{event.event_description}</p>
                                        <p className="event-date">{event.event_date}</p>
                                        <p className="event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                                        <p className="event-category">{event.category}</p>
                                    </div>
                                </NavLink>



        </div>
        ))}
                    </div>
        </div>


  );
}



export default Feed
