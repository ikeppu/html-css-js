/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/hello-world-button/hello-world-button.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HelloWorldButton = /*#__PURE__*/function () {
  function HelloWorldButton() {
    _classCallCheck(this, HelloWorldButton);
  }
  _createClass(HelloWorldButton, [{
    key: "render",
    value: function render() {
      var buttonEl = document.createElement("button");
      var bodyEl = document.querySelector("body");
      buttonEl.classList.add("hello-world-button");
      buttonEl.innerHTML = "Hello world";
      buttonEl.onclick = function () {
        var p = document.createElement("p");
        p.innerHTML = "Hello world";
        p.classList.add("hello-world-text");
        bodyEl.appendChild(p);
      };
      bodyEl.appendChild(buttonEl);
    }
  }]);
  return HelloWorldButton;
}();
/* harmony default export */ const hello_world_button = (HelloWorldButton);
;// CONCATENATED MODULE: ./src/ps.jpg
const ps_namespaceObject = __webpack_require__.p + "bd1a3cc8170f8dde8da1.jpg";
;// CONCATENATED MODULE: ./src/altText.txt
const altText_namespaceObject = "Hello world";
;// CONCATENATED MODULE: ./src/add-image.js


function addImage() {
  var img = document.createElement("img");
  img.alt = altText_namespaceObject;
  img.width = 300;
  img.src = ps_namespaceObject;
  var body = document.querySelector("body");
  body.appendChild(img);
}
/* harmony default export */ const add_image = (addImage);
;// CONCATENATED MODULE: ./src/index.js


console.log("[INDEX JS] Init");
add_image();
var helloWorldButton = new hello_world_button();
helloWorldButton.render();
/******/ })()
;