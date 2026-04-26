import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const editors = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZz_EAbRPI33cqpyrdjUWfCPKcIRqjzFhGw&s",
    name: "Saurabh Dhage",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZz_EAbRPI33cqpyrdjUWfCPKcIRqjzFhGw&s",
    name: "SD IT Team",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_fg1e6gt",     // ✅ correct service ID
        "template_zbqg1ki",    // ✅ correct template ID
        templateParams,
        "4C5PCsyZ5vEWYByW-"    // ✅ public key
      )
      .then(() => {
        alert("✅ नमस्कार " + formData.name + ", तुमचा संदेश यशस्वी पाठवला!");
        
        setFormData({
          name: "",
          email: "",
          service: "Web Development",
          message: "",
        });
      })
      .catch((error) => {
        console.log("ERROR:", error);
        alert("❌ काहीतरी error आला, कृपया पुन्हा प्रयत्न करा.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

 return (
    <div className="contact-page">
      {/* Header */}
      <div className="page-header text-center py-5 bg-light">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          <a href="/" className="text-decoration-none">Home</a> / Contact Us
        </p>
      </div>

      <div className="container my-5">
        <div className="row">

          {/* FORM SECTION */}
          <div className="col-md-7">
            <div className="card p-4 shadow-sm border-0">
              <h3 className="mb-4 fw-semibold">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Service</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Software Solutions">Software Solutions</option>
                    <option value="CCTV & Security">CCTV & Security</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-bold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT INFO SECTION */}
          <div className="col-md-5">
            <div className="ps-md-4 mt-5 mt-md-0">
              <h4 className="fw-bold">Contact Information</h4>
              <p className="mb-2">
                <strong>Address:</strong> Shevgaon, Ahmednagar, Maharashtra, India.
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +91 7499802143
              </p>
              <p className="mb-4">
                <strong>Email:</strong> saurabhdhage20114@gmail.com
              </p>

              <hr />
              <h5 className="mt-4 mb-3">Core Team</h5>

              {editors.map((person) => (
                <div key={person.id} className="d-flex align-items-center mb-3">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="rounded-circle me-3 shadow-sm"
                    width="55"
                    height="55"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{person.name}</h6>
                    <small className="text-muted">SD IT Solutions</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;