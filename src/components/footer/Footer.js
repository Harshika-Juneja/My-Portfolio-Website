import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >@HarshikaJuneja</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/harshika-juneja-429b1a1a7" target="https://www.linkedin.com/in"><BsLinkedin/></a>
       <a href="https://github.com/Harshika-Juneja" target="https://github.com"><FaGithub/></a>
       <a href="https://api.whatsapp.com/send?phone=9306638318" target='__blank'><BsWhatsapp/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; HarshikaJuneja. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
