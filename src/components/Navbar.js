import MainLogo from "../assets/MainLogo.png";
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <div className="container-fluid px-5">
        <Link to="/">
          <img src={MainLogo} className="img-fluid mx-lg-5" alt="Responsive image" style={{height: '40px', width: 'auto'}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link active fw-bold" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link fw-bold">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link fw-bold">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link fw-bold">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link fw-bold">Gallery</Link>
            </li>
          </ul>
          <button className="btn mx-lg-auto px-3" style={{background: '#373B61', color: '#FFFFFF', borderRadius: '30px'}} type="submit"><Link to="/product" className="nav-link fw-bold">Shop now</Link></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
