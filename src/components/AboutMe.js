import React from "react";

function AboutMe() {
  return (
    <div className="container my-auto justify-content-md-center">
      <div className="row">
        <div className="col-md-12" id="containerAbout">
          <h1 className="title">About Me</h1>
          <img
            className="col-sm-12"
            id="profil"
            src={require("../components/images/profil.jpg")}
            alt="Janvier Mbilizi"
          />
          <p className="col-sm-12" id="Bio">
            My name is Janvier Mbilizi and I am a Full Stack Web Developer
            educated at the University of Denver (DU) who has a passion for
            approaching programming challenges from different angles. My skills
            include; Computer Science applied to JavaScript, Browser Based
            Technologies (HTML, CSS, JavaScript, jQuery), Databases (MySQL,
            MongoDB), deployment (Heroku, Git), React, Quality Assurance
            (Writing Tests), Server Side Development (Node.js, Express, MERN
            Stack) and proficiency with advanced electronics. My strengths
            include meeting deadlines, creativity, and working as a team to
            create meaningful web applications. I remain calm in fast-paced
            environments and I use my education and skill-set to solve problems
            or debug when code is not working as expected. I strive to adapt
            quickly, communicate effectively, and think critically; These
            strengths allow me to be a team player. I am a quick and dedicated
            learner who is hoping to soon become an asset to your company.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div id="links">
          <a href={require("../components/documents/My Resume.pdf")} target="_blank">
            <img
              className="linkImg"
              src={require("../components/images/resumeIcon.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="my resume"
              alt=""
            />
          </a>
          <a href="https://github.com/Janviermbilizi" target="_blank">
            <img
              className="linkImg"
              src={require("../components/images/github.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my github profil"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/janvier-mbilizi-b39351191/"
            target="_blank"
          >
            <img
              className="linkImg"
              src={require("../components/images/linkIn.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my linkIn profil"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/janvier.mbilizi" target="_blank">
            <img
              className="linkImg"
              src={require("../components/images/facebookLink.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my facebook profil"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
