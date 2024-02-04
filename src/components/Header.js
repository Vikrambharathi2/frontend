// import { Link } from "react-router-dom";
// import Search from "./search";
// // import Cart from "../pages/Cart";

// export default function Header({cartItems}){
//     return <nav className="navbar  row">
//     <div className="col-12 col-md-3">
//       <div className="navbar-brand">
//         <Link to="/"><img width="150px" className="logo" alt="logo" src="/images/logo.png" /></Link>
//       </div>
//     </div>

//     <div className="col-12 col-md-6 mt-2 mt-md-0 ">
//        <Search/>
//     </div>

//     <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
//       <Link className="btn btn-success" to={"/Cart"}>
//       <span id="cart" className="ml-3  ">Cart</span>
//       <span className="ml-1 " id="cart_count">{cartItems.length}</span>
//       </Link>
      
//     </div>
//   </nav>

// }

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Search from "./search";

export default function Header({ cartItems }) {
  return (
    <Navbar   expand="md" sticky="top">
      <Container>
        {/* Logo Section */}
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

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbarCollapse" />

        <Navbar.Collapse id="navbarCollapse">
          {/* Centered Search Section */}
          <Nav className="mx-auto">
            <Search />
          </Nav>

          {/* Cart Section */}
          <Nav className="ml-md-auto">
            <Link className="btn btn-success" to={"/Cart"}>
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
