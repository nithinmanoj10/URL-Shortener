import React, { Component } from "react";

import Icon1 from "../../images/icon-brand-recognition.svg";

export default class Features extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: props.data.name,
      details: props.data.details,
      image: props.image,
    };
  }

  render() {
    return (
      <div className="features">
        <img
          src={this.state.image}
          alt="Brand Recognition Icon"
          className="features__image"
        />
        <h3 className="features__name">{this.state.name}</h3>
        <p className="features__details">{this.state.details}</p>
      </div>
    );
  }
}
