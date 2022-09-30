Connectd
Connectd is a fullstack application designed for users to find people to join them in their interest or for users to take on new hobbies. 

Live link: https://get-connectd.herokuapp.com/ Please refer to Wiki pages for documentation.

Technologies used:

Front-End:
- React
- Redux(State Management)
- CSS
- JavaScript
- MaterialUI(Modals)

Back-End:
- Python
- Flask
- SQLAlchemy(ORM)
- PostgreSQL

This app is deployed using Heroku & Docker.

Site Features:
Events
- Users have full CRUD capabilities on Events. Meaning, a user can Create an event, Update their events, and Delete their events.

RSVP
- Users have full CRUD capabilities on RSVPs. Meaning, a user can Create an RSVP to an event, and Delete their RSVP from that event.

Reviews & Ratings
- Users have full CRUD capabilities on Reviews. Meaning, a user can Create a review, and Delete their reviews.

User Profile
- Users can edit their bio, username, profile picture, city, state, zipcode all in their user profile.
- The Users Profile also lists any events that user is hosting and attending.

Search
- Users have the ability to search for events by city or by event category.

Filter results
- Users can filter events by Most Popular, Least Popular, or by Date.
- Users can filter reviews by Highest Rated, Lowest Rated, or by Date.

Sharing Events
- Users have the ability to share an event with friends with a click of a button.

Google Maps
- Users can get directions to an event instantly by clicking the Directions button on the map located on the events page.

City and State auto-fill
- Using an API we are able to auto-complete a users city and state when they create/edit an event or edit their profile.

AWS S3 Buckets
- I have integrated AWS S3 Buckets to allow users to upload photos directly from their computers.


Features to be implemented:
- WebScockets for a user to Message another user

