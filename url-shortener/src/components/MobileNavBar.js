import React, { Component } from "react";
import HamburgerMenuIcon from "../images/icons8-menu.svg";

export default class MobileNavBar extends Component {
  render() {
    return (
      <header className="mobile-header">
        <div className="mobile-nav-bar">
          <h2 className="website-name">Shortly</h2>
          <a href="javascript:void(0)" className="hamburger-menu">
            <img
              src={HamburgerMenuIcon}
              alt="Hamburger Menu Icon"
              className="hamburger-menu__icon"
            />
          </a>
        </div>
      </header>
    );
  }
}
