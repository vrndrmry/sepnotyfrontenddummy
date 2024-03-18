import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import sepnotyLogo from "../../assets/navbar/sepnotyLogo.svg";
import { UserContext } from "../../../Context/userContext.js";
import adminprofile from "../../assets/admin/adminprofile.svg";
import article from "../../assets/admin/article.svg";
import blog from "../../assets/admin/blog.svg";
import career from "../../assets/admin/career.svg";
import event from "../../assets/admin/event.svg";
import project from "../../assets/admin/project.svg";
import report from "../../assets/admin/report.svg";

import { Navigate } from "react-router-dom";
import Editor from "./Editor.js";
import blogimg from "../../assets/admin/blogimg.svg";
import BlogList from "./Components/Blog/BlogList.js";
import Article from "./Components/articles/Article.js";
import Career from "./Components/career/Career.js";

export default function DashBoard() {
  const { userInfo } = useContext(UserContext);
  const [createBtnStatus, setCreateBtnStatus] = useState(false);
  const [btnText, setBtnText] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [date, setDate] = useState("");

  const logout = async () => {
    const response = await fetch(`http://localhost:8800/api/login/user/logout`);
    if (response.ok && response.status === 200) {
      setRedirect(true);
    }
  };

  const createBtnHandler = (text) => {
    setBtnText(text);
  };

  if (redirect) {
    return <Navigate to="/adminlogin" />;
  }

  return (
    <div className="dashboard">
      <h5>{"Resources > Admin login > DashBoard Page"}</h5>
      {console.log(userInfo)}
      <div className="main">
        <div className="content-top">
          <div className="createBtn">
            <img src={sepnotyLogo} alt="sepnotylogo" />
            {btnText && (
              <button>
                <i className="bi bi-plus-circle"></i> Create {btnText}
              </button>
            )}
          </div>

          <div className="adminInfo">
            <span>{userInfo.name}</span>
            <img src={adminprofile} alt="" />
            <span onClick={() => logout()}>
              <i className="bi bi-box-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="content-bottom">
          <div className="list">
            <ul>
              <li onClick={() => createBtnHandler("article")}>
                <img src={article} alt="" />
                Articles
              </li>
              <li onClick={() => createBtnHandler("blog")}>
                <img src={blog} alt="" />
                Blogs
              </li>
              <li onClick={() => createBtnHandler("career")}>
                <img src={career} alt="" />
                Career Opportunities
              </li>
              <li>
                <img src={report} alt="" />
                Reports
              </li>
              <li>
                <img src={project} alt="" />
                Projects
              </li>
              <li>
                <img src={event} alt="" />
                Events and Workshops
              </li>
            </ul>
          </div>
          <div className="content">
            {(btnText === "article" || btnText === "") && (
              <div>
                <div className="calender">
                  <input
                    type="month"
                    id="date"
                    name="date"
                    value="2024-01"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <Article />
              </div>
            )}
            {btnText === "blog" && <BlogList />}
            {btnText === "career" && (
              <Career/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
