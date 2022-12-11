import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar__container">
      <div className="logo__container">
        <img className="logo__img" src={logo} alt="logo" />
        <h6>Japanese Shop</h6>
      </div>

      <ul class="menu__list">
        <a href="/" class="link__1">
          Home
        </a>
        <a href="/" class="link__2">
          About Us
        </a>
        <a href="/" class="link__3">
          Popular
        </a>
        <a href="/" class="link__4">
          Recently
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
