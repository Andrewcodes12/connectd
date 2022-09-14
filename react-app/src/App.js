import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import ProtectedRoute from './components/auth/ProtectedRoute';
import About from './components/About/About';
import SingleEvent from './components/SingleEvent/SingleEvent';
import UserProfile from './components/UserProfile/UserProfile';
import RSVPD from './components/RSVPD/RsvpdEvents';
import DirectMessage from './components/DirectMessage/DirectMessage';
import Footer from './components/Footer/Footer';
import EventByCategory from './components/EventByCategory/EventByCategory';
import EventCity from './components/EventCity/EventCity';
import AddEvent from './components/AddEvent/AddEvent';
import LoggedUserProfile from './components/LoggedUserProfile/LoggedUserProfile';


import Feed from './components/Feed/Feed';


import { authenticate } from './store/session';


function App() {
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session);
  const events = useSelector(state => state.events);

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
          <Route path='/events/search/city/:city' exact={true}>
            <EventCity />
          </Route>
          <Route path='/events/:eventsId' exact={true}>
            <SingleEvent />
          </Route>
          <Route path='/new/events' exact={true}>
            <AddEvent />
          </Route>
          <Route path='/users/:userId' exact={true}>
            <UserProfile />
          </Route>
          <Route path='/users/:userId/profile' exact={true}>
            <LoggedUserProfile sessionUser={sessionUser} events={events}/>
          </Route>
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
