import React from 'react'
import './career.css'
import careeroppo from "../../../../assets/admin/careeroppo.svg";
export default function Career() {
  return (
    <div>
      <p>Career Opportunities</p>
      <p>
        &#8195; &#8195; &#8195;Career opportunities refer to the various avenues
        and prospects for professional advancement and development available to
        individuals within their chosen field or industry. These opportunities
        encompass job openings, promotions, skill development programs,
        networking events, educational pursuits, and other avenues for personal
        and professional growth.
      </p>
      <div className="careerCards">
        <div className="careerCard">
          <div className="careerImg">
            <img src={careeroppo} alt="" />
          </div>
          <div className="careerDetails">
            <p>Software Tester</p>
            <p>Experience: 0-2 years</p>
            <p>CTC: Upto 4 LPA</p>
            <p>Onsite</p>
          </div>
          <div className="applyDiv">
            <button>Apply</button>
            <div className="applyIcon">
              <span>
                <i className="bi bi-pencil-square"></i>
              </span>
              <span>
                <i className="bi bi-trash"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="careerCard">
          <div className="careerImg">
            <img src={careeroppo} alt="" />
          </div>
          <div className="careerDetails">
            <p>Software Tester</p>
            <p>Experience: 0-2 years</p>
            <p>CTC: Upto 4 LPA</p>
            <p>Onsite</p>
          </div>
          <div className="applyDiv">
            <button>Apply</button>
            <div className="applyIcon">
              <span>
                <i className="bi bi-pencil-square"></i>
              </span>
              <span>
                <i className="bi bi-trash"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="careerCard">
          <div className="careerImg">
            <img src={careeroppo} alt="" />
          </div>
          <div className="careerDetails">
            <p>Software Tester</p>
            <p>Experience: 0-2 years</p>
            <p>CTC: Upto 4 LPA</p>
            <p>Onsite</p>
          </div>
          <div className="applyDiv">
            <button>Apply</button>
            <div className="applyIcon">
              <span>
                <i className="bi bi-pencil-square"></i>
              </span>
              <span>
                <i className="bi bi-trash"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
