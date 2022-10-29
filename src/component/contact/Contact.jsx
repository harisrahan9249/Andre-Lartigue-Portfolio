import React from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zro9fhp', 'template_5766yci', form.current, 'alHEQ2qtoTdpffHTu')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>andrelartigue12@gmail.com</h5>
                <a href="mailto:andrelartigue12@gmail.com" target="_blanck">Send a Message</a>

            </article>
            {/* <article className="contact__option">
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messanger</h4>
                <h5>andrelartigue12@gmail.com</h5>
                <a href="https://m.me/" target="_blanck">Send a Message</a>

            </article>
            <article className="contact__option">
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>Andre Lartigue</h5>
                <a href="https://api.whatsapp.com/send?phone+420606031887" target="_blanck">Send a Message</a>

            </article> */}
            
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
