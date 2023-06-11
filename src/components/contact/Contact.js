import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiTelegramLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_om0w2zd', 'template_66c03ce', form.current, 'vnSdbNqQt_8aTlQW6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>harshikajuneja22@gmail.com</h5>
            <a href="mailto:harshikajuneja22@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiTelegramLine  className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+1234</h5>
            <a href="https://t.me/harshikajuneja" target='__blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1234</h5>
            <a href="https://api.whatsapp.com/send?phone=9306638318" target='__blank'>
            Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Your Full Name' required/>
          <input type='email' name="email" placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
