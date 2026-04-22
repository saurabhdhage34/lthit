import React from "react";

const editors = [
  { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZz_EAbRPI33cqpyrdjUWfCPKcIRqjzFhGw&s", name: "Name Goes Here" },
  { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZz_EAbRPI33cqpyrdjUWfCPKcIRqjzFhGw&s", name: "Name Goes Here" },
  { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZz_EAbRPI33cqpyrdjUWfCPKcIRqjzFhGw&s", name: "Name Goes Here" },
];

function Contact() {
  return (
    <div>

        <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Contact Us</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

      {/* Contact Section */}
      <div className="contact">
        <div className="container">
          <div className="row">

            {/* Left Side */}
            <div className="col-md-6">
              <h2 className="section-title">Get In Touch</h2>

              <div className="contact-info">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8657333246992!2d-73.95447848459209!3d40.80894417932154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW%20123rd%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1589004464646!5m2!1sen!2sbd"
                  title="map"
                  style={{ border: 0, width: "100%", height: "250px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                <h3>How to reach us:</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur facilisis ornare velit non vulputate.
                </p>

                <h3>
                  Mobile <span>+012 345 6789</span>
                </h3>

                <h3>
                  E-mail <span>contact@example.com</span>
                </h3>

              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <div className="editor-info">

                <h2 className="section-title">Contact Person</h2>

                {editors.map((person) => (
                  <div key={person.id} className="editor-item">

                    <div className="editor-img">
                      <img src={person.img} alt="Editor" />
                    </div>

                    <div className="editor-text">
                      <h3>{person.name}</h3>
                      <a href="mailto:email@example.com">Email Now</a>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="call-to-action">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-9">
              <h2>Get A Free HTML Template</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="col-md-3">
              <a
                className="btn"
                href="https://htmlcodex.com/contact"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;