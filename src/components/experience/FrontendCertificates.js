import React from 'react'
import Certificate from '../../assets/certificates/frontend/frontend.pdf'
import Degree from '../../assets/degree.pdf'
const FrontendCertificates = () => {
  return (
    <div>
      <div className='cta'>
        <a href={Certificate} className='btn btn-primary' target='__blank'>Download Certificates</a>
      </div>
    </div>
  )
}

export default FrontendCertificates