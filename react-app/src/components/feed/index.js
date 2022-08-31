import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadEvents} from '../../store/event';
import {loadAllReviews} from '../../store/review';

function Feed() {
const dispatch = useDispatch();
const events = useSelector(state => state.events.events);
const reviews = useSelector(state => state.reviews.reviews);


useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadAllReviews());
} , [dispatch]);


  return (
    <>
        <h1>Feed</h1>

    </>
  )
}

export default Feed
