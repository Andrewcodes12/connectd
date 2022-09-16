import React from 'react';
import './about.css'

function About() {


  return (
    <>
      <div className="about">
        <h1>About</h1>
        <p>
          Connectd is a social media platform designed to connect people through hobbies and interests.
        </p>
      </div>
      <div className="functionality">
        <h1>Functionality</h1>
        <p>
          <strong>Events</strong>
          <div>Users have full <strong>CRUD</strong> capabilities on Events. Meaning, a user can Create an event, Update their events, and Delete their events.</div>
        </p>
        <p>
          <strong>RSVP</strong>
          <div>Users have full <strong>CRUD</strong> capabilities on RSVPs. Meaning, a user can Create an RSVP to an event, and Delete their RSVP from that event.</div>
        </p>
        <p>
          <strong>Reviews & Ratings</strong>
          <div>Users have full <strong>CRUD</strong> capabilities on Reviews. Meaning, a user can Create a review, and Delete their reviews.</div>
        </p>
        <p>
          <strong>User Profile</strong>
          <div>Users can edit their bio, username, profile picture, city, state, zipcode all in their user profile.</div>
          <div>The Users Profile also lists any events that user is hosting and attending.</div>
        </p>
        <p>
          <strong>Search</strong>
          <div>Users have the ability to search for events by city or by event category.</div>
        </p>
        <p>
          <strong>Filter results</strong>
          <div>Users can filter events by Most Popular, Least Popular, or by Date.</div>
          <div>Users can filter reviews by Highest Rated, Lowest Rated, or by Date.</div>
        </p>
        <p>
          <strong>Sharing Events</strong>
          <div>Users have the ability to share an event with friends with a click of a button.</div>
        </p>
        <p>
          <strong>Google Maps</strong>
          <div>Users can get directions to an event instantly by clicking the Directions button on the map located on the events page.</div>
        </p>
      </div>
      <div className="technologies">
        <h1>Technologies Used</h1>
        <p>
          <strong>Frontend</strong>
          <div>React, Redux, JavaScript, CSS, HTML</div>
        </p>
        <p>
          <strong>Backend</strong>
          <div>Python, Flask, SQLAlchemy, PostgreSQL</div>
        </p>
        <p>
          <strong>APIs</strong>
          <div>Google Maps, Cloudinary, and Faker</div>
        </p>
      </div>
    </>
  )
}

export default About
