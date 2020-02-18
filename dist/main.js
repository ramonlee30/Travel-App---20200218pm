/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: checkForLocation, handleSubmit, start, stopTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_locationChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/locationChecker */ \"./src/client/js/locationChecker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkForLocation\", function() { return _js_locationChecker__WEBPACK_IMPORTED_MODULE_0__[\"checkForLocation\"]; });\n\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_1__[\"handleSubmit\"]; });\n\n/* harmony import */ var _js_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/countdown */ \"./src/client/js/countdown.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return _js_countdown__WEBPACK_IMPORTED_MODULE_2__[\"start\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stopTimer\", function() { return _js_countdown__WEBPACK_IMPORTED_MODULE_2__[\"stopTimer\"]; });\n\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/resets.scss */ \"./src/client/styles/resets.scss\");\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base.scss */ \"./src/client/styles/base.scss\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_button_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/button.scss */ \"./src/client/styles/button.scss\");\n/* harmony import */ var _styles_button_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_button_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/client/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/countdown.js":
/*!************************************!*\
  !*** ./src/client/js/countdown.js ***!
  \************************************/
/*! exports provided: start, stopTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopTimer\", function() { return stopTimer; });\nlet x\n\nfunction start() {\n    // Setting date\n    let date = document.getElementById(\"date\").value;\n    let countDownDate = new Date(date).getTime();\n    \n    // Updating the countdown every second.\n    x = setInterval(function() {\n      let now = new Date().getTime();\n        \n      let distance = countDownDate - now;\n        \n      // Time calculations\n      let days = Math.floor(distance / (1000 * 60 * 60 * 24));\n        \n      // Output the result\n      document.getElementById(\"countdown\").innerHTML = \"Your trip is \" + days + \" days away\";\n        \n      // If the countdown is over\n      if (distance < 0) {\n        clearInterval(x);\n        document.getElementById(\"countdown\").innerHTML = \"The date has already passed\";\n      }\n    }, 1000);\n    }\n\n    function stopTimer(){\n      clearTimeout(x);\n    }\n    \n\n//# sourceURL=webpack:///./src/client/js/countdown.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return handleSubmit; });\n/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown */ \"./src/client/js/countdown.js\");\n/* harmony import */ var _locationChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationChecker */ \"./src/client/js/locationChecker.js\");\n\n\n\n  // function on submit\nfunction handleSubmit(event) {\n    event.preventDefault()\n    const locationInput = document.getElementById('name').value;\n    const date = document.getElementById('date').value\n    const date2 = document.getElementById('date2').value\n    var time = Math.abs(new Date(date2).getTime() - new Date(date).getTime());;\n    var diffDays = Math.ceil(time / (1000 * 3600 * 24));\n    Object(_locationChecker__WEBPACK_IMPORTED_MODULE_1__[\"checkForLocation\"])();\n    Object(_countdown__WEBPACK_IMPORTED_MODULE_0__[\"stopTimer\"])();\n    Object(_countdown__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n    updateUI();\n    document.getElementById('location').innerHTML = 'Mi trip to ' + locationInput.charAt(0).toUpperCase() + locationInput.slice(1);;\n    document.getElementById('dateres').innerHTML = 'Departing on ' + date.split('-').reverse().join('/');\n    document.getElementById('name').value = \"\";\n    document.getElementById('datesubs').innerHTML = \"You will stay for \" + diffDays + \" days\";\n}\n\nconst getData = async () => {\n    const locationInput = document.getElementById('name')\n    try {\n        const response = await fetch('/trip/'+locationInput.value);\n        if(response.ok) {\n            console.log(\"heel\")\n          return await response.json().then(e => e);\n        }\n      } catch(error) {\n        console.log('error', error);\n      }\n};\n\n\nconst updateUI = async () => {\n    const data = await getData();\n    console.log(data)\n    document.getElementById('results').innerHTML = 'The weather is '+ data.temperature + \"&deg\"\n    document.getElementById('photo').src = data.photo;\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/js/locationChecker.js":
/*!******************************************!*\
  !*** ./src/client/js/locationChecker.js ***!
  \******************************************/
/*! exports provided: checkForLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForLocation\", function() { return checkForLocation; });\nfunction checkForLocation(inputText) {\n    let Rgex = RegExp('^(http|https):\\/\\/')\n    if(Rgex.test(inputText)) {\n        alert(\"Please, insert a valid location\");\n        return false\n    } else {\n        return true\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/client/js/locationChecker.js?");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body{\\n|     background: #fffff8;\\n|     font-family: -apple-system, BlinkMacSystemFont, sans-serif;\");\n\n//# sourceURL=webpack:///./src/client/styles/base.scss?");

/***/ }),

/***/ "./src/client/styles/button.scss":
/*!***************************************!*\
  !*** ./src/client/styles/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #submit {\\n|     width: 20% !important;\\n|     border-radius: 20px;\");\n\n//# sourceURL=webpack:///./src/client/styles/button.scss?");

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> header {\\n|     display: flex;\\n|     justify-content: space-between;\");\n\n//# sourceURL=webpack:///./src/client/styles/header.scss?");

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (6:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| */\\n| \\n> * {\\n|     box-sizing: border-box;\\n| }\");\n\n//# sourceURL=webpack:///./src/client/styles/resets.scss?");

/***/ })

/******/ });