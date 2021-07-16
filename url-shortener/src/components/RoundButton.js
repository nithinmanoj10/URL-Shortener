import React, { Component } from "react";

export default class RoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <a href="javascript:void(0)" className="button button--round">
        {this.state.text}
      </a>
    );
  }
}
