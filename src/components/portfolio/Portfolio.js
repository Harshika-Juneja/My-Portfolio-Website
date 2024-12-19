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
import CFimg from '../../assets/cf.png'
import BSimg from '../../assets/Bs.png'
import MOVimg from '../../assets/mov.png'

const data = [
  {
    id: 1,
    image: CFimg,
    title: 'CastFinder Platform  ',
    desc: "Platform built using Html,Css,Bootstrap,Js and React for seamless interaction between models/talents and casting agencies.",
    demo:"https://castfinder.eu/",
  },
  {
    id: 2,
    image: BSimg,
    title: 'BrandSeeder : Digital Marketing agency',
    desc: "Website built using Html,Css,Js and Jquery handled through CMS for a digital marketing agency.",
    demo:"https://www.brandseeder.com/",
  }, 
  {
    id: 3,
    image: MOVimg,
    title: 'Movilla: A Movie Streaming Platform',
    desc: "A movie/tv shows streaming app built using React, Context Api, React routing , Firebase Firestore , Api Integration.",
    demo:"https://hj-login-register.netlify.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: 'My-Notes-Taking-App',
    desc: "This App functions as a service for viewing, making, editing,deleting and searching short text notes.",
    demo:"https://hj-note-taking-app.netlify.app/",
  },
  {
    id: 5,
    image: IMG4,
    title: 'Contact-App',
    desc: "This is the front-end of the contact app which allows users to perform functions like create, add, delete, edit, search contacts from you app directory.",
    demo:"https://hj-contacts-app.netlify.app/",

  }, {
    id: 6,
    image: IMG3,
    title: 'Analog-and-Digital-Clock-Design ',
    desc: "This real-time clock design is created using Html,CSS,JS. It shows the current time both analogically and digitally.",
    demo:"https://hj-analog-digital-clock.netlify.app/",
  },
  {
    id: 7,
    image: IMG1,
    title: 'Animated Registration-Login Design ',
    desc: "This is an animated login-registration form created by using Html,Css.",
    demo:"https://hj-login-register.netlify.app/",
  },
  {
    id: 8,
    image: IMG6,
    title: 'Weather-App',
    desc: "A simple weather application that displays the current weather, temperature, humidity, wind speed based on search. It uses OpenWeatherMapAPI for fetching the result according to the city searched.",
    demo:"https://hj-weather-app.netlify.app/",
  }, {
    id: 9,
    image: IMG7,
    title: 'Coffee-Shop Design',
    desc: 'Responsive coffee shop website design built with HTML,CSS,JS where customers can order coffee, leave reviews.',
    demo:"https://hj-coffee-shop.netlify.app/",
  },


]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, desc, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='.portfolio-item-desc' >{desc}</div>
                <div className='portfolio__item-cta'>
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
