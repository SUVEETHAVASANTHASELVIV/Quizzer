import React, { useState } from "react";
import "../Assets/CSS/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../Assets/firebase/useFireStore";
import useFetchCollection from "../Assets/firebase/useFetchCollection";

const LoginPage = ({ setLog }) => {
  const navigate = useNavigate();
  const { addDocument } = useFirestore('user');
  const { documents: Users } = useFetchCollection("user");
  const [authMode, setAuthMode] = useState('signin');

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const [regData, setRegData] = useState({ email: '', password: '' });

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    const { email, password } = regData;
    const foundUser = Users.find((item) => (
      item.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      item.password === password
    ));
    if (foundUser) {
      setLog(true);
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email } = formData;
    const foundUser = Users.find((item) => (
      item.email.trim().toLowerCase() === email.trim().toLowerCase()
    ));
    if (foundUser) {
      alert("Email already exists.");
    } else {
      addDocument(formData);
      setAuthMode("signin");
      navigate("/");
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <div className="login_form_container">
        <form className="Auth-form" onSubmit={handleRegSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center" style={{color:"#ffff"}}>
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1 lower"
                placeholder="Enter email"
                style={{textTransform:"lowercase"}}
                onChange={handleRegChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleRegChange}
              />
            </div>
            
              <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </div>
          
            <p className="text-center mt-2">
              <a href="#" style={{textDecoration:"none"}}>Forgot password?</a>
            </p>
          </div>
        </form>
        </div>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            <p>
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Log In
            </span>
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control mt-1"
              placeholder="Eg Thirumurugan"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
              tyle={{textTransform:"lowercase"}}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handleFormChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
          </div>
          <p className="text-center mt-2">
             <a href="#" style={{textDecoration:"none"}}>Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  )
};

export default LoginPage;