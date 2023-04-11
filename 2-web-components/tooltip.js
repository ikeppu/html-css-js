class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log("It is working");
    this._tooltipContainer;
    this._tooltipText = "someDummyattribute";
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }

    const spanEl = document.createElement("span");
    spanEl.textContent = " (?)";
    spanEl.addEventListener("mouseenter", this._showTooltip);
    spanEl.addEventListener("mouseleave", this._hideTooltip);

    this.appendChild(spanEl);
  }

  _showTooltip() {
    console.log("Hello world");
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = "This is the tooltip container";
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

customElements.define("cat-tooltip", Tooltip);
