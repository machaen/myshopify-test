import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [classHeader, setClassHeader] = useState("normal");
  const [menuMobile, setMenuMobile] = useState("");
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
    <header>
      <div className={"menu-mobile " + classHeader}>
        <Link className="link-logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <a href="/">ES</a>
          <a href="/">EN</a>
          <span
            className="hamburger-lines"
            onClick={() => {
              setMenuMobile("active");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className={"navbar-mobile " + menuMobile}>
        <span
          onClick={() => {
            setMenuMobile("");
          }}
          className="close"
        ></span>
        <nav>
          <a href="">Inicio</a>
          <a href="">Acerca de nosotros</a>
          <a href="">Historia</a>
          <a href="">Contacto</a>
        </nav>
      </div>
      <nav className={"navbar d-only-desktop " + classHeader}>
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
