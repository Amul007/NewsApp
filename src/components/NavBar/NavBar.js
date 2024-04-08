import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { navbarBrand, navs } from "../../config/config";
import { navBar, navBrand, logo } from "./index";

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  return (
    <> 
      <Navbar
        style={navBar}
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      > 
        <Navbar.Brand style={navBrand} href="/">
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onClick={handleNavClick}>
            {navs.map((navItem, index) => (
              <LinkContainer to={navItem.page} key={index}>
                <Nav.Link className="ml-2">{navItem.nav}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
