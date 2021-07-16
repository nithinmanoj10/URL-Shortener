import React, { Component } from "react";

export default class SocialMediaIcon extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      image: props.data,
    };
  }

  render() {
    return (
      <a href="javascript:void(0)" className="footer__social-media__link">
        <img
          src={this.state.image}
          alt="Social Media Icon"
          className="footer__social-media__icon"
        />
      </a>
    );
  }
}
