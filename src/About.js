import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="https://thumbs.dreamstime.com/b/businessman-behalf-company-welcoming-young-male-employee-boardroom-meeting-introducing-hired-worker-office-getting-182382430.jpg" 
                alt="About SD IT Solutions" 
              />
            </div>

            <div className="col-md-6">
              <h2 className="section-title">Learn About SD IT Solutions</h2>
              <p>
                Welcome to <strong>SD IT Solutions</strong>. We are a premier IT service provider 
                dedicated to helping businesses transform through technology. Our team specializes 
                in delivering high-quality web applications, custom software, and digital strategies.
              </p>
              <p>
                With a strong focus on innovation and client satisfaction, we use modern technologies 
                 like <strong>Python, Django, and React</strong> to build solutions that are not only 
                efficient but also scalable for future growth.
              </p>
              <button className="btn">View Our Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="story">
        <div className="container-fluid">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From a vision to a leading IT solution provider.</p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="story-container">
                <div className="story-end">
                  <p>Present</p>
                </div>

                <div className="story-continue">
                  {/* Expansion - 2024 */}
                  <div className="row story-right">
                    <div className="col-md-6">
                      <p className="story-date">15 March 2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-icon">
                          <i className="fa fa-rocket"></i>
                        </div>
                        <div className="story-text">
                          <h3>Expanding Horizons</h3>
                          <p>Successfully delivered 50+ web projects globally.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Technology - 2022 */}
                  <div className="row story-left">
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-icon">
                          <i className="fa fa-code"></i>
                        </div>
                        <div className="story-text">
                          <h3>Tech Evolution</h3>
                          <p>Adopted React & Cloud technologies for faster delivery.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="story-date">10 Jan 2022</p>
                    </div>
                  </div>

                  {/* Year Mark */}
                  <div className="row">
                    <div className="col-12">
                      <div className="story-year">
                        <p>2021</p>
                      </div>
                    </div>
                  </div>

                  {/* Growth Phase */}
                  <div className="row story-right">
                    <div className="col-md-6">
                      <p className="story-date">01 Dec 2020</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-icon">
                          <i className="fa fa-users"></i>
                        </div>
                        <div className="story-text">
                          <h3>Growing Team</h3>
                          <p>Built a dedicated team of expert Python developers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Start */}
                <div className="story-start">
                  <p>Launch</p>
                </div>

                <div className="story-launch">
                  <div className="story-box">
                    <div className="story-text">
                      <h3>Founded SD IT Solutions</h3>
                      <p>Started our mission to provide affordable IT services in 2019.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;