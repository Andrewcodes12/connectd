import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';


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


 const eventss = [
    {
        id: 1,
        title: 'Event 1',
        event_description: 'This is event 1',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 2,
        title: 'Event 2',
        event_description: 'This is event 2',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 3,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 4,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 5,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 6,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 7,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 8,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 9,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 10,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 11,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 12,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
    {
        id: 13,
        title: 'Event 3',
        event_description: 'This is event 3',
        event_imgs: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
        event_date: '2020-01-01',
        event_city: 'San Francisco',
        event_state: 'CA',
        event_zipcode: '94103',
        category: 'Sports',
    },
]


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
