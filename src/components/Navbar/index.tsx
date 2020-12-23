import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { logo, logoFill } from "../../config/icons";
import "./Navbar.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <article className="allNavbar">
      <Navbar expand="lg" variant="light">
        <main className="mainNavbar">
          <Navbar.Brand as={NavLink} to="/" className="lock hvr-forward">
            <h3>
              Help Me Speech <i className="icon-unlock">{logo()}</i>
              <i className="icon-lock">{logoFill()}</i>
            </h3>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ width: "100%" }} fill>
              <NavbarItem path="/writings" linkText="Writings" />
              {token ? (
                <NavbarItem path="/mywritings" linkText="My Writings" />
              ) : (
                <NavbarItem
                  path="/mywriting/create"
                  linkText="Create Writing"
                />
              )}
            </Nav>
          </Navbar.Collapse>
          {loginLogoutControls}
        </main>
      </Navbar>
    </article>
  );
}
