import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className='header1'>

            <li><a href="#" id='logo'><i className="fa-solid fa-democrat mx-1" id=''></i>&nbsp;Handicraft</a></li>
            <li><NavLink to="Decor" id='logo2'>Decor Items</NavLink></li>
            <li><NavLink to="Hanging" id='logo2'>Hanging Items</NavLink></li>
            <li><NavLink to="Lights" id='logo2'>Lights & Lamps</NavLink></li>
            <li><NavLink to="Statues" id='logo2'>Statues</NavLink></li>
        <div className='search2'>
                <input type="search-box" className='search'  placeholder=' search here' />
            </div>
                <button className='button'>Go</button>
        <nav className="navbar">
            
            <ul>
                {/* <li><NavLink to="Home"><i className="fa-solid fa-house"></i>&nbsp;</NavLink></li> */}
                <li><NavLink to="Singup"><i class="fa-solid fa-user-plus"></i>&nbsp;</NavLink></li>
                <li><NavLink to="Login"><i className="fa-solid fa-user"></i>&nbsp;</NavLink></li>
                {/* <li><NavLink to="Help"><i className="fa-solid fa-phone"></i>&nbsp;</NavLink></li> */}
                <li><NavLink to="Setting"><i className="fa-solid fa-bell"></i>&nbsp;</NavLink></li>
                <li><NavLink to="Setting"><i className="fa-solid fa-sliders"></i>&nbsp;</NavLink></li>
            </ul>
           

        
        </nav>
        </header>
      
    </div>
  )
}

export default Navbar
