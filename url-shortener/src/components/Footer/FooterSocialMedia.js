import React, { Component } from "react";

import FacebookIcon from "../../images/icon-facebook.svg";
import TwitterIcon from "../../images/icon-twitter.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";
import InstagramIcon from "../../images/icon-instagram.svg";
import SocialMediaIcon from "./SocialMediaIcon";

export default class FooterSocialMedia extends Component {
  constructor() {
    super();
    this.state = {
      images: {
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        pinterest: PinterestIcon,
        instagram: InstagramIcon,
      },
    };
  }

  render() {
    return (
      <div className="footer__social-media">
        <SocialMediaIcon data={this.state.images.facebook} />
        <SocialMediaIcon data={this.state.images.twitter} />
        <SocialMediaIcon data={this.state.images.pinterest} />
        <SocialMediaIcon data={this.state.images.instagram} />
      </div>
    );
  }
}
