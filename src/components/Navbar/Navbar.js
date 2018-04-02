import React from "react";
import { Navbar as BSNavbar, Nav, NavItem } from "react-bootstrap";
import Login from "./Login/Login";
import logo from "../../assets/logo.svg";

const Navbar = props => {
  return (
    <BSNavbar collapseOnSelect>
      <BSNavbar.Header>
        <BSNavbar.Brand>
          <a href="#home">
            <img src={logo} className="App-logo" alt="logo" /> React-Bootstrap
          </a>
        </BSNavbar.Brand>
        <BSNavbar.Toggle />
      </BSNavbar.Header>
      <BSNavbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav>
        <Login
          isLoggedIn={props.user.isLoggedIn}
          userName={props.user.userName}
        />
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default Navbar;
