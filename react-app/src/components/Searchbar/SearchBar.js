import {useDispatch} from 'react-redux';
import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { loadEventsByCity } from '../../store/event';
import './searchBar.css'



function SearchBar() {
  const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


  const handleSubmit = async (e) => {
    if(city){
    e.preventDefault();
    let capitalizeFirstletter = city[0].toUpperCase().trim() + city.slice(1).trim().toLowerCase();
    history.push(`/events/search/city/${capitalizeFirstletter}/`)
    dispatch(loadEventsByCity(capitalizeFirstletter));
    
    setCity('');

    } else {

      alert('Please enter a city')
    }
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
