import React, { Component } from "react";
import Features from "./Features";
import Intro from "./Intro";

import Icon1 from "../../images/icon-brand-recognition.svg";
import Icon2 from "../../images/icon-detailed-records.svg";
import Icon3 from "../../images/icon-fully-customizable.svg";

export default class FeaturesBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Brand Recognition",
          details:
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
        },
        {
          name: "Detailed Records",
          details:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        },
        {
          name: "Fully Customizable",
          details:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="features-box">
        <Intro />
        <Features data={this.state.data[0]} image={Icon1} />
        <Features data={this.state.data[1]} image={Icon2} />
        <Features data={this.state.data[2]} image={Icon3} />
      </div>
    );
  }
}
