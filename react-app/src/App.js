import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
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

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
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
