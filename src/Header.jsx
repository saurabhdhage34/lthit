import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/sditsolutions.jpg.png";

function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          
          {/* Logo */}
          <div className="col-lg-2">
            <div className="brand">
              <a href="/">
                <img src={logo} alt="Logo" className="h-500 w-200 p-0" />
              </a>
            </div>
          </div>

          <div className="col-lg-10">
            
            {/* Topbar */}
            <div className="topbar">
              <div className="topbar-col">
                <a href="tel:+01234567890">
                  <i className="fa fa-phone-alt"></i> +7499802143
                </a>
              </div>

              <div className="topbar-col">
                <a href="mailto:info@example.com">
                  <i className="fa fa-envelope"></i> saurabhdhage20114@gmail.com
                </a>
              </div>

              <div className="topbar-col">
                <div className="topbar-social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* Navbar */}
            <div className="navbar navbar-expand-lg bg-light navbar-light">
              <a href="#" className="navbar-brand">MENU</a>

              <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
>
  <span className="navbar-toggler-icon"></span>
</button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav ms-auto">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/about" className="nav-item nav-link">About Us</Link>
                  <Link to="/services" className="nav-item nav-link">Services</Link>
                  <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                  <Link to="/team" className="nav-item nav-link">Team</Link>
                  <Link to="/careers" className="nav-item nav-link">Careers</Link>
                  <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                  <Link to="/contact" className="nav-item nav-link">Contact Us</Link>

                 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;