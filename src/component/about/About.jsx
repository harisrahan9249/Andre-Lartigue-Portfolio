import React from 'react'
import './About.css';
import ME from '../../assets/WhatsApp Image 2022-10-27 at 10.46.13 PM.jpeg';
import {FaAward} from 'react-icons/fa'; 
import {FiUsers} from 'react-icons/fi'; 
import {VscFolderLibrary} from 'react-icons/vsc'; 

function About() {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="Myimage" />
            </div>

        </div>
        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years Working</small>

                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Upcoming films</h5>
                    <small>2+ </small>

                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>1+ Completed</small>

                </article>
            </div>
            <p>
            Andre Lartigue is a newly nineteen year old, French/American, aspiring actor who is currently based in Prague. Briefly after completing the short film "Ses Cendres", directed by Edwin Atcher in April 2022, Andre was casted as one of the protagonists, William, in Stephen Weeks' "The Castle". With filming starting in January, this opportunity will mark the beginning of his professional career. Furthermore, Andre will be playing, Alexander, the protagonist in a new Edwin Atcher film, set to be filmed this December.             </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
    </div>


  </section>
  )
}

export default About
