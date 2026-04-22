import React, { useState, useEffect } from "react";


const data = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    name: "Customer 1",
    role: "Web Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    name: "Customer 2",
    role: "Designer",
    text: "Phasellus nec pretium mi. Curabitur facilisis ornare velit.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0-aQOMANuuFMLg2wwLQcH4fC8GbOKTAeEw&s",
    name: "Customer 3",
    role: "Manager",
    text: "Aliquam metus tortor, auctor id gravida condimentum.",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-denim-shirt_273609-7230.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Customer 4",
    role: "CEO",
    text: "Curabitur non nisl nec nisi scelerisque maximus.",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial">
      <div className="container">

        <div className="section-header">
          <h2>Clients Review</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* NAV IMAGES */}
        <div className="testimonial-slider-nav">
          {data.map((item, i) => (
            <div
              key={item.id}
              className={`slider-nav ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <img src={item.img} alt="testimonial" />
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="testimonial-slider">
          <div className="slider-item">
            <h3>{data[index].name}</h3>
            <h4>{data[index].role}</h4>
            <p>{data[index].text}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Testimonial;