import React from "react";
import { Container, Image, Navbar, Nav, Button } from "react-bootstrap";
import "../css/NavbarCss.css";
import logo from "../assets/images/navbar-logo.png";
import { NavLink } from "react-router-dom";
function MainNavbar() {
  // const [activeItem, setActiveItem] = useState("Home");
  // const handleItemClick = (item) => {
  //   setActiveItem(item);
  // };
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-light pl-r-20px">
      <div className="small-nav-div">
        <Navbar.Brand className="flex nav-brand-small">
          <Image src={logo} className="inline" fluid />
          <div className="flex fw-bold px-1 fs-3">Clean-X</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-big"
      >
        <Nav className="nav-small-slide nav-bg p-4">
          <NavLink
            to="/"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item-color nav-item-style active-link-hover active-link px-3"
          >
            Contact
          </NavLink>
          <Nav.Link>
            <button className="button-nav-style bold hide-item-navbar fw-500">
              Book Now
            </button>
          </Nav.Link>
          <div className="nav-item-color fs-5 hide-item-navbar fw-bold">
            Get in touch
          </div>
          <div className="nav-item-color hide-item-navbar fs-6">
            555-555-5555
          </div>
          <div className="nav-item-color fs-5 mt-3 hide-item-navbar">
            mymail@mailservice.com
          </div>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link>
        <button className="button-navbar-style fw-bold fs-6 navbar-item-display">
          Let's Talk
        </button>
      </Nav.Link>
    </Navbar>
  );
}
export default MainNavbar;
