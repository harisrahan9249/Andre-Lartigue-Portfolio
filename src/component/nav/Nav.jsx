import React from 'react'
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')} href="#"><AiOutlineHome/></a>
    <a className={activeNav === '#about' ? 'active' : ''} onClick={()=> setActiveNav('#about')} href="#about"><AiOutlineUser/></a>
    <a className={activeNav === '#portfolio' ? 'active' : ''} onClick={()=> setActiveNav('#portfolio')} href="#portfolio"><BiBook/></a>
    <a className={activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')} href="#contact"><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
