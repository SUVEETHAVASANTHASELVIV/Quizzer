import React, { useContext, useState } from 'react'
import "../Assets/CSS/Navbar.css"
import { FaBars } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = ({data}) => {
 
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <>
            <header>
              <div>
               <center><FaBookOpenReader className='logo' /></center> 
                <h2>Chatrayans</h2>
              </div>
              <input type="checkbox" id='menu_check'/>
              <label for="menu_check">
                <FaBars id='menu_bar'/>
              </label>
              <nav className='navbar'>
                <ul >
              
                 

                    <li>
                        <NavLink to="/home" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }}replace >
                          Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} replace >
                          LeaderBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} replace>
                          Log Out
                        </NavLink>
                    </li>
                </ul>
              </nav>
          </header>
    </>

  )
}

export default Navbar