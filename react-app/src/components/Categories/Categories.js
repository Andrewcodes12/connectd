import React from 'react'
import { NavLink } from 'react-router-dom'




import {FaGamepad, FaChess, FaSchool } from 'react-icons/fa'
import {MdSportsFootball, MdDirectionsBoatFilled, MdOutlineMoreHoriz} from 'react-icons/md'
import {GiWineBottle} from 'react-icons/gi'

import NavBar from '../Navbar/Navbar';

import './categories.css'


function Categories() {


  return (
    <>
    <NavBar />
        <div className="categories-div">

            <div className="categories-div-inner">
                <NavLink to='/events/search/VideoGames' activeClassName='active'>
                    <FaGamepad className="categories-icon" />
                    <span className="categories-text">Video Games</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/Sports' activeClassName='active'>
                    <MdSportsFootball className="categories-icon" />
                    <span className="categories-text">Sports</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/Clubbing' activeClassName='active'>
                    <GiWineBottle className="categories-icon" />
                    <span className="categories-text">Clubbing</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/Boating' activeClassName='active'>
                    <MdDirectionsBoatFilled className="categories-icon" />
                    <span className="categories-text">Boating</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/BoardGames' activeClassName='active'>
                    <FaChess className="categories-icon" />
                    <span className="categories-text">Board Games</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/StudyGroups' activeClassName='active'>
                    <FaSchool className="categories-icon" />
                    <span className="categories-text">Study Groups</span>
                </NavLink>
            </div>

            <div className="categories-div-inner">
                <NavLink to='/events/search/Other' activeClassName='active'>
                    <MdOutlineMoreHoriz className="categories-icon" />
                    <span className="categories-text">Other</span>
                </NavLink>
            </div>

        </div>
    </>
  )
}

export default Categories
