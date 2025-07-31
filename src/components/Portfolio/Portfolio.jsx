import React from 'react'
import style from './Portfolio.module.css'
import image1 from "./../../assets/poert1.png"
import image2 from "./../../assets/port2.png"
import image3 from "./../../assets/port3.png"

const Portfolio = () => {
  return (
    <div className={`${style.portfolio} d-flex flex-wrap align-items-center justify-content-center my-4`}>
      <div>
        <div className='  mx-auto text-center'>

          <h1 className={`${style.title} text-uppercase fw-bold`}>portfolio component</h1>
          <div className={`${style.line} d-flex flex  w-25 mx-auto mt-3 `}>
            <span className='w-50 mt-2'></span>
            <i className='fas fa-star mx-3 '></i>
            <span className='w-50 mt-2'></span>

          </div>
        </div>
        <div className='container '>
          <div className='row   mt-3  g-5'>
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image1} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image2} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image3} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image1} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image2} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            <div className="col-md-4  ">
              <div className={`${style.content} position-relative`}>
                <div className="image">
                  <img className='w-100' src={image3} alt="" />
                </div>
                <div className={`${style.background} position-absolute w-100 h-100 top-0 start-0  d-flex flex-wrap justify-content-center align-items-center`}>
                    <i className='fas fa-plus fa-5x '></i>
                </div>
                </div>
            </div>
            
            


          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
