import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './acousticamplify-low-resolution-color-logo.png'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logo' src={Logo} alt="" srcset="" />
          </a>
      <form className="d-flex mt-2 mb-2" role="search">
          <input
            className="form-control me-3 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          AcousticAmplify
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Login">
              Log-in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Signup" >
              Sign-up
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="Manageuser" >
              Music Library
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="MusicUpload">
              Upload-Music
            </NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar