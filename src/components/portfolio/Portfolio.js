import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/registration-login-form.png'
import IMG2 from '../../assets/n.png'
import IMG3 from '../../assets/cl.png'
import IMG4 from '../../assets/co3.png'
import IMG5 from '../../assets/c.png'
import IMG6 from '../../assets/w.png'
import IMG7 from '../../assets/cof1.png'
import IMG8 from '../../assets/p1.png'
import IMG9 from '../../assets/m.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Animated Registration-Login Design ',
    desc: "This is an animated login-registration form created by using Html,Css.",
    github: 'https://github.com/Harshika-Juneja/Animated-Login-Registration-Design-Form',
    demo:"https://hj-login-register.netlify.app/",
  }, {
    id: 2,
    image: IMG2,
    title: 'My-Notes-Taking-App',
    desc: "This App functions as a service for viewing, making, editing,deleting and searching short text notes.",
    github: 'https://github.com/Harshika-Juneja/My-Notes-Taking-App',
    demo:"",
  }, {
    id: 3,
    image: IMG3,
    title: 'Analog-and-Digital-Clock-Design ',
    desc: "This real-time clock design is created using Html,CSS,JS. It shows the current time both analogically and digitally.",
    github: 'https://github.com/Harshika-Juneja/Analog-and-Digital-Clock-Design',
    demo:"https://hj-analog-digital-clock.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: 'Contact-App',
    desc: "This is the front-end of the contact app which allows users to perform functions like create, add, delete, edit, search contacts from you app directory.",
    github: 'https://github.com/Harshika-Juneja/Contact-App',
    demo:"",

  }, {
    id: 5,
    image: IMG5,
    title: 'Dynamic-Calender',
    desc: "This calender shows number of days in every month along with the day of week for the year. The current day and date is also highlighted with a seperate color.",
    github: 'https://github.com/Harshika-Juneja/Dynamic-Calender',
    demo:"https://hj-calender.netlify.app/",
  }, {
    id: 6,
    image: IMG6,
    title: 'Weather-App',
    desc: "A simple weather application that displays the current weather, temperature, humidity, wind speed based on search. It uses OpenWeatherMapAPI for fetching the result according to the city searched.",
    github: 'https://github.com/Harshika-Juneja/Weather-App',
    demo:"https://hj-weather-app.netlify.app/",
  }, {
    id: 7,
    image: IMG7,
    title: 'Coffee-Shop Design',
    desc: 'Responsive coffee shop website design built with HTML,CSS,JS where customers can order coffee, leave reviews.',
    github: 'https://github.com/Harshika-Juneja/Cofffee-Shop-Design',
    demo:"https://hj-coffee-shop.netlify.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: 'Photo-Blog',
    desc: "This is a single page blog that uses HTML,CSS properties to display photos.",
    github: 'https://github.com/Harshika-Juneja/Photo-Blog-',
    demo:"https://hj-photo-blog.netlify.app/",
  }, {
    id: 9,
    image: IMG9,
    title: 'Museum-Of-Candy',
    desc: "A single page responsive dummy website design built with HTML,CSS and BOOTSTRAP.",
    github: 'https://github.com/Harshika-Juneja/Museum-Of-Candy',
    demo:"https://hj-museum-of-candy.netlify.app/",
  }

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='.portfolio-item-desc' >{desc}</div>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="__blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
