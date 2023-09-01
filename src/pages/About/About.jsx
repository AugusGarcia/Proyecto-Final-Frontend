import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "../../css/aboutus.css";
import a1 from "../../Coffe-img/a1.jpg";
import l1 from "../../Coffe-img/l1.jpg";
import e1 from "../../Coffe-img/e1.jpg";

export const About = () => {
  const teamMembers = [
    {
      name: "Augusto Cesar Garcia",
      role: "Developer Full Stack",
      info: "19 Años, Web Programming Student.",
      image: a1,
    },
    {
      name: "Leonardo Diaz",
      role: "Developer Full Stack",
      info: "26 años, Web Programming Student.",
      image: l1,
    },
    {
      name: "Ezequiel Moreira",
      role: "Developer Full Stack",
      info: "24 años, Web Programming Student.",
      image: e1,
    },
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">About us?</h2>
            <p className="section-subtitle">
             Hello how are you?. We are a group of young developers who are in charge of making the website of your dreams come true.
            </p>
          </div>
          
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="team-item">
                <img src={member.image} className="team" alt="pic" />
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.role}</p>
                  <p>{member.info}</p>

                  <ul className="team-icon">
                    <li>
                      <a href="#" className="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};