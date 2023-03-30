import "./hello-world-button.scss";

class HelloWorldButton {
  render() {
    const buttonEl = document.createElement("button");
    const bodyEl = document.querySelector("body");
    buttonEl.classList.add("hello-world-button");
    buttonEl.innerHTML = "Hello world";
    buttonEl.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      bodyEl.appendChild(p);
    };

    bodyEl.appendChild(buttonEl);
  }
}

export default HelloWorldButton;
