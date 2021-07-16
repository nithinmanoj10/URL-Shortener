import React, { Component } from "react";
import ReactDOM from "react-dom";

import MobileNavBar from "./components/MobileNavBar";
import HeroBox from "./components/Hero Box/HeroBox";
import LinkBox from "./components/LinkBox";
import "../src/css/style.css";
import FeaturesBox from "./components/Features Box/FeaturesBox";

export default class App extends Component {
  render() {
    return (
      <div>
        <MobileNavBar />
        <HeroBox />
        <LinkBox />
        <FeaturesBox />
      </div>
    );
  }
}
