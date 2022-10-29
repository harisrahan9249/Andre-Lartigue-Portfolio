import React from 'react'
import './Portfolio.css';
import {IoLogoYoutube} from 'react-icons/io';
import {SiImdb} from 'react-icons/si';
import IMGI from '../../assets/Ses Cendres Poster.png';
import IMGI1 from '../../assets/WhatsApp Image 2022-10-27 at 10.46.13.jpeg';
import IMGI2 from '../../assets/WhatsApp Image 2022-10-27 at 10.46.13 PM.jpeg';

function Portfolio() {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Ses Cendres</h2>
        <div className="container portfolio__container">
            <article className='portfolio_item'>
                <h2>Ses Cendres</h2>
                <div className="portfolio_item-image">
                    <img src={IMGI} alt="Cendres" />
                </div>
                <h4><br/> Directed by 
Edwin Atcher<br/></h4>
                    <div className="portfoio__item-cta">
                        <a className='btn' href="https://www.youtube.com/watch?v=TqjL-pkwU-w&ab_channel=RicardoVillagomez"><IoLogoYoutube /></a>
                        <a className='btn btn-primary' href="https://m.imdb.com/title/tt19768878/?ref_=tt_mv_close"><SiImdb /></a>
                    </div>
            </article>
            <article className='portfolio_item'>
                <h5>News</h5>
                <h4>Upcoming film</h4>
                <h2>The Castle</h2>
                <div className="portfolio_item-image">
                    <img src={IMGI1} alt="Cendres" />
                </div>
                <h4><br/> Directed by Stephen Weeks <br/> In pre-production.</h4>
                
                  
            </article>
            <article className='portfolio_item'>
                <h5>News</h5>
               <h4>Upcoming film</h4>
               <h2>Momento Mori</h2>
                <div className="portfolio_item-image">
                    <img src={IMGI2} alt="Cendres" />
                </div>
                <h4><br/> Directed by Edwin Atcher<br/> In pre-production</h4>
                
                  
            </article>
        </div>

    </section>
  )
}

export default Portfolio
