import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../React/Button";
import style from "../Button.module.css?inline";

export default class WCButton extends HTMLElement {
  static get observedAttributes() {
    return ["buttonType"];
  }

  mountPoint: HTMLSpanElement;
  buttonType: string;

  createWCButton(buttonType) {
    return React.createElement(
      Button,
      { buttonType },
      React.createElement("slot")
    );
  }

  connectedCallback() {
    // Create a ShadowDOM
    const root = this.attachShadow({ mode: "open" });

    // Create a mount element
    this.mountPoint = document.createElement("div");

    // Create a style element
    const myStylesheet = new CSSStyleSheet();
    myStylesheet.replaceSync(style);
    root.adoptedStyleSheets = [myStylesheet];

    root.appendChild(this.mountPoint);
    const buttonType = this.getAttribute("button-type");
    ReactDOM.render(this.createWCButton(buttonType), this.mountPoint);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "button-type") {
      ReactDOM.render(this.createWCButton(newValue), this.mountPoint);
    }
  }
}

customElements.define("brz-button", WCButton);
