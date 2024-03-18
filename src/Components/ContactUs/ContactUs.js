import React, { useState, useRef } from "react";
import "./contactUs.css";
import meeting from "../assets/contactusform/meeting.svg";
import call from "../assets/contactusform/call.svg";
import chat from "../assets/contactusform/chat.svg";
import mail from "../assets/contactusform/mail.svg";
import whatsapp from "../assets/contactusform/whatsapp.svg";
import getintouch from "../assets/contactusform/getintouch.svg";
import { debounce } from "lodash";
export default function ContactUs() {
  const [upload, setUpload] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState({
    contact: false,
    requestInfo: false,
  });
  const [display, setDisplay] = useState(false);
  const fileInputRef = useRef(null);
  const [check, setCheck] = useState("");


  const changeHandler = (type, e) => {
    console.log(e.target.value);
    if (type === "agreement" && e.target.id === "contact") {
      setAgreement({ ...agreement, contact: !agreement.contact });
    } else if (type === "agreement" && e.target.id === "requestInfo") {
      setAgreement({ ...agreement, requestInfo: !agreement.requestInfo });
    } else {
      switch (type) {
        case "message":
          setMessage(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "username":
          setUsername(e.target.value);
          break;
        case "companyName":
          setCompanyName(e.target.value);
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          break;
        default:
          console.log("Invalid change Handler");
      }
    }
  };
  const browseHandler = () => {
    fileInputRef.current.click();
  };
  const fileHandler = (e) => {
    const allowedTypes = ["application/pdf"];
    if (e.target.files[0]?.type.includes(allowedTypes)) {
      const selectedFile = e.target.files[0];
      setUpload(selectedFile);
    } else {
      alert("Enter only pdf file");
    }
  };
  const formHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("message", message);
    data.set("username", username);
    data.set("email", email);
    data.set("companyName", companyName);
    data.set("phoneNumber", phoneNumber);
    data.set("agreement", JSON.stringify(agreement));
    data.set("files", upload);

    const response = await fetch(
      `http://54.152.29.98:8800/api/contact/contactus`,
      {
        method: "POST",
        body: data,
        headers: {
          "Access-Control-Allow-Headers": "*",
        },
      }
    );
    console.log(response);
  };

  return (
    <section className="contactus">
      <div className="scheduleMeeting">
        <h1>The Brightest Minds in Digital At Your Service</h1>
        <p>
          Partnering across start-ups to SMBs to Corporate businesses, We
          deliver innovation that is measurable, mature, and meaningful.
        </p>
        <button>Schedule Meeting</button>
        <img src={meeting} alt="" />
      </div>
      <div className="contactusForm">
        <div className="left">
          <form onSubmit={formHandler}>
            <h1>Have a question to our team or need help with your project?</h1>
            <p>
              Our team is ready to provide client references, estimate your
              project, or answer any other question related to your IT
              initiative.
            </p>
            <textarea
              rows={7}
              cols={60}
              placeholder="How can we help you?"
              id="message"
              value={message}
              onChange={(e) => changeHandler("message", e)}
            ></textarea>
            <p className="dropZone">
              <i className="bi bi-cloud-upload"></i> Drag and drop or{" "}
              <span onClick={browseHandler}>browse</span>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => fileHandler(e)}
              />
              {"  "}to upload your file(S)?
            </p>

            <div className="content1">
              <input
                type="text"
                placeholder="Full Name"
                id="username"
                value={username}
                onChange={(e) => changeHandler("username", e)}
              />
              <input
                type="text"
                placeholder="Company"
                id="companyName"
                value={companyName}
                onChange={(e) => changeHandler("companyName", e)}
              />
            </div>
            <div className="content2">
              <input
                type="email"
                placeholder="Work email"
                id="email"
                value={email}
                onChange={(e) => changeHandler("email", e)}
              />
              <input
                type="number"
                min="10"
                placeholder="Phone"
                id="phone"
                value={phoneNumber}
                onChange={(e) => changeHandler("phoneNumber", e)}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="contact">
                <input
                  type="checkbox"
                  id="contact"
                  name="contact"
                  onChange={(e) => changeHandler("agreement", e)}
                />{" "}
                I agree to have Sepnoty contact me via email, phone, messengers.
              </label>
              <label htmlFor="requestInfo">
                <input
                  type="checkbox"
                  id="requestInfo"
                  name="requestInfo"
                  onChange={(e) => changeHandler("agreement", e)}
                />{" "}
                I agree to have Sepnoty provide my request information to
                Sepnoty affiliated development center.
              </label>
            </div>

            <button
              disabled={
                !Object.values(agreement).every((elem) => elem === true)
              }
              className={
                !Object.values(agreement).every((elem) => elem === true)
                  ? "disableBtn"
                  : null
              }
            >
              Send
            </button>
          </form>
        </div>
        <div className="right">
          <h1>Get in touch instantly </h1>
          <span>
            <img src={call} alt="" />
            Call us
          </span>
          <span>
            <img src={chat} alt="" />
            Live Chat
          </span>
          <span>
            <img src={whatsapp} alt="" />
            WhatsApp
          </span>
          <span>
            <img src={mail} alt="" />
            Email Us
          </span>
          <div className="getintouch">
            <img src={getintouch} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
