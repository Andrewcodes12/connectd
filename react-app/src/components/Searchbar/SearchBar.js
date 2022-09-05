import {useDispatch} from 'react-redux';
import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

import { loadEventsByCity } from '../../store/event';
import './searchBar.css'



function SearchBar() {
  const [city, setCity] = useState('');
    const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadEventsByCity(city));
    setCity('');
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>


    </>
  )
}


export default SearchBar
