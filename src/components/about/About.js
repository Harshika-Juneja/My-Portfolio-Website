import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbFileCertificate} from 'react-icons/tb'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About Image"/>
        </div>
      </div>

      <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>1+ years</small>
        </article>
        <article className='about__card'>
          <TbFileCertificate className='about__icon' />
          <h5>Certifications</h5>
          <small>5+ Courses</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>15+ Successfully Completed</small>
        </article>
       </div>

       <p>Greetings, I am Harshika Juneja! I have been working as a Frontend Developer for a digital marketing agency since past year.
       </p>

       < a href="#contact" className='btn btn-primary' >Let's Connect</a>
      </div>
      </div>
    </section>
  )
}

export default About
