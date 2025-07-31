import React from 'react'
import style from "./contact.module.css"
const Contact = () => {
  return (
    <div className={`${style.contact}  text-white d-flex flex-wrap align-items-center justify-content-center`}>
      <div className='w-50'>
        <div className=' text-white mx-auto text-center'>

          <h1 className={`${style.title} text-uppercase  fw-bold`}>contact section</h1>
          <div className={`${style.line} d-flex flex  mx-auto mt-3 `}>
            <span className='w-50 mt-2'></span>
            <i className='fas fa-star mx-3'></i>
            <span className='w-50 mt-2'></span>

          </div>
        </div>
        <div className='container  w-100 '>
          <form>
            <div className="mb-3">
              <label for="exampleInputName1" className="form-label">Name address</label>
              <input type="Name" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder='userName'/>
            </div>
            <div className="mb-3">
              <label for="exampleInputAge1" className="form-label">Age address</label>
              <input type="Age" className="form-control" id="exampleInputAge1" aria-describedby="AgeHelp" placeholder='userAge'/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='userEmail'/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='userPassword'/>
            </div>
            
            <button type="submit" className="btn btn-info">send Message</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
