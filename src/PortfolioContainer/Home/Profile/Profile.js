import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className=" profile-parent">
        <div className=" profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="/">
                <i
                  class="bi bi-linkedin"
                  style={{
                    color: "white",
                    padding: "14px",
                    paddingLeft: "0px",
                  }}
                ></i>
              </a>
              <a href="/">
                <i
                  class="bi bi-facebook"
                  style={{
                    color: "white",
                    padding: "14px",
                    paddingLeft: "0px",
                  }}
                ></i>
              </a>
              <a href="/">
                <i
                  class="bi bi-twitter"
                  style={{
                    color: "white",
                    padding: "14px",
                    paddingLeft: "0px",
                  }}
                ></i>
              </a>
              <a href="/">
                <i
                  class="bi bi-github"
                  style={{
                    color: "white",
                    padding: "14px",
                    paddingLeft: "0px",
                  }}
                ></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Jiad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic To Learn",
                    1000,
                    "Junior Full Stack Dev",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "JavaScript Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I can solve{" "}
                <span
                  className="text-muted"
                  style={{ textDecoration: "line-through" }}
                >
                  all some one of your
                </span>{" "}
                problems, ok?
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Ekramul_Haque Jiad_Full_Stack_Developer.pdf"
              download="Ekramul_Haque Jiad_Full_Stack_Developer.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className=" profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
