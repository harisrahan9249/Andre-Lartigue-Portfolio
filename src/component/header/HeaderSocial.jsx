import React from 'react';
import {FaImdb} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://m.imdb.com/name/nm13591578/?ref_=nv_sr_srsg_0 "><FaImdb /></a>
        <a href="andrelartigue12@gmail.com"><HiOutlineMail/></a>
        <a href="https://www.instagram.com/andre.lartigue/ "><BsInstagram/></a>
      
    </div>
  )
}

export default HeaderSocial
