import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [classHeader, setClassHeader] = useState("normal");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setClassHeader("normal");
      } else {
        if (classHeader !== "fixed") {
          setClassHeader("fixed");
        }
      }
    });
  }, []);
  return (
    <header className="d-only-desktop">
      <nav className={"navbar " + classHeader}>
        <div className="navbar-nav">
          <Link className="link-logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="navbar-links">
            <NavLink exact activeClassName="active" to="/" className="nav-link">
              {" "}
              Inicio{" "}
            </NavLink>
            <NavLink to="/about" className="nav-link">
              {" "}
              Acerca de nosotros{" "}
            </NavLink>
            <NavLink to="/login" className="nav-link">
              {" "}
              Historia
            </NavLink>
            <NavLink to="/login" className="nav-link">
              {" "}
              Contacto
            </NavLink>
          </div>
        </div>
        <div className="language-select">
          <Link to="/">ES</Link>
          <Link to="/">EN</Link>
        </div>
      </nav>
    </header>
  );
};
