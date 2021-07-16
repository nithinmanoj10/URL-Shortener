import React, { Component } from "react";

export default class LinkBox extends Component {
  render() {
    return (
      <form className="link-shortener-form">
        <input
          type="text"
          name="linkInput"
          id="1"
          className="link-shortener-form__input"
          placeholder="Shorten a link here..."
        />
        <button type="submit" className="link-shortener-form__submit">
          Shorten It!
        </button>
      </form>
    );
  }
}
