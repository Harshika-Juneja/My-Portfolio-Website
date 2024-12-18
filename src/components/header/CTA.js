import React from 'react'
import CV from '../../assets/cv.pdf'
import Resume from '../../assets/resume.pdf'
import Degree from '../../assets/degree.pdf'
const CTA = () => {
  return (
    <div>
      <div className='cta'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href={Degree} className='btn btn-primary' target='__blank'>Download Degree</a>
      </div>
    </div>
  )
}

export default CTA
