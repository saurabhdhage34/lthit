import React  from "react";

import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          
          {/* About Section */}
          <div className="col-md-5">
            <div className="footer-about">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet metus sit amet diam varius commodo. Aliquam at nisl interdum
              </p>
              <br />
              <p><i className="fa fa-map-marker-alt"></i> 414502, Shevgoan, Maha</p>
              <p><i className="fa fa-phone-alt"></i> +7499802143</p>
              <p><i className="fa fa-envelope"></i> saurabhdhage20114@gmail.com</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-md-7">
            <div className="row">
              
              <div className="col-md-6">
                <div className="footer-link">
                  <h2>Useful Link</h2>
                  <Link to="/about">About Us</Link>
                  <Link to="/story">Our Story</Link>
                  <Link to="/services">Our Services</Link>
                  <Link to="/portfolio">Our Portfolio</Link>
                  <Link to="/projects">Our Projects</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-link">
                  <h2>Useful Link</h2>
                  <Link to="/clients">Our Clients</Link>
                  <Link to="/reviews">Clients Review</Link>
                  <Link to="/customers">Ongoing Customer</Link>
                  <Link to="/support">Customer Support</Link>
                  <Link to="/faqs">FAQs</Link>
                  <Link to="/sitemap">Site Map</Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="https://htmlcodex.com">Saurabh Dhage</a>, All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Template By <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;