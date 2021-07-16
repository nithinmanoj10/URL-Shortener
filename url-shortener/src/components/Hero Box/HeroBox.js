import React, { Component } from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import RoundButton from "../RoundButton";

export default class HeroBox extends Component {
  render() {
    return (
      <div className="hero-box">
        <HeroImage />
        <HeroText />
        <RoundButton text="Get Started" />
      </div>
    );
  }
}
