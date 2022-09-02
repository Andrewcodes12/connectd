import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import ProtectedRoute from './components/auth/ProtectedRoute';
import About from './components/About/About';
import AddEvent from './components/AddEvent/AddEvent';
import SingleEvent from './components/SingleEvent/SingleEvent';
import UserProfile from './components/UserProfile/UserProfile';
import RSVPD from './components/RSVPD/RsvpdEvents';
import DirectMessage from './components/DirectMessage/DirectMessage';
import Footer from './components/Footer/Footer';


import Feed from './components/Feed/Feed';


import { authenticate } from './store/session';
import EventByCategory from './components/EventByCategory/EventByCategory';

// DUMMY DATA
// const eventss = [
//   {
//       id: 1,
//       title: 'Event 1',
//       event_description: 'This is event 1',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 2,
//       title: 'Event 2',
//       event_description: 'This is event 2',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 3,
//       title: 'Event 3',
//       event_description: 'This is event 3',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 4,
//       title: 'Event 4',
//       event_description: 'This is event 4',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 5,
//       title: 'Event 5',
//       event_description: 'This is event 5',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 6,
//       title: 'Event 6',
//       event_description: 'This is event 6',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 7,
//       title: 'Event 7',
//       event_description: 'This is event 7',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 8,
//       title: 'Event 8',
//       event_description: 'This is event 8',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 9,
//       title: 'Event 9',
//       event_description: 'This is event 9',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 10,
//       title: 'Event 10',
//       event_description: 'This is event 10',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 11,
//       title: 'Event 11',
//       event_description: 'This is event 11',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 12,
//       title: 'Event 12',
//       event_description: 'This is event 12',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
//   {
//       id: 13,
//       title: 'Event 13',
//       event_description: 'This is event 13',
//       event_imgs: [
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//           'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//       ],
//       event_date: '2020-01-01',
//       event_city: 'San Francisco',
//       event_state: 'CA',
//       event_zipcode: '94103',
//       category: 'Sports',
//   },
// ]


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route path='/' exact={true} >
            <Categories />
            <Feed />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/about' exact={true}>
            <About />
          </Route>
          <Route path='/events/search/:category' exact={true}>
            <EventByCategory />
          </Route>
          <Route path='/events/:eventsId' exact={true}>
            <SingleEvent />
          </Route>
          <Route path='/users/:userId' exact={true}>
            <UserProfile />
          </Route>
          <ProtectedRoute path='/events/new' exact={true}>
            <AddEvent />
          </ProtectedRoute>
          <ProtectedRoute path='/my-events' exact={true}>
            <RSVPD />
          </ProtectedRoute>
          <ProtectedRoute path='/messages' exact={true}>
            <DirectMessage />
          </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
