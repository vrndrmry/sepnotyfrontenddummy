import React from 'react'
import img from "../../../../assets/admin/img.svg"; 
import './article.css'
export default function Article() {
  return (
    <div className="items">
      <div className="item">
        <div className="item-content">
          <img src={img} alt="" />
          <p>
            The Disney Principle of Motion Design for InterfaceAnimations.....
          </p>
          <p>
            <i className="bi bi-eye"></i> 6000 views
          </p>
        </div>
        <div className="btn">
          <span>
            <i className="bi bi-pencil-square"></i>
          </span>
          <span>
            {" "}
            <i className="bi bi-trash"></i>
          </span>
        </div>
      </div>
      <div className="item">
        <div className="item-content">
          <img src={img} alt="" />
          <p>
            The Disney Principle of Motion Design for Interface Animations.....
          </p>
          <p>
            <i className="bi bi-eye"></i> 6000 views
          </p>
        </div>

        <div className="btn">
          <span>
            <i className="bi bi-pencil-square"></i>
          </span>
          <span>
            <i className="bi bi-trash"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
