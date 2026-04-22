import React, { useState } from "react";

const portfolioData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd_g9ICI63ENe7LArNfiqarnns24o3NWMgQ&s",
    category: "web-des"
  },
  {
    id: 2,
    img: "https://thumbs.dreamstime.com/b/person-using-laptop-virtual-seo-interface-stylus-pen-representing-digital-marketing-strategy-search-engine-optimization-434772319.jpg",
    category: "web-dev"
  },
  {
    id: 3,
    img: "https://www.shutterstock.com/image-photo/close-man-using-smartphone-social-260nw-2649058309.jpg",
    category: "dig-mar"
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ08TncY3Q736Rserf2zEwzIfzrTwveb8csw&s",
    category: "web-des"
  },
  {
    id: 5,
    img: "https://static.vecteezy.com/system/resources/previews/027/303/378/non_2x/digital-marketing-commerce-online-sale-concept-promotion-of-products-or-services-through-digital-channels-search-engine-social-media-email-website-digital-marketing-strategies-and-goals-seo-ppc-photo.JPG",
    category: "web-des"
  },
  {
    id: 6,
    img: "https://thumbs.dreamstime.com/b/person-using-digital-pen-laptop-to-targets-review-documents-illustrating-workflow-optimization-task-completion-442631140.jpg",
    category: "web-dev"
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHSK1M7hf2uqtougVrMiszrGb-kSGiJOwcA&s",
    category: "dig-mar"
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd_g9ICI63ENe7LArNfiqarnns24o3NWMgQ&s",
    category: "web-des"
  }
];

function Portfolio() {
  const [filter, setFilter] = useState("*");

  const filteredData =
    filter === "*"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="portfolio">
      <div className="container">

        {/* Header */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Portfolio</h2>
              </div>
              <div className="col-12">
                <a href="/">Home</a>
                <a href="#">Portfolio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>

        {/* Filters */}
        <div className="row">
          <div className="col-12">
            <ul id="portfolio-flters">
              <li
                className={filter === "*" ? "filter-active" : ""}
                onClick={() => setFilter("*")}
              >
                All
              </li>

              <li
                className={filter === "web-des" ? "filter-active" : ""}
                onClick={() => setFilter("web-des")}
              >
                Design
              </li>

              <li
                className={filter === "web-dev" ? "filter-active" : ""}
                onClick={() => setFilter("web-dev")}
              >
                Development
              </li>

              <li
                className={filter === "dig-mar" ? "filter-active" : ""}
                onClick={() => setFilter("dig-mar")}
              >
                Digital Marketing
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 col-sm-6 portfolio-item"
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={item.img} alt="Portfolio" />

                  <a href={item.img} className="link-preview">
                    <i className="fa fa-eye"></i>
                  </a>

                  <a href="#" className="link-details">
                    <i className="fa fa-link"></i>
                  </a>

                  <a className="portfolio-title" href="#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="row">
          <div className="col-12 load-more">
            <button className="btn">Load More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;