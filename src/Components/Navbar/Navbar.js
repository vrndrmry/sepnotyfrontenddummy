import React, { useState } from "react";
import sepnotyLogo from "../assets/navbar/sepnotyLogo.svg";
import resource from "../assets/navbar/resource.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [resourceBtn, setResourceBtn] = useState(false);

  const resourceBtnHandler = () => {
    setResourceBtn(false);
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={sepnotyLogo} alt="" />
        </div>
        <div className="title">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Career Opportunities</li>
            <li onClick={() => setResourceBtn(!resourceBtn)}>
              Resource Center{" "}
              <i
                className={
                  resourceBtn ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
                }
              ></i>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      {resourceBtn ? (
        <div className="resource">
          <div className="resource-info">
            <h1>Resource Center</h1>
            <p>"Discover, Learn, Grow: Navigate Our Resource Center"</p>
            <img src={resource} alt="Resources" />
          </div>
          <div className="resource-link">
            <h3>Resources</h3>
            <div>
              <ul onClick={resourceBtnHandler}>
                <li>
                  <Link to="/analytics">Analytics and Reporting</Link>
                  <Link to="/recomendations">Content Recommendations</Link>
                  <Link to="/communityfeatures">
                    Collaboration and community features
                  </Link>
                  <Link to="/articles">Technical Articles and Blogs</Link>
                  <Link to="/videotutorials">Video tutorials</Link>
                  <Link to="/learning">Learning Paths and Roadmaps</Link>
                </li>
                <li>
                  <Link to="/eventsandworkshops">Events and Workshops</Link>
                  <Link to="/case">Case Studies and Success Stories</Link>
                  <Link to="/feedback">
                    Feedback and Improvement Mechanisms
                  </Link>
                  <Link to="/adminlogin">Admin Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
