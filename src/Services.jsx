import React from "react";

const services = [
  { id: 1, title: "Web Design", img: "/img/icon-service-1.png" },
  { id: 2, title: "Development", img: "/img/icon-service-2.png" },
  { id: 3, title: "UI Design", img: "/img/icon-service-3.png" },
  { id: 4, title: "Programming", img: "/img/icon-service-4.png" },
  { id: 5, title: "Graphic Design", img: "/img/icon-service-5.png" },
  { id: 6, title: "Video Editing", img: "/img/icon-service-6.png" },
  { id: 7, title: "SEO", img: "/img/icon-service-7.png" },
  { id: 8, title: "Online Marketing", img: "/img/icon-service-8.png" },
];

const serviceRows = [
  {
    id: 1,
    title: "Web Design",
    img: "/img/service-1.png",
    reverse: false,
  },
  {
    id: 2,
    title: "Web Development",
    img: "/img/service-2.png",
    reverse: true,
  },
  {
    id: 3,
    title: "Web Security",
    img: "/img/service-3.png",
    reverse: false,
  },
  {
    id: 4,
    title: "Online Marketing",
    img: "/img/service-4.png",
    reverse: true,
  },
];

function Services() {
  return (
    <div>
        <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Our Services</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Services</a>
                        </div>
                    </div>
                </div>
            </div>

      {/* Services Grid */}
      <div className="service">
        <div className="container-fluid">

          <div className="section-header">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="row">
            {services.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="service-item">
                  <h3>{item.title}</h3>
                  <img src={item.img} alt="Service" />
                  <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Service Rows */}
      {serviceRows.map((row) => (
        <div key={row.id} className="service-row">
          <div className="container">
            <div className="row align-items-center">

              {/* Image Left */}
              {!row.reverse && (
                <div className="col-md-6">
                  <div className="service-row-img">
                    <img src={row.img} alt="Service" />
                  </div>
                </div>
              )}

              {/* Text */}
              <div className="col-md-6">
                <div className="service-row-text">
                  <h2 className="section-title">{row.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi.
                  </p>
                  <button className="btn">Read More</button>
                </div>
              </div>

              {/* Image Right */}
              {row.reverse && (
                <div className="col-md-6">
                  <div className="service-row-img">
                    <img src={row.img} alt="Service" />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Services;