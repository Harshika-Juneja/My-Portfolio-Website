import React from 'react'
import './experience.css' 
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>JS</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>REACT</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>BOOTSTRAP</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Tailwind CSS</h4>
           <small className='text-light'>Intermediate</small>
           </div>
           </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Software Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>C/C++</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>JAVA</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Oracle</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>FIREBASE/JDBC</h4>
           <small className='text-light'>Intermediate</small>
           </div>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>IDEs-Visual Studio, Oracle Database, Eclipse</h4>
           <small className='text-light'>Experienced</small>
           </div>
           </article>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience
