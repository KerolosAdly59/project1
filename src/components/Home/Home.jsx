import React from 'react'
import style from "./Home.module.css"
import home from "./../../assets/avataaars.png"
const Home = () => {
  return (
    <div className={`${style.home}  text-white d-flex flex-wrap align-items-center justify-content-center`}>
      <div>

        <div className='container '>
          <img className='ms-4 ps-3 mb-5 w-75' src={home} alt="userImage" />
        </div>
        <div className='  mx-auto text-center '>

          <h1 className='text-uppercase '>start framework</h1>
          <div className={`${style.line} d-flex flex ms-5  my-3`}>
            <span className='mt-2'></span>
            <i className='fas fa-star mx-3 text-white'></i>
            <span className='mt-2'></span>

          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  )
}

export default Home
