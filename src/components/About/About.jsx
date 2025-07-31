import React from 'react';
import style from "./About.module.css"
const About = () => {
  return (
    <div className={`${style.about}  text-white d-flex flex-wrap align-items-center justify-content-center`}>
      <div>
        <div className=' text-white mx-auto text-center'>

          <h1 className='text-uppercase '>about component</h1>
          <div className= {`${style.line} d-flex flex   mx-auto mt-3 `}>
            <span className='w-50 mt-2'></span>
            <i className='fas fa-star mx-3 text-white'></i>
            <span className='w-50 mt-2'></span>

          </div>
        </div>
        <div className='container '>
          <div className='row   mt-3 mx-5 '>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
