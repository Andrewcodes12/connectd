import React from 'react'
import { NavLink } from 'react-router-dom'




import {FaGamepad, FaChess, FaSchool } from 'react-icons/fa'
import {MdSportsFootball, MdDirectionsBoatFilled, MdOutlineMoreHoriz} from 'react-icons/md'
import {GiWineBottle} from 'react-icons/gi'



import './categories.css'


function Categories() {


  return (
    <>
        <div className="categories_div">

            <div className="categories_div_inner">
                <NavLink to='/events/search/VideoGames' activeClassName='active'>
                    <FaGamepad className="categories_icon" />
                    <span className="categories_text">Video Games</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/Sports' activeClassName='active'>
                    <MdSportsFootball className="categories_icon" />
                    <span className="categories_text">Sports</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/Clubbing' activeClassName='active'>
                    <GiWineBottle className="categories_icon" />
                    <span className="categories_text">Clubbing</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/Boating' activeClassName='active'>
                    <MdDirectionsBoatFilled className="categories_icon" />
                    <span className="categories_text">Boating</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/BoardGames' activeClassName='active'>
                    <FaChess className="categories_icon" />
                    <span className="categories_text">Board Games</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/StudyGroups' activeClassName='active'>
                    <FaSchool className="categories_icon" />
                    <span className="categories_text">Study Groups</span>
                </NavLink>
            </div>

            <div className="categories_div_inner">
                <NavLink to='/events/search/Other' activeClassName='active'>
                    <MdOutlineMoreHoriz className="categories_icon" />
                    <span className="categories_text">Other</span>
                </NavLink>
            </div>

        </div>
    </>
  )
}

export default Categories
