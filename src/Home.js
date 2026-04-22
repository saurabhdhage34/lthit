import React from "react";
import Testimonial from "./Testimonial";
import Portfolio from './Portfolio';

function Home() {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* डाव्या बाजूचा मजकूर - बदललेला नाही */}
          <div className="col-md-6">
            <h2>Empowering Business with</h2>
            <h2>
              <span>SD IT</span> Solutions
            </h2>
            <p>
              We provide modern and high-quality IT solutions for your business. 
    From software development to creative web design, we bridge the gap between 
    your ideas and advanced technology!
            </p>
           <a className="btn" href="/contact">
    Contact Us
  </a>
          </div>

          {/* उजव्या बाजूला Carousel (इमेज स्लाइडर) */}
          <div className="col-md-6">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                
                {/* पहिली इमेज (Active असणे गरजेचे आहे) */}
                <div className="carousel-item active">
                  <img src="https://images.livemint.com/img/2021/09/27/600x338/AFP_9DD4KZ_1629870213363_1632742003316.jpg" className="d-block w-100" alt="Slide 1" />
                </div>

                

                {/* तिसरी इमेज */}
                <div className="carousel-item">
                  <img src="https://images.moneycontrol.com/static-mcnews/2022/08/Employees-at-work.jpg?impolicy=website&width=1600&height=900" className="d-block w-100" alt="Slide 3" />
                </div>

                <div className="carousel-item">
                  <img src="https://images.moneycontrol.com/static-mcnews/2022/07/Collage-Maker-04-Jul-2022-07.00-PM-770x435.jpg?impolicy=website&width=1600&height=900" className="d-block w-100" alt="Slide 3" />
                </div>

                <div className="carousel-item">
                  <img src="https://images.moneycontrol.com/static-mcnews/2022/08/Employees-at-work.jpg?impolicy=website&width=1600&height=900" className="d-block w-100" alt="Slide 3" />
                </div>

                <div className="carousel-item">
                  <img src="https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="Slide 3" />
                </div>

              </div>

              {/* स्लाइडर कंट्रोल्स (मागे/पुढे करण्यासाठी) */}
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs- Bih-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>

        </div>
      </div><br/>
    
      <Portfolio/><br/>
      
      <Testimonial />
    </div>
  );
}

export default Home;