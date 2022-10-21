import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link'
import * as Icons from "react-icons/fa";
import "./topbar.css";
import Button from "./Button";
import { navItems } from "./NavItems.js";
import Dropdown from "./Dropdown";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaPiedPiper style={{color:'black'}} />
          BBHS
        </Link>
        
       {!mobile && <Button />} 
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {


  

              return (
                <>
                
                <li key={item.id} className={item.nName}>
                  <Link smooth to={item.path}>
                    
                    <span>{item.title}</span>
                  </Link>
                </li></>
              );
            })}
          </ul>
        )}


        

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {/* {item.icon} */}
                {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button onClick={() => setSidebar(false)} /> */}
      </div>
    </>
  );
}

export default Navbar;
