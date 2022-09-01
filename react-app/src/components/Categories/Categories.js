import React from 'react'
import {FaGamepad, FaChess, FaSchool } from 'react-icons/fa'
import {MdSportsFootball, MdDirectionsBoatFilled, MdOutlineMoreHoriz} from 'react-icons/md'
import {GiWineBottle} from 'react-icons/gi'



import './categories.css'


function Categories() {


  return (
    <>
        <div className="categories_div">
            <FaGamepad className="categories_icon" />
            <span className="categories_text">Video Games</span>

            <MdSportsFootball className="categories_icon" />
            <span className="categories_text">Sports</span>

            <GiWineBottle className="categories_icon" />
            <span className="categories_text">Clubbing</span>

            <MdDirectionsBoatFilled className="categories_icon" />
            <span className="categories_text">Boating</span>

            <FaChess className="categories_icon" />
            <span className="categories_text">Board Games</span>

            <FaSchool className="categories_icon" />
            <span className="categories_text">Study Groups</span>
            
            <MdOutlineMoreHoriz className="categories_icon" />
            <span className="categories_text">Other</span>
        </div>
    </>
  )
}

export default Categories
