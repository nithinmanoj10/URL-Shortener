import React, { Component } from "react";
import ReactDOM from "react-dom";

import MobileNavBar from "./components/MobileNavBar";
import HeroBox from "./components/Hero Box/HeroBox";
import "../src/css/style.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <MobileNavBar />
        <HeroBox />
      </div>
    );
  }
}
