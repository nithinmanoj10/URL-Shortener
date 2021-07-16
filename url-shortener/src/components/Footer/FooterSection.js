import React, { Component } from "react";

export default class FooterSection extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: props.data.name,
      links: props.data.links,
    };
  }

  render() {
    const linksJSX = this.state.links.map(function (item) {
      return (
        <a href="javascript:void(0)" className="footer__section__links">
          {item}
        </a>
      );
    });

    return (
      <div className="footer__section">
        <h4 className="footer__section__heading">{this.state.name}</h4>
        {linksJSX}
      </div>
    );
  }
}
