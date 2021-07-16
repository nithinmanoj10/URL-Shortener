import React, { Component } from "react";
import heroimage from "../../images/illustration-working.svg";

export default class HeroImage extends Component {
  render() {
    return <img src={heroimage} alt="Hero Image" className="hero-box__image" />;
  }
}
