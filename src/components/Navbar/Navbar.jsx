import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"



const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-dark-subtle">
  <div className="container">
    <NavLink className="navbar-brand text-uppercase logo text-white h1 fw-bold" to="/home">startframework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white me-5">
        <li className="items nav-item me-3">
          <NavLink className="nav-link h3 text-white fw-medium  " aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="items nav-item me-3">
          <NavLink className="nav-link h3 text-white fw-medium" to="/portfolio">portfolio</NavLink>
        </li>

        <li className="items nav-item me-3">
          <NavLink className="nav-link h3 text-white fw-medium" to="/contact">contact</NavLink>
        </li>

      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar
