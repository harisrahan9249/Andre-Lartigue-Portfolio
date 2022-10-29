import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
   <footer>
    <a className='footer_logo' href="#">Andre</a>
    <ul className='primarylinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

    </ul>
    <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
        

    </div>

    <div className="footer__copyright">
        <small>&copy; Nallattuthodika HarisRahman. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
