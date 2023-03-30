import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import addImage from "./add-image";
console.log("[INDEX JS] Init");
addImage();

const helloWorldButton = new HelloWorldButton();

helloWorldButton.render();
