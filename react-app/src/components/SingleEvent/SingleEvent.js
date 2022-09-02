import React from 'react';
import {useParams} from 'react-router-dom';



import './singleEvent.css';



function SingleEvent({events}) {
  const {eventsId} = useParams();

  const event = events.find(event => event.id === parseInt(eventsId));

  return (
    <>
      <h1>{event.title}</h1>
      <img src={event.event_imgs} alt="event-img" />
      <p>{event.event_description}</p>
      <p>{event.event_date}</p>
      <p>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
      <p>{event.category}</p>
    </>
  )
}

export default SingleEvent
