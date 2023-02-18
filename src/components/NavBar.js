import React from "react";
import logo from "../images/W3Schools_logo.svg.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { CgDarkMode } from "react-icons/cg";
import { RiEarthFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="title">
      <div
        className="container-fluid m-0 p-0  bg-light"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100px",
          borderBottom: "1px solid black",
        }}
      >
        <div className="d-flex align-items-center">
          <div className="me-4 small-screen">
            <img
              src={logo}
              className="img-fluid"
              style={{ height: "60px", marginLeft: "30px", marginTop: "10px" }}
              alt="logo"
            />
            {/* SMALL screen */}
            <b className="nav-item dropdown ps-2 big-Screen small-hover">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Menu
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Link 1
                  </Link>
                </li>
              </ul>
            </b>
          </div>
          <div className="small">
            <ul className="nav ">
              <li className="nav-item dropdown nav-1">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Tutorial
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Link 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-1">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  References
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Link 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-1">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Exercises
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Link 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-1">
                <Link className="nav-link " href="#">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item dropdown nav-1">
                <Link className="nav-link " href="#">
                  Bootcamp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-box ">
          <button className="nav-btn bg-dark text-light small">Pro</button>
          <button className="nav-btn bg-pink small">Get Certified</button>
          <button className="nav-btn bg-yellow small ">Create Website</button>
          <button className="nav-btn bg-green text-light px-">Login</button>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          {/* SMALL SCREEN MENU */}
          <ul
            className="navbar-nav big-Screen small-screen-menu 
           justifycontent-betwe"
          >
            <div className="d-flex ">
              {" "}
              <li className="nav-item">
                <Link className="nav-link text-light bold" href="#">
                  <GiHamburgerMenu
                    // IoMdMenu
                    size={21}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light bold" href="#">
                  HTML
                </Link>
              </li>
            </div>
            <li className="">
              <Link className="nav-link text-light " href="#">
                <CgDarkMode size={20} />
              </Link>
            </li>
            <li className="">
              <Link className="nav-link text-light " href="#">
                <RiEarthFill size={20} />
              </Link>
            </li>
            <li className="">
              <Link className="nav-link text-light " href="#">
                <HiSearch size={20} />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav small">
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                <FaHome size={21} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                HTML
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                CSS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                JAVASCRIPT{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                SQL{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                PYTHON{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                JAVA{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                PHP{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                BOOTSTRAP{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                HOW TO{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                W3.CSS{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bold" href="#">
                C{" "}
              </Link>
            </li>
          </ul>
          <ul className="icon-flex small">
            <li className="nav-item mx-2">
              <Link className="nav-link text-light " href="#">
                <CgDarkMode size={20} />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light " href="#">
                <RiEarthFill size={20} />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light " href="#">
                <HiSearch size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
