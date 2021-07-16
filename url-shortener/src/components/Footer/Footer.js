import React, { Component } from "react";
import FooterSection from "./FooterSection";
import FooterSocialMedia from "./FooterSocialMedia";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Features",
          links: ["Link Shortening", "Branded Links", "Analytics"],
        },
        {
          name: "Resources",
          links: ["Blog", "Developers", "Support"],
        },
        {
          name: "Company",
          links: ["About", "Our Team", "Careers", "Contact"],
        },
      ],
    };
  }

  render() {
    return (
      <div className="footer">
        <h2 className="name">Shortly</h2>
        <FooterSection data={this.state.data[0]} />
        <FooterSection data={this.state.data[1]} />
        <FooterSection data={this.state.data[2]} />
        <FooterSocialMedia />
      </div>
    );
  }
}
