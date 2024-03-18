import React from 'react'
import blogimg from "../../../../assets/admin/blogimg.svg";
import './blog.css'


export default function BlogList() {
  return (
    <div className="blogs">
      <div className="blog">
        <div className="img">
          <img src={blogimg} alt="" />
        </div>
        <div className="blogContent">
          <span className="type">IOT</span>
          <p className="titleBlog">AZURE-The Future IOT Security</p>
          <p className="summary">
            Internet of Things (IoT) has emerged as a game-changer, it has
            transformed industries, improved efficiency, and changed the way.
          </p>
          <strong className="postdate">Jan 7 2024</strong>
          <div className="btns">
            <div>
              <span>
                <i className="bi bi-pencil-square"></i>
              </span>
              <span>
                <i className="bi bi-trash"></i>
              </span>
            </div>
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="img">
          <img src={blogimg} alt="" />
        </div>
        <div className="blogContent">
          <span className="type">IOT</span>
          <p className="titleBlog">AZURE-The Future IOT Security</p>
          <p className="summary">
            Internet of Things (IoT) has emerged as a game-changer, it has
            transformed industries, improved efficiency, and changed the way.
          </p>
          <strong className="postdate">Jan 7 2024</strong>
          <div className="btns">
            <div>
              <span>
                <i className="bi bi-pencil-square"></i>
              </span>
              <span>
                <i className="bi bi-trash"></i>
              </span>
            </div>
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
