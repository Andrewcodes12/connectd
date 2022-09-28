import React from 'react';
import './about.css'


import NavBar from '../Navbar/Navbar';
import Me from '../public/me.png';


function About() {


  return (
    <>
    <NavBar />
    <div className="about">
        <div className="split-left">

          <div className="typewriter">
            <h1>Hi, I'm Andrew Fava a Full-Stack Developer</h1>
          </div>

            <div className="about-img">
              <img src={Me} alt="me" />
            </div>

        <div className="about-me">
          <p>
          I’m a passionate software developer with the innovative and creative mindset of an entrepreneur. I have experience building dynamic web applications with React, Javascript, Express, Python, Redux, Flask, Docker, PostgreSQL, SQLAlchemy, and CSS.
          I love the battle of developing an idea into existence and forging the bridge between conceptualization and a tangible, impactful product.
          Programming has been my outlet for problem-solving and creative expression.
          </p>
        </div>

        <div className="about-me">
          <p>
          Apart from coding, I enjoy playing golf, boxing, spending time with my dog and my family.
          My background in Business and Account Management has given me a unique perspective on the importance of a strong brand and the value of a great user experience.
          I'm able to combine my passion for programming with my business background to create a product that is both functional and beautiful.
          </p>
        </div>

        <div className="about-text">
          <p>
            My inspiration behind creating this app was to create something that could bring people of similar hobbies and interest together.
            Whether it be that you just moved to a new city and want to meet new people or you just want to find a new hobby, this app is for you.
            Lets say you want to play a round of golf, you can create an event and other users can join you. You can also search for other events and
            try new things.
            This app is a great way to meet people and find new hobbies.
            I hope you enjoy using this app as much as I enjoyed creating it.
          </p>
        </div>

      <div className="social-links">
        <p>
          <h3>You can reach me at:</h3>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/andrewfava/">LinkedIn</a></div>
          <div>GitHub: <a href="https://github.com/Andrewcodes12">GitHub</a></div>
          <div>Email: AndrewFava@yahoo.com</div>
          <div>Portfolio: <a href="https://andrewfava.com/">Portfolio</a></div>
        </p>
      </div>
      </div>

        <div className="split-right">



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
    </div>
    </>

  )
}

export default About
