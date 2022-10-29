import React from 'react'
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/Headshot.jpg';
import HeaderSocial from './HeaderSocial';
function Header() {
  return (
   <header>
    <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Andre Lartigue</h1>
        <h5 className='text-light'>Actor</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>scroll down</a>

    </div>
   </header>
  )
}

export default Header
