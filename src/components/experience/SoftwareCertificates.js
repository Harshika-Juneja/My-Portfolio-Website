import React from 'react'
import Certificate from '../../assets/certificates/software/software.pdf'
const SoftwareCertificates = () => {
  return (
    <div>
      <div className='cta'>
        <a href={Certificate} className='btn btn-primary' target='__blank'>Download Certificates</a>
      </div>
    </div>
  )
}

export default SoftwareCertificates