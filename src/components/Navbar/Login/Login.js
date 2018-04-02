import React from "react";
import { Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";

const Login = (props) => {
  return (
    <Nav pullRight>
      {props.isLoggedIn ? (
        <NavDropdown
          eventKey={1}
          title={props.userName}
          id="nav-dropdown-user"
        >
          <MenuItem eventKey={1.1}>Profile</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2}>Logout</MenuItem>
        </NavDropdown>
      ) : (
        <NavDropdown
          eventKey={2}
          title="Login / Register"
          id="nav-dropdown-login"
        >
          <MenuItem eventKey={2.1}>Login</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.2}>Register</MenuItem>
        </NavDropdown>
      )}
    </Nav>
  );
};

export default Login;
