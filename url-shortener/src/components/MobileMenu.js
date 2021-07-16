import React, { Component } from "react";

import RoundButton from "./RoundButton";

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: props.style,
    };
  }

  render() {
    // const styles = {
    //   left: "50%",
    //   transform: "translateX(-50%)",
    // };

    return (
      <div className="mobile-menu" style={this.state.styles}>
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
    );
  }
}
