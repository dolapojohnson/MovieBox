import React from "react";
import Logo from '../assets/icons/Logo.png'
import Menu from '../assets/icons/Menu.png'

const NavBar = () => {
      return(
            <nav className="nav-container">
                  <img src={Logo} style={{ width: '8rem' }} alt="Movie Logo" />
                  <input className="input-field" placeholder="What do you want to watch? "/>
                  <img className="menu-btn" src={Menu} style={{ width: '6rem' }} alt="" />
            </nav>
      )
}

export default NavBar;