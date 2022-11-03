import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import "./sidebar.css";
import logo from "../Images/logo.png";
import Hamburger from 'hamburger-react'
import { FaHome } from "react-icons/fa";
import { VscReport } from "react-icons/vsc";
import { MdOutlineContactPage, MdOutlineReviews } from "react-icons/md";
import { GoProject } from "react-icons/go";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Sidebar = () => {

  const [menu,setMenu] = useState(false)    //state to know wheter if the menu button is in opwn or close state

  const handleMenu = () =>{
    if(menu===true){
      setMenu(false);
      document.getElementsByClassName("mob-site-logs")[0].style.visibility="hidden"
    }
    else{
      setMenu(true)
      document.getElementsByClassName("mob-site-logs")[0].style.visibility="visible"
    
    }
  }

  document.querySelectorAll(".log-tags").forEach(n => 
    n.addEventListener("click",() => {
      setMenu(false);
      document.getElementsByClassName("mob-site-logs")[0].style.visibility="hidden"
    }))


  return (
    <>
    <div className="nav-bar">
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome className="icons" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <VscReport className="icons" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          <GoProject className="icons" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/testimonial">
          <MdOutlineReviews className="icons" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <MdOutlineContactPage className="icons" />
        </NavLink>
      </nav>
      <section className="social">
        <a
          href="https://www.instagram.com/ssinghyuvraj02/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="icons2" />
        </a>
        <a
          href="https://www.linkedin.com/in/singh-yuvraj002"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icons2" />
        </a>
        <a
          href="https://twitter.com/Yuvrajsingh0506?t=YJKVSLJBWPs-wsRsyRuaoA&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterSquare className="icons2" />
        </a>
        <a
          href="https://github.com/SinghYuvraj0506"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icons2" />
        </a>
        <button onClick={handleMenu} className="menu">
        <Hamburger toggled={menu} toggle={setMenu} />
        </button>
      </section>
    </div>
    <div className="mob-site-logs">
        <ul className="logs">
          <Link to="/"><li className="log-tags">HOME</li></Link>
          <Link to="/about"><li className="log-tags">ABOUT</li></Link>
          <Link to="/projects"><li className="log-tags">PORTFOLIO</li></Link>
          <Link to="/testimonial"><li className="log-tags">TESTIMONIAL</li></Link>
          <Link to="/contact"><li className="log-tags">CONTACT US</li></Link>
        </ul>
        <div className="networks">
          <h3>Networking</h3>
          <div>
          <a
          href="https://www.instagram.com/ssinghyuvraj02/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="icons2" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuvraj-singh-9b85b222a/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icons2" />
        </a>
        <a
          href="https://twitter.com/Yuvrajsingh0506?t=YJKVSLJBWPs-wsRsyRuaoA&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterSquare className="icons2" />
        </a>
        <a
          href="https://github.com/SinghYuvraj0506"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icons2" />
        </a>
          </div>

        </div>
    </div>
    </>
  );
};

export default Sidebar;
