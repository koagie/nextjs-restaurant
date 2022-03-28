import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>

    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><a href="#home">home</a></li>
      <li className='p__opensans'><a href="#about">about</a></li>
      <li className='p__opensans'><a href="#menu">menu</a></li>
      <li className='p__opensans'><a href="#awards">awards</a></li>
      <li className='p__opensans'><a href="#contact">contact</a></li>
    </ul>
  </nav>
);


export default Navbar;