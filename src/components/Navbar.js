
 import React from 'react'
 import { NavLink } from 'react-router-dom'
 const Navbar = () => {
  return (
 <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <NavLink className="navbar-brand" to="/">LUMENORE BLOG</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/check">Check</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar