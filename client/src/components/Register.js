import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import picture from '../images/login.jpg'
import axios from 'axios';
function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/register",{
      body:{
        name,
        email,
        password,
      }
    });
    alert(res.data);
    navigate('/login');
  }
  return (
    <div>
      <div>
        <div className="signup-form shadow bg-body rounded">
          <div className="section1">
            <img src={picture} alt="" />
          </div>
          <div className="section2 container align-items-center justify-content-center">
            <h3 className="text-center">Creat Account</h3>
            <form
              className="px-5 py-2 my-5 mx-5 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  name="pwd"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd2">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd2"
                  name="pwd2"
                  onChange={(e) => setCPassword(e.target.value)}
                  required
                  placeholder="re-enter password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-3 py-1"
                >
                  Register
                </button>
              </div>
              <div className="form-group pt-1 mt-2">
                <p className="text-center">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
