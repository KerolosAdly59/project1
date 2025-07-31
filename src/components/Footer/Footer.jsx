
import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className="container ">
        <div className="row pt-5 ms-5 ps-5">
          <div className="col-md-4">
            <h4 className='h3'>location</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h4 className='h3 text-uppercase ps-2'>about the web</h4>
          <ul className='d-flex flex-wrap justify-align-content-start'>
            <li><i className='fa-brands fa-facebook '></i></li>
            <li><i className='fa-brands fa-twitter '></i></li>
            <li><i className='fa-brands fa-linkedin '></i></li>
            <li><i className="fas fa-globe  "></i></li>
          </ul>
          </div>
          <div className="col-md-4 ">
            <h4 className='h3 text-uppercase'>abouut freelancer</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className={`${style.capy} text-center pt-4 pb-3`}>
      <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}

export default Footer
