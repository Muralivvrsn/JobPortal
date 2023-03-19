import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { validEmail, validPassword } from "./extraCredentails/validation";
import picture from "../images/login.jpg";
import Swrong from "../components/extraCredentails/Swrong";
import axios from "axios";
import { useDispatch, useSelector} from 'react-redux';
import { errorActions }  from '../store/Error'
import { loginActions } from "../store/Login";
import { loadingActions } from "../store/Loading";
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [text,setText] = useState("Something Went Wrong!!");
  const navigate = useNavigate();
  const login = useSelector((state)=>state.log.isLogin)
  // const hadError = useSelector(state=>state.check.isError);
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    dispatch(loadingActions.startLoading());
    e.preventDefault();
    setErrors((prev) => ({ ...prev, password: validPassword(password) }));
    setErrors((prev) => ({ ...prev, email: validEmail(email) }));
    if (Object.values(errors).every((x) => x === null || x === "")) {
     
      const res = await axios
        .get("http://localhost:4000/api/login", {
          params:{
            email:email,
            password:password
          }
        })
        .then((resp) => {
          dispatch(loginActions.hasLogin());
          return resp;
        })
        .catch((err) => {
          dispatch(errorActions.hasError())
          console.log(err)
          setText(err.data=="" || err.data==null?"Something Went Wrong!!":err.data);
          return err;
        });
        console.log(res)
      console.log("res",res);
    }
    dispatch(loadingActions.stopLoading());
  };
  useEffect(()=>{
    if(login){
      navigate("/home");
    }
  })
  return (
    <div>
      <Swrong text={text} />
      <div>
        <div className="signup-form shadow bg-body rounded">
          <div className="section1">
            <img src={picture} alt="" />
          </div>
          <div className="section2 container align-items-center justify-content-center">
            <h3 className="text-center">Log in</h3>
            <div className="px-5 py-4 my-5 mx-1 bg-white rounded">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={` border border-${
                    errors.email !== "" ? "danger" : "dark"
                  }`}
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: validEmail(e.target.value) });
                  }}
                  required
                />
                <small className="text-danger">{errors.email}</small>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className={` border border-${
                    errors.password !== "" ? "danger" : "dark"
                  }`}
                  id="pwd"
                  name="pwd"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: validPassword(e.target.value),
                    });
                  }}
                  required
                  placeholder="Enter password"
                />
                <small className="text-danger">{errors.password}</small>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-3 py-1"
                  onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
