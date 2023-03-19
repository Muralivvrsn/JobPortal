import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'
const Onboard = () => {
  return (
    <div>
      <div className="Nav">
        <header className="d-flex mx-auto">
          <nav>
            <img src={logo} alt="" />
          </nav>
          <nav>
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </nav>
        </header>
      </div>
      <div className="explore">
        <h1 className="text-center mt-5 p-5 w-4 h-5">
          Choose a job you love, and you will never have to work a day in your
          life
        </h1>
        <Link to="/swrong">
          <button className="btn-warning text-center">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Onboard;
