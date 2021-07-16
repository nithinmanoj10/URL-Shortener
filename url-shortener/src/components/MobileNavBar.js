import React, { Component } from "react";
import HamburgerMenuIcon from "../images/icons8-menu.svg";
import MobileMenu from "./MobileMenu";
import RoundButton from "./RoundButton";

export default class MobileNavBar extends Component {
  constructor() {
    super();
    this.state = {
      initialStyles: {
        right: "0%",
        transform: "translateX(100%)",
      },
      finalStyles: {
        right: "50%",
        transform: "translateX(50%)",
      },
      currentStyles: {
        right: "0%",
        transform: "translateX(100%)",
      },
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.renderMobileMenu(this.state.counter);
  }

  renderMobileMenu(num) {
    if (num % 2 == 0) {
      this.setState((prevState) => {
        return {
          currentStyles: prevState.finalStyles,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          currentStyles: prevState.initialStyles,
        };
      });
    }
  }

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
              onClick={this.handleClick}
            />
          </a>
        </div>

        <div className="mobile-menu" style={this.state.currentStyles}>
          <div className="mobile-menu__section">
            <a href="javascript:void(0)" className="mobile-menu__section__link">
              Features
            </a>
            <a href="javascript:void(0)" className="mobile-menu__section__link">
              Pricing
            </a>
            <a href="javascript:void(0)" className="mobile-menu__section__link">
              Resources
            </a>
          </div>
          <div className="mobile-menu__section">
            <a href="javascript:void(0)" className="mobile-menu__section__link">
              Login
            </a>
            <RoundButton text="Sign Up" />
          </div>
        </div>
      </header>
    );
  }
}
