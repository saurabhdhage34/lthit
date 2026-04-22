import React from "react";

const jobs = [
  {
    id: 1,
    title: "PHP Developer - MVC / Yii",
    location: "Pune",
    type: "Full Time",
    link: "https://sparken.in/wordpress/php-developer/",
    skills: [
      "1+ year experience in PHP/MySQL",
      "MVC architecture knowledge",
      "Good communication",
      "Strong logic",
    ],
  },
  {
    id: 2,
    title: "Android Developer (1-3 Yrs)",
    location: "Pune",
    type: "Full Time",
    link: "https://sparken.in/wordpress/android-developer-1-3-yrs-exp-pune/",
    skills: [
      "Core Java & Android SDK",
      "API, XML, JSON",
      "REST services knowledge",
    ],
  },
  {
    id: 3,
    title: "Java Developer (1-3 Yrs)",
    location: "Pune",
    type: "Full Time",
    link: "https://sparken.in/wordpress/java-developer-1-to-3-yrs-exp-pune/",
    skills: [
      "Core Java",
      "Spring, Hibernate",
      "REST & SOAP",
    ],
  },
];

function Careers() {
  return (
    <>
    <div class="container-fluid text-center bg-primary text-white p-5">
                    <div class="row  p-5">
                        <div class="col-12">
                            <div className="entry-banner">
        <div className="container">
          <h1 className="entry-title">Careers</h1>
        </div>
      </div>

                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Portfolio</a>
                        </div>
                    </div>
    </div>
    <div className="careers">
     
     

      {/* Banner */}
      <div className="entry-banner">
        <div className="container">
          <h1 className="entry-title"></h1>
        </div>
      </div>

      {/* Intro */}
      <div className="container">
        <h3>🌟 Join the Team! 🌟</h3>
        <p>We are looking for talented developers (1-5 years experience).</p>

        <p>
          📧 Send resume:
          <a href="mailto:hr@sparken.in"> hr@sparken.in</a>
        </p>

        <p>📞 Contact: +91-9168798866</p>
      </div>

      {/* Jobs */}
      <div className="container mt-4">
        {jobs.map((job) => (
          <div key={job.id} className="apply-item mb-4 p-3 border">

            <h3>{job.title}</h3>

            <ul>
              {job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <p>
              <strong>Location:</strong> {job.location} |{" "}
              <strong>Type:</strong> {job.type}
            </p>

            <a
              href={job.link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Apply Now
            </a>

          </div>
        ))}
      </div>

    </div>
    </>
  );
}

export default Careers;