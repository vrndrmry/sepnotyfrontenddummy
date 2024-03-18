import React, { useContext, useState } from "react";
import "./admin.css";
import sepnotyLogo from "../assets/navbar/sepnotyLogo.svg";
import adminlogin from "../assets/admin/adminlogin.svg";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext.js";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [tnc, setTnc] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const fromHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8800/api/login/user`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    });
    await response.json().then((data) => setUserInfo(data));
    if (!response.ok) {
      response.status === 400
        ? alert("Enter username and password")
        : response.status === 402
        ? alert("Enter correct username")
        : response.status === 401
        ? alert("Enter correct password")
        : alert(
            "There is an error in loging. Please contact team for resolution"
          );
    }
    if (response.ok) {
      setRedirect(true);
      console.log(userInfo.id);
    }
  };

  if (redirect) {
    return <Navigate to={`/admin/${userInfo.id}`} />;
  }

  return (
    <div className="admin">
      <h5>{"Resources > Admin login"}</h5>
      <div className="admincontainer">
        <div className="login-info">
          <img src={sepnotyLogo} alt="sepnotylogo" />
          <h2>Welcome</h2>
          <p>Sign in to continue Access</p>
          <img className="adminimg" src={adminlogin} alt="adminimg" />
        </div>
        <div className="login">
          <p>Sign In</p>
          <form onSubmit={fromHandler}>
            <input
              type="text"
              value={username}
              placeholder="Email Address / Mobile Number"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="tnc">
              <input
                type="checkbox"
                id="tnc"
                name="tnc"
                onChange={(e) => console.log(e.target.checked)}
              />{" "}
              By signing up you agreeing with the terms & conditions and privacy
              policy of Sepnoty.com
            </label>
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
