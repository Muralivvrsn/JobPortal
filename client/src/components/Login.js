import React, { useState } from "react";
import { Link } from "react-router-dom";
import picture from '../images/login.jpg'
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <div>
        <div className="signup-form shadow bg-body rounded">
          <div className="section1">
            <img src={picture} alt="" />
          </div>
          <div className="section2 container align-items-center justify-content-center">
            <h3 className="text-center">Log in</h3>
            <form
              className="px-5 py-4 my-5 mx-1 bg-white rounded"
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={(e)=>setEmail(e.target.value)}
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
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  placeholder="Enter password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-3 py-1"
                >
                  Log in
                </button>
              </div>
              <div className="form-group pt-1 mt-2">
                <p className="text-center">
                  Doesn't have account?
                  <Link to="/register">Creat account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
