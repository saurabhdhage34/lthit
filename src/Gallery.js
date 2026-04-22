import React, { useState } from "react";


const images = [
  { id: 1, img: "https://thumbs.dreamstime.com/b/confident-diverse-professional-business-team-standing-modern-office-looking-camera-confident-diverse-professional-business-355588864.jpg", category: "design" },
  { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkbAxlQNiUkx3xhux0WV82PqC3_l4HggHng&s", category: "development" },
  { id: 3, img: "https://www.shutterstock.com/image-photo/laptop-statistics-communication-business-people-260nw-2301505077.jpg", category: "marketing" },
  { id: 4, img: "https://www.shutterstock.com/image-photo/laptop-statistics-communication-business-people-260nw-2301505077.jpg", category: "design" },
  { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMSmnhPCJ9QqiDo3uz3Ul3XW80NhTtf8P6A&s", category: "development" },
  { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMSmnhPCJ9QqiDo3uz3Ul3XW80NhTtf8P6A&s", category: "marketing" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="gallery">
      <div className="container">

        <h2>Our Gallery</h2>

        

        {/* Images */}
        <div className="row">
          {filteredImages.map((item) => (
            <div key={item.id} className="col-md-4 gallery-item">
              <img src={item.img} alt="gallery" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Gallery;