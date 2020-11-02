/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst generateContact = () => {\n  const content = document.createElement(\"div\");\n\n  content.classList.add(\"content\");\n  const address = document.createElement(\"div\");\n  const contact = document.createElement(\"div\");\n\n  contact.classList.add(\"contactinfo\");\n  contact.textContent = \"You can find us always open at \";\n\n  address.classList.add(\"addressbig\");\n  address.textContent = \"123 Fake Street - NYC - 200-333-1234\";\n\n  content.appendChild(contact);\n  content.appendChild(address);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst generateHome = () => {\n  const content = document.createElement(\"div\");\n\n  content.classList.add(\"content\");\n  const address = document.createElement(\"div\");\n  const tagline = document.createElement(\"div\");\n\n  tagline.classList.add(\"tagline\");\n  tagline.textContent = \"EAT DRINK DIE\";\n\n  address.classList.add(\"address\");\n  address.textContent = \"123 Fake Street - NYC - 200-333-1234\";\n\n  content.appendChild(address);\n  content.appendChild(tagline);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet homeButton = document.querySelector(\".home\");\nlet menuButton = document.querySelector(\".menu\");\nlet contactButton = document.querySelector(\".contact\");\n\nlet centerContent = document.querySelector(\".centerFrame\");\n\ncenterContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)());\n\nhomeButton.addEventListener(\"click\", generateContent);\nmenuButton.addEventListener(\"click\", generateContent);\ncontactButton.addEventListener(\"click\", generateContent);\n\nfunction generateContent() {\n  while (centerContent.firstChild)\n    centerContent.removeChild(centerContent.firstChild);\n\n  switch (this.dataset.buttonName) {\n    case \"home\":\n      centerContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)());\n      break;\n    case \"menu\":\n      centerContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\n      break;\n    case \"contact\":\n      centerContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)());\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst itemNames = [\"Lorem ipsum\", \"dolor sit amet\"];\nconst itemDescriptions = [\n  \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\",\n  \"Phasellus ac rhoncus ex, sit amet mollis diam. Donec nec varius felis. Nulla erat purus, scelerisque ut velit a, interdum vestibulum purus.\",\n];\nconst itemPrices = [\"3.99\", \"12.99\"];\n\nconst generateMenu = () => {\n  const content = document.createElement(\"div\");\n  content.classList.add(\"content\");\n\n  let i;\n  for (i = 0; i < itemNames.length; i++) {\n    const menuItem = document.createElement(\"div\");\n\n    menuItem.classList.add(\"menuItem\");\n\n    const itemName = document.createElement(\"div\");\n    itemName.classList.add(\"name\");\n    itemName.textContent = itemNames[i];\n\n    const itemDesc = document.createElement(\"div\");\n    itemDesc.classList.add(\"description\");\n    itemDesc.textContent = itemDescriptions[i];\n\n    const itemPrice = document.createElement(\"div\");\n    itemPrice.classList.add(\"price\");\n    itemPrice.textContent = itemPrices[i];\n\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemDesc);\n    menuItem.appendChild(itemPrice);\n\n    content.appendChild(menuItem);\n  }\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;