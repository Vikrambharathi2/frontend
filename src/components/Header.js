import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Search from "./search";

export default function Header({ cartItems }) {
  return (
    <Navbar expand="md" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              width="150px"
              className="logo"
              alt="logo"
              src="/images/logo.png"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarCollapse" />

        <Navbar.Collapse id="navbarCollapse">
          <Nav className="mx-auto">
            <Search />
          </Nav>
          <Nav className="ml-md-auto">
            <Link className="btn btn-success mr-2" to="/admin">Add Items</Link>
            <Link className="btn btn-success" to="/Cart">
              <span id="cart" className="ml-3">
                Cart
              </span>
              <span className="ml-1" id="cart_count">
                {cartItems.length}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
