import React from "react";
import myImage from './img/myimg.png.jpeg';
import kiShow from './img/kishow.jpg.jpeg';

const teamData = [
  
  { id: 1, img: myImage, name: "Saurabh Dhage", role: "Founder & CEO" },
  
  { id: 2, img: kiShow, name: "Kishor Wavare", role: "Co-Founder & CTO" },
  { id: 3, img: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=", name: "Rahul Shinde", role: "Full Stack Development & Cloud Computing." },
  { id: 4, img: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg", name: "sandip Dhage", role: "UI/UX Design & Frontend Technologies (React)." },
];

function Team() {
  return (
    <div className="team">
      <div className="container-fluid">

        {/* Header */}
        <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Our Team</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Team</a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="section-header">
          <h2>Our Expert Team</h2>
          <p>
             At SD IT Solutions, we are a group of passionate innovators dedicated 
        to transforming your business ideas into powerful digital realities. 
        Our experts bring years of experience in high-end software development 
        to every project we handle
          </p>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamData.map((member) => (
            <div key={member.id} className="col-sm-6 col-lg-3">
              <div className="team-item">

                <div className="team-img">
                  <img src={member.img} alt="Team" />
                </div>

                <div className="team-text">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>

                <div className="team-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-pinterest"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Team;