import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadEvents} from '../../store/event';


function Feed() {
const dispatch = useDispatch();
const events = useSelector(state => state.events.events);



useEffect(() => {
    dispatch(loadEvents());
} , [dispatch]);


  return (
    <>
        <h1>Feed</h1>

    </>
  )
}

export default Feed
