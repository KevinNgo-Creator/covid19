import React, { useReducer } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungsVirus } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const TopBar = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="fixed-top">
        <Container fluid={true}>
          <NavbarBrand
            style={{ marginLeft: "20px", marginTop: "-10px" }}
            href="/"
          >
            <FontAwesomeIcon
              icon={faLungsVirus}
              style={{ color: "red", fontSize: "30px" }}
            />{" "}
            COVID-19 (Coronavirus) Tracker
          </NavbarBrand>
          <Nav navbar className=" float-right">
            <NavItem>
              <NavLink href="/">
                <h6>Home</h6>
              </NavLink>
            </NavItem>
            <NavItem>
              {props.loggedIn ? (
                <NavLink href="/#/logout">
                  <h6>Logout</h6>
                </NavLink>
              ) : (
                <NavLink href="/#/signup">
                  <h6>Sign up</h6>
                </NavLink>
              )}
            </NavItem>
            <NavItem>
              <NavLink href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                <h6>What is COVID-19?</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">
                <h6>Prevention</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/#/about">
                <h6>About</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
