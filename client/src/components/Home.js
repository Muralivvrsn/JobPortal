import React,{useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import Home1 from '../images/Home.jpg';
import Jobs from '../images/jobs.jpg';
import Profile from '../images/profile.jpg';
import Applied from '../images/Applied.jpg'
import logo from '../images/logo.jpg'
function Home() {
    const login = useSelector((state)=>state.log.isLogin);
    const navigate = useNavigate()
    const [data, setData] =  useState(null);
    const [set, setValue] = useState(true)
    const getData = async()=>{
        const res = await axios.get("http://localhost:4000/api/home").then((res)=>{return res})
        console.log(res);
        setData(res);
        setValue(false);
    }
    if(set){
        getData()
    }
    useEffect(()=>{
        if(!login){
            navigate('/login');
        }
    },[])
  return (
    <div>
      <header className='header'>
        <nav className='header-nav'>
          <Link to="/home"><img src={logo} alt=""  className='logo'/></Link>
          <input type="search" className='search shadow' placeholder='Enter domain'/>
          <img src={Profile} alt="" className='notification'/>
        </nav>
        <nav className='left-nav'>
          <Link to='/home'><img src={Home1} alt="" /></Link>
          <Link to="/profile"><img src={Profile} alt="" /></Link>
          <Link to="/jobs"><img src={Jobs} alt="" /></Link>
          <Link to="/applied"><img src={Applied} alt="" /></Link>
        </nav>
      </header>
    </div>
  )
}

export default Home