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
          <small>10+ Skills</small>
        </article>
        <article className='about__card'>
          <TbFileCertificate className='about__icon' />
          <h5>Certifications</h5>
          <small>5+ Courses</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>10+ Completed</small>
        </article>
       </div>

       <p>Greetings, I am Harshika Juneja! I have recently earned by Bachelor's of
       Technology (B.Tech) degree from Kurukshetrta University majoring in 
       Computer Science and Engineering. As a fresher I am eager to contribute 
       to team success through hardwork,appetite for knowledge, attention to 
       detail.I am looking to work in an organization which provides me with 
       ample opportunities to enhance my skills and knowledge along with 
       contributing to the growth of the organization and 
       experience to help their business grow its web
       presence and make an impact on the internet.
       </p>

       < a href="#contact" className='btn btn-primary' >Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
