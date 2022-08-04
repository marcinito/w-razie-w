/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: skyblue;\\n  display: flex;\\n  flex-direction: column;\\n  max-height: 100%;\\n  max-width: 100%;\\n  height: 100%;\\n  left: 0;\\n  overflow: hidden;\\n  cursor: none;\\n}\\n\\n.viewFinder {\\n  position: absolute;\\n}\\n.viewFinder .viewFinderImg {\\n  position: absolute;\\n  width: 30px;\\n  height: 30px;\\n  opacity: 1;\\n  z-index: 20;\\n}\\n\\n#canvas {\\n  border: 1px solid black;\\n  position: absolute;\\n}\\n\\n.menuEq {\\n  width: 30%;\\n  height: 10%;\\n  background-color: green;\\n  position: absolute;\\n  right: 0;\\n  opacity: 0.7;\\n  display: grid;\\n  grid-template-columns: 60% 40%;\\n}\\n.menuEq .blockTitleMenu {\\n  height: 100%;\\n  width: 100%;\\n  background-color: plum;\\n  display: flex;\\n}\\n.menuEq .blockTitleMenu .slot {\\n  width: 25%;\\n  height: 100%;\\n  border: 1px solid black;\\n  display: flex;\\n  justify-content: center;\\n  font-size: 11px;\\n  font-weight: bold;\\n  flex-direction: column;\\n}\\n.menuEq .blockTitleMenu .slot .imgTitle {\\n  width: 99%;\\n  height: 80%;\\n}\\n.menuEq .blockTitleMenu .slot .quantity {\\n  display: flex;\\n}\\n.menuEq .blockTitleMenu .slot .quantity .number {\\n  -webkit-text-stroke: 1px red;\\n}\\n.menuEq .gunMenu {\\n  height: 100%;\\n  width: 100%;\\n  background-color: darkblue;\\n  display: flex;\\n}\\n.menuEq .gunMenu .slot {\\n  width: 33%;\\n  height: 100%;\\n  border: 1px solid red;\\n}\\n.menuEq .gunMenu .slot .gunImg {\\n  width: 100%;\\n  height: 80%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gra/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://gra/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gra/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Functions/MENU/dashboard/gunImage/glock.png":
/*!*********************************************************!*\
  !*** ./src/Functions/MENU/dashboard/gunImage/glock.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/glock.png\");\n\n//# sourceURL=webpack://gra/./src/Functions/MENU/dashboard/gunImage/glock.png?");

/***/ }),

/***/ "./src/images/plainWall/100GrassBlock.png":
/*!************************************************!*\
  !*** ./src/images/plainWall/100GrassBlock.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/100GrassBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/plainWall/100GrassBlock.png?");

/***/ }),

/***/ "./src/images/plainWall/20GrassBlock.png":
/*!***********************************************!*\
  !*** ./src/images/plainWall/20GrassBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/20GrassBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/plainWall/20GrassBlock.png?");

/***/ }),

/***/ "./src/images/plainWall/50GrassBlock.png":
/*!***********************************************!*\
  !*** ./src/images/plainWall/50GrassBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/50GrassBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/plainWall/50GrassBlock.png?");

/***/ }),

/***/ "./src/images/plainWall/80GrassBlock.png":
/*!***********************************************!*\
  !*** ./src/images/plainWall/80GrassBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/80GrassBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/plainWall/80GrassBlock.png?");

/***/ }),

/***/ "./src/images/solidWall/100SolidBlock.png":
/*!************************************************!*\
  !*** ./src/images/solidWall/100SolidBlock.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/100SolidBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/solidWall/100SolidBlock.png?");

/***/ }),

/***/ "./src/images/solidWall/20SolidBlock.png":
/*!***********************************************!*\
  !*** ./src/images/solidWall/20SolidBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/20SolidBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/solidWall/20SolidBlock.png?");

/***/ }),

/***/ "./src/images/solidWall/50SolidBlock.png":
/*!***********************************************!*\
  !*** ./src/images/solidWall/50SolidBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/50SolidBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/solidWall/50SolidBlock.png?");

/***/ }),

/***/ "./src/images/solidWall/80SolidBlock.png":
/*!***********************************************!*\
  !*** ./src/images/solidWall/80SolidBlock.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/80SolidBlock.png\");\n\n//# sourceURL=webpack://gra/./src/images/solidWall/80SolidBlock.png?");

/***/ }),

/***/ "./src/objects/dragon/dragon.png":
/*!***************************************!*\
  !*** ./src/objects/dragon/dragon.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/dragon.png\");\n\n//# sourceURL=webpack://gra/./src/objects/dragon/dragon.png?");

/***/ }),

/***/ "./src/objects/dragon/fireBall.png":
/*!*****************************************!*\
  !*** ./src/objects/dragon/fireBall.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/fireBall.png\");\n\n//# sourceURL=webpack://gra/./src/objects/dragon/fireBall.png?");

/***/ }),

/***/ "./src/objects/ghost/duszek.png":
/*!**************************************!*\
  !*** ./src/objects/ghost/duszek.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/duszek.png\");\n\n//# sourceURL=webpack://gra/./src/objects/ghost/duszek.png?");

/***/ }),

/***/ "./src/objects/player/movementPlayer/brick.png":
/*!*****************************************************!*\
  !*** ./src/objects/player/movementPlayer/brick.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/brick.png\");\n\n//# sourceURL=webpack://gra/./src/objects/player/movementPlayer/brick.png?");

/***/ }),

/***/ "./src/objects/player/movementPlayer/celownik.png":
/*!********************************************************!*\
  !*** ./src/objects/player/movementPlayer/celownik.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/celownik.png\");\n\n//# sourceURL=webpack://gra/./src/objects/player/movementPlayer/celownik.png?");

/***/ }),

/***/ "./src/objects/player/playerSprite.png":
/*!*********************************************!*\
  !*** ./src/objects/player/playerSprite.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/playerSprite.png\");\n\n//# sourceURL=webpack://gra/./src/objects/player/playerSprite.png?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gra/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Functions/MENU/dashboard/drawMenuEquipment.js":
/*!***********************************************************!*\
  !*** ./src/Functions/MENU/dashboard/drawMenuEquipment.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawMenuEquipment\": () => (/* binding */ drawMenuEquipment)\n/* harmony export */ });\n/* harmony import */ var _images_plainWall_100GrassBlock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/plainWall/100GrassBlock.png */ \"./src/images/plainWall/100GrassBlock.png\");\n/* harmony import */ var _images_solidWall_100SolidBlock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/solidWall/100SolidBlock.png */ \"./src/images/solidWall/100SolidBlock.png\");\n/* harmony import */ var _gunImage_glock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gunImage/glock.png */ \"./src/Functions/MENU/dashboard/gunImage/glock.png\");\n//IMPORT TITLE\r\n\r\n\r\n//IMPORT GUN\r\n\r\n//TITLE IMAGE\r\nconst plainWallImage=new Image(100,100).src=_images_plainWall_100GrassBlock_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconst solidWallImage=new Image(100,100).src=_images_solidWall_100SolidBlock_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\r\n//GUN IMAGE\r\nconst glock=new Image(100,100).src=_gunImage_glock_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\nconst drawMenuEquipment=()=>{\r\n   \r\n    //ADD PHOTO TO TITLE MENU\r\n    let imageWithTitleArray=[plainWallImage,solidWallImage,solidWallImage,solidWallImage]\r\n  const titleDashboard=[...document.querySelectorAll(\".slot\")]\r\n  titleDashboard.forEach((slot,i,arr)=>{\r\n    slot.children[0].src=imageWithTitleArray[i]\r\n\r\n  })\r\n  //ADD PHOTO TO GUN MENU\r\n  let imageWithGunArray=[glock]\r\n  const gunDashboard=[...document.querySelectorAll(\".gunImg\")]\r\n  gunDashboard[0].src=glock\r\n\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/MENU/dashboard/drawMenuEquipment.js?");

/***/ }),

/***/ "./src/Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard.js":
/*!**********************************************************************************!*\
  !*** ./src/Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showNumberAvailableTitleToUseOnDashBoard\": () => (/* binding */ showNumberAvailableTitleToUseOnDashBoard)\n/* harmony export */ });\nconst showNumberAvailableTitleToUseOnDashBoard=(divs,player)=>{\r\n    divs[0].innerHTML=`<p>Q:</p><h2 class=\"number\">${player.building.plainWall.quantity} </h2>`\r\n    divs[1].innerHTML=`<p>Q:</p><h2 class=\"number\">${player.building.solidWall.quantity} </h2>`\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard.js?");

/***/ }),

/***/ "./src/Functions/createMonster.js":
/*!****************************************!*\
  !*** ./src/Functions/createMonster.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMonster\": () => (/* binding */ createMonster)\n/* harmony export */ });\nconst createMonster=(object,howMany)=>{\r\n    let arrMonster=[]\r\n    for(let i=0;i<howMany;i++){\r\n        arrMonster.push(new object())\r\n    }\r\n    return arrMonster\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/createMonster.js?");

/***/ }),

/***/ "./src/Functions/helpFunction/borderBarrier.js":
/*!*****************************************************!*\
  !*** ./src/Functions/helpFunction/borderBarrier.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"borderBarrier\": () => (/* binding */ borderBarrier)\n/* harmony export */ });\nconst borderBarrier=(dE,can,changeDirectionMonster)=>{\r\n    if(dE.posX<=0){\r\n        if(\r\n            dE.id===\"monsterFly\"){changeDirectionMonster(dE,dE.directionCross,\"left\")\r\n                dE.posX+=2\r\n                dE.down=true\r\n                dE.up=true\r\n                dE.left=false\r\n                dE.right=true\r\n        }\r\n        if(dE.id===\"player\"){\r\n            dE.posX+=2\r\n        }\r\n    }\r\n    if(dE.posX+dE.size>=can.C_W){\r\n        if(dE.id===\"monsterFly\"){\r\n            changeDirectionMonster(dE,dE.directionCross,\"right\")\r\n            dE.posX-=2\r\n            dE.down=true\r\n            dE.up=true\r\n            dE.left=true\r\n            dE.right=false\r\n        }\r\n        if(dE.id===\"player\"){\r\n            dE.posX-=2\r\n        }\r\n    }\r\n    if(dE.posY<=0){\r\n        if(dE.id===\"monsterFly\"){changeDirectionMonster(dE,dE.directionCross,\"up\")\r\n            dE.down=true\r\n            dE.up=false\r\n            dE.left=true\r\n            dE.right=true\r\n                dE.posY+=2\r\n        }\r\n        if(dE.id===\"player\"){\r\n            dE.posY+=2\r\n        }\r\n    }\r\n    if(dE.posY+dE.size>=can.C_H){\r\n        if(\r\n            dE.id===\"monster\"){changeDirectionMonster(dE,dE.directionCross,\"down\")\r\n                dE.posY-=2\r\n                dE.down=false\r\n                dE.up=true\r\n                dE.left=true\r\n                dE.right=true\r\n        }\r\n        if(dE.id===\"player\"){\r\n            dE.posY-=2\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/helpFunction/borderBarrier.js?");

/***/ }),

/***/ "./src/Functions/helpFunction/changeDirectionMonster.js":
/*!**************************************************************!*\
  !*** ./src/Functions/helpFunction/changeDirectionMonster.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeDirectionMonster\": () => (/* binding */ changeDirectionMonster)\n/* harmony export */ });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/Functions/helpFunction/random.js\");\n\r\n\r\nconst changeDirectionMonster=(dE,cross,payload)=>{\r\n    let directionArr=[\"up\",\"left\",\"right\",\"down\"]\r\n    let directionCrossArr=[\"negative\",\"positive\",\"null\"]\r\n\r\n    let availableCrossMove=directionCrossArr.filter(el=>el!=cross)\r\n    let newCrossDirection=(0,_random__WEBPACK_IMPORTED_MODULE_0__.random)(availableCrossMove)\r\n\r\n    let availableMove=directionArr.filter(el=>el!=payload)\r\n    let newDirection=(0,_random__WEBPACK_IMPORTED_MODULE_0__.random)(availableMove)\r\n    \r\n    dE.direction=newDirection\r\n\r\n    dE.directionCross=newCrossDirection\r\n\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/helpFunction/changeDirectionMonster.js?");

/***/ }),

/***/ "./src/Functions/helpFunction/handleHp.js":
/*!************************************************!*\
  !*** ./src/Functions/helpFunction/handleHp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleHp\": () => (/* binding */ handleHp)\n/* harmony export */ });\nconst handleHp=(attack,creature)=>{\r\n    \r\n   \r\n    let hp=(attack*creature.ratePercentage)/creature.hpTotal\r\n   \r\n    \r\n    return hp\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/helpFunction/handleHp.js?");

/***/ }),

/***/ "./src/Functions/helpFunction/random.js":
/*!**********************************************!*\
  !*** ./src/Functions/helpFunction/random.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"random\": () => (/* binding */ random)\n/* harmony export */ });\nconst random=(array)=>{\r\n    let randomIndex=array[Math.floor(Math.random()*array.length)]\r\n    \r\n    return randomIndex\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/helpFunction/random.js?");

/***/ }),

/***/ "./src/Functions/makeWall.js":
/*!***********************************!*\
  !*** ./src/Functions/makeWall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeWall\": () => (/* binding */ makeWall)\n/* harmony export */ });\nconst makeWall=(object,howMany,posX,posY,size,color,direction)=>{\r\n    let arrWall=[]\r\n    for(let i=0;i<howMany;i++){\r\n        arrWall.push(new object(posX,posY,size,color,direction))\r\n        if(direction===\"horizontal\"){\r\n            posX+=size\r\n        }\r\n        if(direction===\"vertical\"){\r\n            posY+=size\r\n        }\r\n    }\r\n  \r\n    return arrWall\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/makeWall.js?");

/***/ }),

/***/ "./src/Functions/settingCanas.js":
/*!***************************************!*\
  !*** ./src/Functions/settingCanas.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvasSettings\": () => (/* binding */ canvasSettings)\n/* harmony export */ });\nconst canvasSettings=()=>{\r\n    const canvas=document.getElementById(\"canvas\")\r\nconst ctx=canvas.getContext(\"2d\")\r\n    canvas.width=window.innerWidth\r\ncanvas.height=window.innerHeight-50\r\nconst C_W=window.innerWidth\r\nconst C_H=window.innerHeight-50\r\n\r\nlet canvasProperties={C_H,C_W,ctx}\r\nreturn canvasProperties\r\n}\n\n//# sourceURL=webpack://gra/./src/Functions/settingCanas.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _Functions_settingCanas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functions/settingCanas */ \"./src/Functions/settingCanas.js\");\n/* harmony import */ var _objects_plainWall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/plainWall */ \"./src/objects/plainWall.js\");\n/* harmony import */ var _Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functions/makeWall */ \"./src/Functions/makeWall.js\");\n/* harmony import */ var _objects_player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/player/player */ \"./src/objects/player/player.js\");\n/* harmony import */ var _objects_player_movementPlayer_movementPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/player/movementPlayer/movementPlayer */ \"./src/objects/player/movementPlayer/movementPlayer.js\");\n/* harmony import */ var _Functions_createMonster_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Functions/createMonster.js */ \"./src/Functions/createMonster.js\");\n/* harmony import */ var _objects_ghost_ghost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/ghost/ghost */ \"./src/objects/ghost/ghost.js\");\n/* harmony import */ var _objects_player_AmmoVSWall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/player/AmmoVSWall */ \"./src/objects/player/AmmoVSWall.js\");\n/* harmony import */ var _objects_player_FireAtakFromPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/player/FireAtakFromPlayer */ \"./src/objects/player/FireAtakFromPlayer.js\");\n/* harmony import */ var _objects_solidWall__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/solidWall */ \"./src/objects/solidWall.js\");\n/* harmony import */ var _objects_dragon_dragon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objects/dragon/dragon */ \"./src/objects/dragon/dragon.js\");\n/* harmony import */ var _objects_player_PLAYERGRAVITY__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./objects/player/PLAYERGRAVITY */ \"./src/objects/player/PLAYERGRAVITY.js\");\n/* harmony import */ var _objects_ghost_GhostAttackPlayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objects/ghost/GhostAttackPlayer */ \"./src/objects/ghost/GhostAttackPlayer.js\");\n/* harmony import */ var _objects_dragon_whenFireBallFromDragonTouchWallOrPlayer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./objects/dragon/whenFireBallFromDragonTouchWallOrPlayer */ \"./src/objects/dragon/whenFireBallFromDragonTouchWallOrPlayer.js\");\n/* harmony import */ var _objects_dragon_whenDragonTouchPlayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./objects/dragon/whenDragonTouchPlayer */ \"./src/objects/dragon/whenDragonTouchPlayer.js\");\n/* harmony import */ var _objects_ghost_ghostGravity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./objects/ghost/ghostGravity */ \"./src/objects/ghost/ghostGravity.js\");\n/* harmony import */ var _objects_dragon_dragonGravity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./objects/dragon/dragonGravity */ \"./src/objects/dragon/dragonGravity.js\");\n/* harmony import */ var _objects_ghost_ammoFromPlayerVsGhost__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./objects/ghost/ammoFromPlayerVsGhost */ \"./src/objects/ghost/ammoFromPlayerVsGhost.js\");\n/* harmony import */ var _objects_dragon_ammoFromPlayerVsDragon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./objects/dragon/ammoFromPlayerVsDragon */ \"./src/objects/dragon/ammoFromPlayerVsDragon.js\");\n/* harmony import */ var _objects_player_checkIfPlayerIsAlive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./objects/player/checkIfPlayerIsAlive */ \"./src/objects/player/checkIfPlayerIsAlive.js\");\n/* harmony import */ var _Functions_MENU_dashboard_drawMenuEquipment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Functions/MENU/dashboard/drawMenuEquipment */ \"./src/Functions/MENU/dashboard/drawMenuEquipment.js\");\n/* harmony import */ var _Functions_MENU_dashboard_showNumberAvailableTitleToUseOnDashBoard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard */ \"./src/Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard.js\");\n/* harmony import */ var _objects_player_movementPlayer_switchViefinder__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./objects/player/movementPlayer/switchViefinder */ \"./src/objects/player/movementPlayer/switchViefinder.js\");\n/* harmony import */ var _objects_GUN_glock_glockAmmoVsWall__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./objects/GUN/glock/glockAmmoVsWall */ \"./src/objects/GUN/glock/glockAmmoVsWall.js\");\n/* harmony import */ var _objects_GUN_dynamite_dynamiteAmmoVsWall__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./objects/GUN/dynamite/dynamiteAmmoVsWall */ \"./src/objects/GUN/dynamite/dynamiteAmmoVsWall.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst imgTitleFromMenu=[...document.querySelectorAll(\".imgTitle\")]\r\nconst divsWithNumberAvailableTitleToBuildNew=[...document.querySelectorAll(\".quantity\")]\r\n\r\n\r\nlet can=(0,_Functions_settingCanas__WEBPACK_IMPORTED_MODULE_1__.canvasSettings)()\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet player=new _objects_player_player__WEBPACK_IMPORTED_MODULE_4__.Player()\r\n;(0,_objects_player_movementPlayer_movementPlayer__WEBPACK_IMPORTED_MODULE_5__.movementPlayer)(player,imgTitleFromMenu)\r\n\r\nlet WALL=\r\n[\r\n    // makeWall(plainWall,10,200,300,60,\"orange\",\"horizontal\"),\r\n    // makeWall(plainWall,10,20,360,60,\"skyblue\",\"horizontal\"),\r\n    (0,_Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__.makeWall)(_objects_plainWall__WEBPACK_IMPORTED_MODULE_2__.plainWall,30,10,can.C_H-170,70,\"orange\",\"horizontal\"),\r\n    (0,_Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__.makeWall)(_objects_plainWall__WEBPACK_IMPORTED_MODULE_2__.plainWall,30,10,can.C_H-120,70,\"orange\",\"horizontal\"),\r\n    (0,_Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__.makeWall)(_objects_plainWall__WEBPACK_IMPORTED_MODULE_2__.plainWall,4,50,200,70,\"pink\",\"horizontal\"),\r\n    (0,_Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__.makeWall)(_objects_solidWall__WEBPACK_IMPORTED_MODULE_10__.solidWall,17,600,100,70,\"green\",\"vertical\"),\r\n    (0,_Functions_makeWall__WEBPACK_IMPORTED_MODULE_3__.makeWall)(_objects_solidWall__WEBPACK_IMPORTED_MODULE_10__.solidWall,17,0,100,70,\"green\",\"vertical\"),\r\n    player.blockToBuild\r\n]\r\n\r\nlet MONSTER=\r\n[\r\n    (0,_Functions_createMonster_js__WEBPACK_IMPORTED_MODULE_6__.createMonster)(_objects_ghost_ghost__WEBPACK_IMPORTED_MODULE_7__.Ghost,0),\r\n    (0,_Functions_createMonster_js__WEBPACK_IMPORTED_MODULE_6__.createMonster)(_objects_dragon_dragon__WEBPACK_IMPORTED_MODULE_11__.Dragon,0),\r\n]\r\nconsole.log(MONSTER)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet changeImage=0\r\nsetInterval(()=>{\r\nchangeImage++\r\nif(changeImage>=3){\r\n    changeImage=0\r\n    \r\n}\r\n},150)\r\nlet counter=0\r\nsetInterval(()=>{\r\ncounter++\r\nif(counter>=3){\r\n    counter=0\r\n}\r\n},1000)\r\n;(0,_Functions_MENU_dashboard_drawMenuEquipment__WEBPACK_IMPORTED_MODULE_21__.drawMenuEquipment)()\r\nconst runApp=()=>{\r\n\r\n\r\n\r\ncan.ctx.clearRect(0,0,can.C_W,can.C_H)\r\n//player\r\nplayer.draw(can)\r\n\r\n;(0,_objects_player_FireAtakFromPlayer__WEBPACK_IMPORTED_MODULE_9__.FireAtakFromPlayer)(player,can)\r\n\r\n// AmmoVsWall(player,WALL,can)\r\n;(0,_objects_player_PLAYERGRAVITY__WEBPACK_IMPORTED_MODULE_12__.PLAYERGRAVITY)(player,WALL,can)\r\n;(0,_objects_player_checkIfPlayerIsAlive__WEBPACK_IMPORTED_MODULE_20__.checkIfPlayerIsAlive)(player)\r\n;(0,_objects_player_movementPlayer_switchViefinder__WEBPACK_IMPORTED_MODULE_23__.switchViewfinder)(player)\r\n//////\r\n//****************** */\r\n//wall\r\n//pArrWallArray-particular array with set o wall\r\nWALL.forEach((pArrWallArray,wI,WALLarray)=>{\r\npArrWallArray.forEach((title,pItitle,pArrWall)=>{\r\n    if(title.hp>0){\r\n        title.draw(can,changeImage)\r\n    }\r\n\r\n})   \r\n})\r\n\r\n//MONSTER\r\nMONSTER.forEach((pArrMonster,index,arrayMONSTER)=>{\r\n    pArrMonster.forEach((monster,i,arr)=>{\r\n        monster.draw(can,changeImage)\r\n        monster.movement()\r\n        \r\n        // flyMonsterContactWall(WALL,MONSTER,can)\r\n       \r\n      \r\n        if(monster.name===\"ghost\"){\r\n            (0,_objects_ghost_GhostAttackPlayer__WEBPACK_IMPORTED_MODULE_13__.ghostAttackPlayer)(player,arr)\r\n            ;(0,_objects_ghost_ghostGravity__WEBPACK_IMPORTED_MODULE_16__.ghostGravity)(WALL,arr,can)\r\n            ;(0,_objects_ghost_ammoFromPlayerVsGhost__WEBPACK_IMPORTED_MODULE_18__.ammoFromPlayerVsGhost)(arr,player)\r\n        }\r\n        if(monster.name===\"dragon\"){\r\n            (0,_objects_dragon_dragonGravity__WEBPACK_IMPORTED_MODULE_17__.dragonGravity)(WALL,arr,can)\r\n            monster.attackFireBall(counter,can)\r\n            ;(0,_objects_dragon_whenFireBallFromDragonTouchWallOrPlayer__WEBPACK_IMPORTED_MODULE_14__.whenFireBallFromDragonTouchWallOrPlayer)(monster,player,WALL,can)\r\n            ;(0,_objects_dragon_whenDragonTouchPlayer__WEBPACK_IMPORTED_MODULE_15__.whenDragonTouchPlayer)(player,arr)\r\n            ;(0,_objects_dragon_ammoFromPlayerVsDragon__WEBPACK_IMPORTED_MODULE_19__.ammoFromPlayerVsDragon)(arr,player)\r\n        }\r\n \r\n\r\n    })\r\n})\r\n\r\n\r\n//MENU\r\n;(0,_Functions_MENU_dashboard_showNumberAvailableTitleToUseOnDashBoard__WEBPACK_IMPORTED_MODULE_22__.showNumberAvailableTitleToUseOnDashBoard)(divsWithNumberAvailableTitleToBuildNew,player)\r\n//GUN\r\n;(0,_objects_GUN_glock_glockAmmoVsWall__WEBPACK_IMPORTED_MODULE_24__.glockAmmoVsWall)(player,WALL,can)\r\n;(0,_objects_GUN_dynamite_dynamiteAmmoVsWall__WEBPACK_IMPORTED_MODULE_25__.dynamiteAmmoVsWall)(player,WALL,can)\r\n\r\n    requestAnimationFrame(runApp)\r\n}\r\nrunApp()\r\n\r\n\r\n\r\n// setInterval(()=>{\r\n// console.log(player.dynamitsArray,\"dynamity\")\r\n// console.log(player.bulletGlockArray,\"bullet\")\r\n// },1000)\n\n//# sourceURL=webpack://gra/./src/main.js?");

/***/ }),

/***/ "./src/objects/GUN/dynamite/dynamite.js":
/*!**********************************************!*\
  !*** ./src/objects/GUN/dynamite/dynamite.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dynamite\": () => (/* binding */ Dynamite)\n/* harmony export */ });\n/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/player */ \"./src/objects/player/player.js\");\n/* harmony import */ var _dynamiteGravity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamiteGravity */ \"./src/objects/GUN/dynamite/dynamiteGravity.js\");\n\r\n\r\n\r\n\r\nclass Dynamite{\r\n    constructor(posX,posY,directionAttack){\r\n        this.posX=posX\r\n        this.posY=posY\r\n        this.size=30\r\n        this.color=\"red\"\r\n        this.name=\"dynamite\"\r\n        this.startPosX=posX\r\n        this.startPosY=posY\r\n        this.directionAttack=directionAttack\r\n        this.speed=2\r\n        this.fallenSpeed=0.8\r\n    }\r\n\r\n    draw(can,arrBullet){\r\n        (0,_dynamiteGravity__WEBPACK_IMPORTED_MODULE_1__.dynamiteGravity)()\r\n\r\n        can.ctx.fillStyle=this.color\r\n        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)\r\n        if(this.directionAttack===\"right\"){\r\n           \r\n            let distanceX=this.posX-this.startPosX\r\n            if(distanceX>=50){\r\n                this.posY+=this.speed\r\n                this.posX+=this.fallenSpeed\r\n                \r\n            }\r\n            else{\r\n                this.posX+=this.speed\r\n                this.posY-=this.speed\r\n            }\r\n        }\r\n      \r\n        \r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/GUN/dynamite/dynamite.js?");

/***/ }),

/***/ "./src/objects/GUN/dynamite/dynamiteAmmoVsWall.js":
/*!********************************************************!*\
  !*** ./src/objects/GUN/dynamite/dynamiteAmmoVsWall.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dynamiteAmmoVsWall\": () => (/* binding */ dynamiteAmmoVsWall)\n/* harmony export */ });\nconst dynamiteAmmoVsWall=(player,WALL,can)=>{\r\n    let dynamitsArray=player.dynamitsArray\r\nWALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{\r\narrayWithTitle.forEach((title,tI,tArr)=>{\r\n\r\n    dynamitsArray.forEach((dynamite,bI,dArr)=>{\r\n      \r\n        if(dynamite.posX+dynamite.size<title.posX || dynamite.posX>title.posX+title.size||\r\n            dynamite.posY>title.posY+title.size || dynamite.posY+dynamite.size<title.posY){\r\n                //NO COLLISION\r\n            }\r\n            else{\r\n       \r\n            if(title.direction===\"horizontal\"){\r\n                dynamite.speed=0\r\n                dynamite.fallenSpeed=0\r\n            }    \r\n             \r\n            \r\n        \r\n            }\r\n\r\n            //IF AMMO PASSED VERGE OF MAP\r\n\r\n\r\n\r\n    })\r\n\r\n    \r\n\r\n\r\n})\r\n})\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/GUN/dynamite/dynamiteAmmoVsWall.js?");

/***/ }),

/***/ "./src/objects/GUN/dynamite/dynamiteGravity.js":
/*!*****************************************************!*\
  !*** ./src/objects/GUN/dynamite/dynamiteGravity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dynamiteGravity\": () => (/* binding */ dynamiteGravity)\n/* harmony export */ });\nconst dynamiteGravity=()=>{\r\n    \r\n}\n\n//# sourceURL=webpack://gra/./src/objects/GUN/dynamite/dynamiteGravity.js?");

/***/ }),

/***/ "./src/objects/GUN/glock/glock.js":
/*!****************************************!*\
  !*** ./src/objects/GUN/glock/glock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glock\": () => (/* binding */ Glock)\n/* harmony export */ });\nclass Glock{\r\n    constructor(posX,posY,directionAttack){\r\n        this.posX=posX\r\n        this.posY=posY\r\n        this.size=10\r\n        this.color=\"black\"\r\n        this.name=\"glock\"\r\n        this.strenghtAttack=9.7\r\n        this.directionAttack=directionAttack\r\n    }\r\n    draw(can){\r\n       \r\n    can.ctx.fillStyle=this.color\r\n    can.ctx.fillRect(this.posX,this.posY,this.size,this.size)\r\n      if(this.directionAttack===\"left\"){\r\n        this.posX-=2\r\n      }\r\n      if(this.directionAttack===\"right\"){\r\n        this.posX+=2\r\n      }\r\n      if(this.directionAttack===\"up\"){\r\n        this.posY-=2\r\n      }\r\n      if(this.directionAttack===\"down\"){\r\n        this.posY+=2\r\n      }\r\n          \r\n            \r\n        \r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/GUN/glock/glock.js?");

/***/ }),

/***/ "./src/objects/GUN/glock/glockAmmoVsWall.js":
/*!**************************************************!*\
  !*** ./src/objects/GUN/glock/glockAmmoVsWall.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"glockAmmoVsWall\": () => (/* binding */ glockAmmoVsWall)\n/* harmony export */ });\nconst glockAmmoVsWall=(player,WALL,can)=>{\r\n   \r\n    let bulletArr=player.bulletGlockArray\r\n    WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{\r\n    arrayWithTitle.forEach((title,tI,tArr)=>{\r\n    \r\n        bulletArr.forEach((bullet,bI,bArr)=>{\r\n \r\n    if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||\r\n        bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){\r\n            //NO COLLISION\r\n        }\r\n        else{\r\n        tArr[tI].hp-=1\r\n        bArr.splice(bArr[bI],1)\r\n        \r\n        if(title.hp===0 || title.hp<0){\r\n            if(title.name===\"plainWall\"){\r\n                player.building.plainWall.quantity+=1\r\n            }\r\n            if(title.name===\"solidWall\"){\r\n                player.building.solidWall.quantity+=1\r\n            }\r\n         \r\n            tArr.splice(tI,1)\r\n          \r\n           \r\n            \r\n        }\r\n        }\r\n\r\n        //IF AMMO PASSED VERGE OF MAP\r\n\r\nif(bullet.posX<0 || bullet.posX>can.C_W || bullet.posY>can.C_H || bullet.posY<0){\r\nbArr.splice(bArr[bI],1)\r\n\r\n}\r\n \r\n    \r\n        })\r\n    \r\n        \r\n    \r\n    \r\n    })\r\n    })\r\n    \r\n    \r\n    }\n\n//# sourceURL=webpack://gra/./src/objects/GUN/glock/glockAmmoVsWall.js?");

/***/ }),

/***/ "./src/objects/dragon/ammoFromPlayerVsDragon.js":
/*!******************************************************!*\
  !*** ./src/objects/dragon/ammoFromPlayerVsDragon.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ammoFromPlayerVsDragon\": () => (/* binding */ ammoFromPlayerVsDragon)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/handleHp */ \"./src/Functions/helpFunction/handleHp.js\");\n\r\n\r\nconst ammoFromPlayerVsDragon=(arrayDragon,player)=>{\r\n\r\n    arrayDragon.forEach((monster,indexMonster,arrayMONSTER)=>{\r\n\r\n        player.bullet.forEach((bullet,indexBullet,arrayBullet)=>{\r\n            if(bullet.posX+bullet.size<monster.posX || bullet.posX>monster.posX+monster.size||\r\n                bullet.posY>monster.posY+monster.size || bullet.posY+bullet.size<monster.posY){\r\n                    //NO COLLISION\r\n                }\r\n                else{\r\n                    monster.hp-=bullet.strenghtAttack\r\n                 \r\n                    monster.percentageHp-=(0,_Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__.handleHp)(bullet.strenghtAttack,monster)\r\n                  console.log(monster.hp,\"hp\")\r\n                  console.log(bullet.strenghtAttack,\"powerOfAttack\")\r\n                  console.log(monster.percentageHp,\"percentage\")\r\n                    arrayBullet.splice(indexBullet,1)\r\n                    if(monster.hp<0){\r\n                        arrayMONSTER.splice(indexMonster,1)\r\n                    }\r\n                }\r\n\r\n\r\n\r\n        })\r\n        \r\n\r\n    })\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/ammoFromPlayerVsDragon.js?");

/***/ }),

/***/ "./src/objects/dragon/dragon.js":
/*!**************************************!*\
  !*** ./src/objects/dragon/dragon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dragon\": () => (/* binding */ Dragon)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/random */ \"./src/Functions/helpFunction/random.js\");\n/* harmony import */ var _dragon_dragon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dragon/dragon.png */ \"./src/objects/dragon/dragon.png\");\n/* harmony import */ var _dragon_fireBallAttackFromMonster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragon/fireBallAttackFromMonster */ \"./src/objects/dragon/fireBallAttackFromMonster.js\");\n\r\n\r\n\r\n\r\n\r\nlet dragon=new Image(100,100)\r\ndragon.src=_dragon_dragon_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"] \r\n\r\n\r\n\r\n\r\nclass Dragon{\r\n    constructor(){\r\n        this.posX=100\r\n        this.posY=10\r\n        this.size=130\r\n        this.type=\"dynamic\"\r\n        this.id=\"monsterFly\"\r\n        this.name=\"dragon\"\r\n        this.attack={wall:4,player:30,whenTouchPlayer:60}\r\n      \r\n        \r\n        this.image=dragon\r\n\r\n        this.directionArr=[\"up\",\"left\",\"right\",\"down\"]\r\n        this.directionCrossArr=[\"negative\",\"positive\",\"null\"]\r\n        this.directionCross=(0,_Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__.random)(this.directionCrossArr)\r\n        this.direction=(0,_Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__.random)(this.directionArr)\r\n        this.speed=0.5\r\n         //direct\r\n         this.left=true\r\n         this.right=true\r\n         this.down=true\r\n         this.up=true\r\n         this.animationEffect=0\r\n        //atack\r\n        this.fireBall=[]\r\n        //HP\r\n        this.hpTotal=553\r\n        this.hp=this.hpTotal\r\n        this.percentageHp=this.size\r\n        this.ratePercentage=this.size\r\n\r\n\r\n\r\n    }\r\n    draw(can,changeImage){\r\n      \r\nif(changeImage===1){\r\nthis.animationEffect=0\r\n\r\n}\r\nif(changeImage===2){\r\n    this.animationEffect=191\r\n}\r\nif(changeImage===3){\r\n    this.animationEffect=191*2\r\n}\r\ncan.ctx.fillStyle=\"yellow\"\r\ncan.ctx.fillRect(this.posX,this.posY-5,this.percentageHp,5)\r\ncan.ctx.strokeRect(this.posX,this.posY-5,this.size,5)\r\nif(this.direction===\"left\"){\r\n    can.ctx.drawImage(this.image,this.animationEffect,483,191,161,this.posX,this.posY,130,this.size)\r\n\r\n}\r\nif(this.direction===\"right\"){\r\n    can.ctx.drawImage(this.image,this.animationEffect,161,191,161,this.posX,this.posY,130,this.size)\r\n}\r\nif(this.direction===\"up\"){\r\n    can.ctx.drawImage(this.image,this.animationEffect,0,191,161,this.posX,this.posY,130,this.size)\r\n}\r\nif(this.direction===\"down\"){\r\n    can.ctx.drawImage(this.image,this.animationEffect,322,191,161,this.posX,this.posY,130,this.size)\r\n}\r\n    }\r\n    \r\n        movement(){\r\n      \r\n\r\n\r\n            if(this.left===true){\r\n                if(this.direction===\"left\"){\r\n                    this.posX-=this.speed\r\n                    if(this.directionCross===\"negative\"){\r\n                        this.posY-=this.speed/2\r\n                    }\r\n                    if(this.directionCross===\"positive\"){\r\n                        this.posY+=this.speed/2\r\n                    }\r\n                    if(this.directionCross===\"null\"){\r\n                       \r\n                    }\r\n                  }\r\n            }\r\n          if(this.right===true){\r\n            if(this.direction===\"right\"){\r\n                this.posX+=this.speed\r\n                if(this.directionCross===\"negative\"){\r\n                    this.posY-=this.speed/2\r\n                }\r\n                if(this.directionCross===\"positive\"){\r\n                    this.posY+=this.speed/2\r\n                }\r\n                if(this.directionCross===\"null\"){\r\n                    \r\n                }\r\n                \r\n              }\r\n          }\r\n           \r\n        if(this.up===true){\r\n            if(this.direction===\"up\"){\r\n                this.posY-=this.speed\r\n                if(this.directionCross===\"negative\"){\r\n                    this.posX-=this.speed/2\r\n                }\r\n                if(this.directionCross===\"positive\"){\r\n                    this.posX+=this.speed/2\r\n                }\r\n                if(this.directionCross===\"null\"){\r\n                    \r\n                }\r\n              }\r\n        }\r\n        \r\n            if(this.down===true){\r\n                if(this.direction===\"down\"){\r\n                    this.posY+=this.speed\r\n                    if(this.directionCross===\"negative\"){\r\n                        this.posX-=this.speed/2\r\n                    }\r\n                    if(this.directionCross===\"positive\"){\r\n                        this.posX+=this.speed/2\r\n                    }\r\n                    if(this.directionCross===\"null\"){\r\n                       \r\n                    }\r\n                    \r\n            \r\n                  }\r\n               \r\n                 \r\n            }\r\n              \r\n            }\r\nattackFireBall(counter,can){\r\n\r\n    if(counter%5===0 && this.fireBall.length<1){\r\n    \r\n        this.fireBall.push(new _dragon_fireBallAttackFromMonster__WEBPACK_IMPORTED_MODULE_2__.FireBallAttackFromMonster(this.posX,this.posY))\r\n    }\r\n    if(this.fireBall.length>0){\r\n        this.fireBall.forEach((el,i,arr)=>{\r\n           el.draw(can)\r\n           el.posY+=1\r\n        })\r\n    }\r\n    \r\n}\r\n      \r\n    \r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/dragon.js?");

/***/ }),

/***/ "./src/objects/dragon/dragonGravity.js":
/*!*********************************************!*\
  !*** ./src/objects/dragon/dragonGravity.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragonGravity\": () => (/* binding */ dragonGravity)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/changeDirectionMonster */ \"./src/Functions/helpFunction/changeDirectionMonster.js\");\n/* harmony import */ var _Functions_helpFunction_borderBarrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Functions/helpFunction/borderBarrier */ \"./src/Functions/helpFunction/borderBarrier.js\");\n\r\n\r\n\r\nconst dragonGravity=(WALL,dragonArray,can)=>{\r\n    //paW- particular array with wall\r\n\r\n\r\n\r\n\r\nWALL.forEach((arrayWIthWall,index,WALL)=>{\r\n\r\n    arrayWIthWall.forEach((title,indexTitle,particularArrayWithTitle)=>{\r\n\r\n\r\n        dragonArray.forEach((dragon,indexGhost,dragonArray)=>{\r\n\r\n            if(dragon.posX>title.posX+title.size || dragon.posX+dragon.size<title.posX ||\r\n                dragon.posY>title.posY+title.size || dragon.posY+dragon.size<title.posY){\r\n              //WHEN NO COLLISION \r\n              \r\n              }\r\n              else{\r\n                //COLISSION ***************************************************\r\n                //Monster Collisionb with static Element\r\n               \r\n                  //right\r\n                  if(dragon.posX+dragon.size>title.posX && dragon.posX+dragon.size<title.posX+title.size/2){\r\n                    dragon.down=true\r\n                    dragon.up=true\r\n                    dragon.right=false\r\n                    dragon.left=true\r\n                  dragon.posX-=dragon.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(dragon,dragon.directionCross,\"right\")\r\n                  }\r\n                  //left\r\n                  if(dragon.posX<title.posX+title.size && dragon.posX>title.posX+title.size/2){\r\n                    dragon.down=true\r\n                    dragon.up=true\r\n                    dragon.right=true\r\n                    dragon.left=false\r\n                    dragon.posX+=dragon.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(dragon,dragon.directionCross,\"left\")\r\n                  }\r\n                  //up\r\n                  if(dragon.posY>title.posY+title.size/2 && dragon.posY<title.posY+title.size){\r\n                    dragon.down=true\r\n                    dragon.up=false\r\n                    dragon.right=true\r\n                    dragon.left=true\r\n                    dragon.posY+=dragon.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(dragon,dragon.directionCross,\"up\")\r\n                  }\r\n                  //down\r\n                  if(dragon.posY+dragon.size>title.posY && dragon.posY+dragon.size<title.posY+title.size/2){\r\n                    dragon.down=false\r\n                    dragon.up=true\r\n                    dragon.right=true\r\n                    dragon.left=true\r\n                    dragon.posY-=dragon.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(dragon,dragon.directionCross,\"down\")\r\n                  }\r\n        \r\n                  \r\n         \r\n                  }\r\n\r\n                  (0,_Functions_helpFunction_borderBarrier__WEBPACK_IMPORTED_MODULE_1__.borderBarrier)(dragon,can,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)\r\n\r\n        })\r\n\r\n\r\n    })\r\n\r\n})\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/dragonGravity.js?");

/***/ }),

/***/ "./src/objects/dragon/fireBallAttackFromMonster.js":
/*!*********************************************************!*\
  !*** ./src/objects/dragon/fireBallAttackFromMonster.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FireBallAttackFromMonster\": () => (/* binding */ FireBallAttackFromMonster)\n/* harmony export */ });\n/* harmony import */ var _fireBall_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBall.png */ \"./src/objects/dragon/fireBall.png\");\n\r\nconst fireBall=new Image(100,100)\r\nfireBall.src=_fireBall_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nclass FireBallAttackFromMonster{\r\n    constructor(posX,posY){\r\n        this.posX=posX\r\n        this.posY=posY\r\n        this.size=20\r\n        this.color=\"red\"\r\n        this.image=fireBall\r\n    }\r\n    draw(can){\r\n        can.ctx.fillStyle=this.color\r\n        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)\r\n        this.posY+=2\r\n    }\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/fireBallAttackFromMonster.js?");

/***/ }),

/***/ "./src/objects/dragon/whenDragonTouchPlayer.js":
/*!*****************************************************!*\
  !*** ./src/objects/dragon/whenDragonTouchPlayer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whenDragonTouchPlayer\": () => (/* binding */ whenDragonTouchPlayer)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/handleHp */ \"./src/Functions/helpFunction/handleHp.js\");\n\r\n\r\nconst whenDragonTouchPlayer=(player,dragonArray)=>{\r\n  dragonArray.forEach((dragon,indexDragon,arr)=>{\r\n\r\n    if(player.posX+player.size<dragon.posX || player.posX>dragon.posX+dragon.size ||\r\n        player.posY+player.size<dragon.posY || player.posY>dragon.posY+dragon.size){\r\n        \r\n//No coliision\r\n\r\n  }else{\r\n    dragon.posY-=100\r\n    player.hp-=dragon.attack.whenTouchPlayer\r\n    player.percentageHp-=(0,_Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__.handleHp)(dragon.attack.whenTouchPlayer,player)\r\n  }\r\n\r\n\r\n  }\r\n)\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/whenDragonTouchPlayer.js?");

/***/ }),

/***/ "./src/objects/dragon/whenFireBallFromDragonTouchWallOrPlayer.js":
/*!***********************************************************************!*\
  !*** ./src/objects/dragon/whenFireBallFromDragonTouchWallOrPlayer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whenFireBallFromDragonTouchWallOrPlayer\": () => (/* binding */ whenFireBallFromDragonTouchWallOrPlayer)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/handleHp */ \"./src/Functions/helpFunction/handleHp.js\");\n\r\n\r\nconst whenFireBallFromDragonTouchWallOrPlayer=(monster,player,WALL,can)=>{\r\n//IF FIRE BALL MEET WALL BLOCK\r\n\r\nWALL.forEach((titleArray,indexTitleArray,arrayWall)=>{\r\n    titleArray.forEach((title,indexTitle,arrayTitle)=>{\r\n\r\nmonster.fireBall.forEach((ball,indexBall,arrayBall)=>{\r\n    if(title.posX+title.size<ball.posX || title.posX>ball.posX+ball.size ||\r\n        title.posY+title.size<ball.posY || title.posY>ball.posY+ball.size){\r\n    //fire ball no collision with title\r\n        }\r\n        else{\r\n            title.hp-=monster.attack.wall\r\n            arrayBall.splice(indexBall,1)\r\n            if(title.hp<0){\r\n                arrayTitle.splice(indexTitle,1)\r\n            }\r\n        }\r\n})\r\n\r\n\r\n    })\r\n})\r\n\r\n//IF FIRE BALL HIT PLAYER\r\nmonster.fireBall.forEach((ball,indexBall,arrWithFireBall)=>{\r\n    if(player.posX+player.size<ball.posX || player.posX>ball.posX+ball.size ||\r\n        player.posY+player.size<ball.posY || player.posY>ball.posY+ball.size){\r\n    \r\n        }\r\n        else{\r\n    \r\n            player.hp-=monster.attack.player\r\n            arrWithFireBall.splice(indexBall,1)\r\n            player.percentageHp-=(0,_Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__.handleHp)(monster.attack.player,player)\r\n    \r\n        }\r\n})\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/dragon/whenFireBallFromDragonTouchWallOrPlayer.js?");

/***/ }),

/***/ "./src/objects/ghost/GhostAttackPlayer.js":
/*!************************************************!*\
  !*** ./src/objects/ghost/GhostAttackPlayer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ghostAttackPlayer\": () => (/* binding */ ghostAttackPlayer)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/handleHp */ \"./src/Functions/helpFunction/handleHp.js\");\n\r\n\r\nconst ghostAttackPlayer=(player,ghostArray)=>{\r\n\r\n    ghostArray.forEach((ghost,index,arr)=>{\r\n       \r\n        if(player.posX+player.size<ghost.posX || player.posX>ghost.posX+ghost.size ||\r\n            player.posY+player.size<ghost.posY || player.posY>ghost.posY+ghost.size){\r\n                ghost.speed=1\r\n   //No coliision\r\n            }\r\n            else{\r\n                player.color=\"red\"\r\n                player.hp-=ghost.attack\r\n                ghost.speed=0\r\n          \r\n                player.percentageHp-=(0,_Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__.handleHp)(ghost.attack,player)/2\r\n              \r\n               \r\n            }\r\n\r\n\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/ghost/GhostAttackPlayer.js?");

/***/ }),

/***/ "./src/objects/ghost/ammoFromPlayerVsGhost.js":
/*!****************************************************!*\
  !*** ./src/objects/ghost/ammoFromPlayerVsGhost.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ammoFromPlayerVsGhost\": () => (/* binding */ ammoFromPlayerVsGhost)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/handleHp */ \"./src/Functions/helpFunction/handleHp.js\");\n\r\n\r\nconst ammoFromPlayerVsGhost=(arrayGhost,player)=>{\r\n\r\n    arrayGhost.forEach((monster,indexMonster,arrayMONSTER)=>{\r\n\r\n        player.bullet.forEach((bullet,indexBullet,arrayBullet)=>{\r\n            if(bullet.posX+bullet.size<monster.posX || bullet.posX>monster.posX+monster.size||\r\n                bullet.posY>monster.posY+monster.size || bullet.posY+bullet.size<monster.posY){\r\n                    //NO COLLISION\r\n                }\r\n                else{\r\n                    monster.hp-=bullet.strenghtAttack\r\n                    console.log(monster.hp,\"hp\")\r\n                    monster.percentageHp-=(0,_Functions_helpFunction_handleHp__WEBPACK_IMPORTED_MODULE_0__.handleHp)(bullet.strenghtAttack,monster)\r\n                    console.log(monster.percentageHp,\"percentage\")\r\n                    arrayBullet.splice(indexBullet,1)\r\n                    if(monster.hp<0){\r\n                        arrayMONSTER.splice(indexMonster,1)\r\n                    }\r\n                }\r\n\r\n\r\n\r\n        })\r\n        \r\n\r\n    })\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://gra/./src/objects/ghost/ammoFromPlayerVsGhost.js?");

/***/ }),

/***/ "./src/objects/ghost/ghost.js":
/*!************************************!*\
  !*** ./src/objects/ghost/ghost.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ghost\": () => (/* binding */ Ghost)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/random */ \"./src/Functions/helpFunction/random.js\");\n/* harmony import */ var _ghost_duszek_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ghost/duszek.png */ \"./src/objects/ghost/duszek.png\");\n\r\n\r\n\r\nlet imgGhost=new Image(100,100)\r\nimgGhost.src=_ghost_duszek_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\r\nclass Ghost{\r\n    constructor(){\r\n        this.posX=100\r\n        this.posY=155\r\n        this.size=60\r\n        this.attack=0.1\r\n        this.color=\"plum\"\r\n        this.type=\"dynamic\"\r\n        this.id=\"monsterFly\"\r\n        this.image=imgGhost\r\n        this.name=\"ghost\"\r\n     \r\n        //DIRECTION\r\n        this.directionArr=[\"up\",\"left\",\"right\",\"down\"]\r\n        this.directionCrossArr=[\"negative\",\"positive\",\"null\"]\r\n        this.directionCross=(0,_Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__.random)(this.directionCrossArr)\r\n        this.direction=(0,_Functions_helpFunction_random__WEBPACK_IMPORTED_MODULE_0__.random)(this.directionArr)\r\n        this.speed=0\r\n\r\n        //direct\r\n        this.left=true\r\n        this.right=true\r\n        this.down=true\r\n        this.up=true\r\n        //HP\r\n        this.hpTotal=320\r\n        this.hp=this.hpTotal\r\n        this.percentageHp=50\r\n        this.ratePercentage=50\r\n   \r\n    }\r\n    draw(can){\r\n        can.ctx.fillStyle=\"red\"\r\n        can.ctx.fillRect(this.posX,this.posY-5,this.percentageHp,5)\r\n        can.ctx.strokeRect(this.posX,this.posY-5,50,5)\r\n        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)\r\n    }\r\n\r\n    movement(){\r\n      \r\n\r\n\r\n    if(this.left===true){\r\n        if(this.direction===\"left\"){\r\n            this.posX-=this.speed\r\n            if(this.directionCross===\"negative\"){\r\n                this.posY-=this.speed/2\r\n            }\r\n            if(this.directionCross===\"positive\"){\r\n                this.posY+=this.speed/2\r\n            }\r\n            if(this.directionCross===\"null\"){\r\n               \r\n            }\r\n          }\r\n    }\r\n  if(this.right===true){\r\n    if(this.direction===\"right\"){\r\n        this.posX+=this.speed\r\n        if(this.directionCross===\"negative\"){\r\n            this.posY-=this.speed/2\r\n        }\r\n        if(this.directionCross===\"positive\"){\r\n            this.posY+=this.speed/2\r\n        }\r\n        if(this.directionCross===\"null\"){\r\n            \r\n        }\r\n        \r\n      }\r\n  }\r\n   \r\nif(this.up===true){\r\n    if(this.direction===\"up\"){\r\n        this.posY-=this.speed\r\n        if(this.directionCross===\"negative\"){\r\n            this.posX-=this.speed/2\r\n        }\r\n        if(this.directionCross===\"positive\"){\r\n            this.posX+=this.speed/2\r\n        }\r\n        if(this.directionCross===\"null\"){\r\n            \r\n        }\r\n      }\r\n}\r\n\r\n    if(this.down===true){\r\n        if(this.direction===\"down\"){\r\n            this.posY+=this.speed\r\n            if(this.directionCross===\"negative\"){\r\n                this.posX-=this.speed/2\r\n            }\r\n            if(this.directionCross===\"positive\"){\r\n                this.posX+=this.speed/2\r\n            }\r\n            if(this.directionCross===\"null\"){\r\n               \r\n            }\r\n            \r\n    \r\n          }\r\n       \r\n         \r\n    }\r\n      \r\n    }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://gra/./src/objects/ghost/ghost.js?");

/***/ }),

/***/ "./src/objects/ghost/ghostGravity.js":
/*!*******************************************!*\
  !*** ./src/objects/ghost/ghostGravity.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ghostGravity\": () => (/* binding */ ghostGravity)\n/* harmony export */ });\n/* harmony import */ var _Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Functions/helpFunction/changeDirectionMonster */ \"./src/Functions/helpFunction/changeDirectionMonster.js\");\n/* harmony import */ var _Functions_helpFunction_borderBarrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Functions/helpFunction/borderBarrier */ \"./src/Functions/helpFunction/borderBarrier.js\");\n\r\n\r\n\r\nconst ghostGravity=(WALL,ghostArray,can)=>{\r\n    //paW- particular array with wall\r\n\r\n\r\n\r\n\r\nWALL.forEach((arrayWIthWall,index,WALL)=>{\r\n\r\n    arrayWIthWall.forEach((title,indexTitle,particularArrayWithTitle)=>{\r\n\r\n\r\n        ghostArray.forEach((ghost,indexGhost,ghostArray)=>{\r\n\r\n            if(ghost.posX>title.posX+title.size || ghost.posX+ghost.size<title.posX ||\r\n                ghost.posY>title.posY+title.size || ghost.posY+ghost.size<title.posY){\r\n              //WHEN NO COLLISION \r\n              \r\n              }\r\n              else{\r\n                //COLISSION ***************************************************\r\n                //Monster Collisionb with static Element\r\n               \r\n                  //right\r\n                  if(ghost.posX+ghost.size>title.posX && ghost.posX+ghost.size<title.posX+title.size/2){\r\n                    ghost.down=true\r\n                    ghost.up=true\r\n                    ghost.right=false\r\n                    ghost.left=true\r\n                  ghost.posX-=ghost.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(ghost,ghost.directionCross,\"right\")\r\n                  }\r\n                  //left\r\n                  if(ghost.posX<title.posX+title.size && ghost.posX>title.posX+title.size/2){\r\n                    ghost.down=true\r\n                    ghost.up=true\r\n                    ghost.right=true\r\n                    ghost.left=false\r\n                    ghost.posX+=ghost.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(ghost,ghost.directionCross,\"left\")\r\n                  }\r\n                  //up\r\n                  if(ghost.posY>title.posY+title.size/2 && ghost.posY<title.posY+title.size){\r\n                    ghost.down=true\r\n                    ghost.up=false\r\n                    ghost.right=true\r\n                    ghost.left=true\r\n                    ghost.posY+=ghost.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(ghost,ghost.directionCross,\"up\")\r\n                  }\r\n                  //down\r\n                  if(ghost.posY+ghost.size>title.posY && ghost.posY+ghost.size<title.posY+title.size/2){\r\n                    ghost.down=false\r\n                    ghost.up=true\r\n                    ghost.right=true\r\n                    ghost.left=true\r\n                    ghost.posY-=ghost.speed+2\r\n                  ;(0,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)(ghost,ghost.directionCross,\"down\")\r\n                  }\r\n        \r\n                  \r\n         \r\n                  }\r\n\r\n                  (0,_Functions_helpFunction_borderBarrier__WEBPACK_IMPORTED_MODULE_1__.borderBarrier)(ghost,can,_Functions_helpFunction_changeDirectionMonster__WEBPACK_IMPORTED_MODULE_0__.changeDirectionMonster)\r\n\r\n        })\r\n\r\n\r\n    })\r\n\r\n})\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/ghost/ghostGravity.js?");

/***/ }),

/***/ "./src/objects/plainWall.js":
/*!**********************************!*\
  !*** ./src/objects/plainWall.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plainWall\": () => (/* binding */ plainWall)\n/* harmony export */ });\n/* harmony import */ var _images_plainWall_100GrassBlock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/plainWall/100GrassBlock.png */ \"./src/images/plainWall/100GrassBlock.png\");\n/* harmony import */ var _images_plainWall_80GrassBlock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/plainWall/80GrassBlock.png */ \"./src/images/plainWall/80GrassBlock.png\");\n/* harmony import */ var _images_plainWall_50GrassBlock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/plainWall/50GrassBlock.png */ \"./src/images/plainWall/50GrassBlock.png\");\n/* harmony import */ var _images_plainWall_20GrassBlock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/plainWall/20GrassBlock.png */ \"./src/images/plainWall/20GrassBlock.png\");\n\r\n\r\n\r\n\r\nlet block100=new Image(100,100)\r\nlet block80=new Image(100,100)\r\nlet block50=new Image(100,100)\r\nlet block20=new Image(100,100)\r\n\r\nblock100.src=_images_plainWall_100GrassBlock_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nblock80.src=_images_plainWall_80GrassBlock_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\nblock50.src=_images_plainWall_50GrassBlock_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\nblock20.src=_images_plainWall_20GrassBlock_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n\r\nclass plainWall{\r\n    constructor(posX,posY,size,color,direction){\r\n        this.posX=posX \r\n        this.posY=posY\r\n        this.size=size\r\n        this.color=color\r\n        this.type=\"static\"\r\n        this.name=\"plainWall\"\r\n        this.direction=direction\r\n        this.image=[block100,block80,block50,block20]\r\n        this.hp=10\r\n        \r\n    }\r\n    draw(can){\r\n      if(this.hp===10 || this.hp<10 || this.hp===8){\r\n        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===7||this.hp<7||this.hp==5){\r\n        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===4 || this.hp===3 ){\r\n        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===2 || this.hp===1 ){\r\n        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)\r\n      }\r\n         \r\n    }\r\n    // draw(can){\r\n      \r\n    //   can.ctx.fillStyle=this.color\r\n    //   can.ctx.fillRect(this.posX,this.posY,this.size,this.size)\r\n    //   can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)\r\n    // }\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/plainWall.js?");

/***/ }),

/***/ "./src/objects/player/AmmoVSWall.js":
/*!******************************************!*\
  !*** ./src/objects/player/AmmoVSWall.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AmmoVsWall\": () => (/* binding */ AmmoVsWall)\n/* harmony export */ });\nconst AmmoVsWall=(player,WALL,can)=>{\r\n   \r\nlet bulletArr=player.bullet\r\nWALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{\r\narrayWithTitle.forEach((title,tI,tArr)=>{\r\n\r\n    bulletArr.forEach((bullet,bI,bArr)=>{\r\n        if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||\r\n            bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){\r\n                //NO COLLISION\r\n            }\r\n            else{\r\n            tArr[tI].hp-=1\r\n            bArr.splice(bArr[bI],1)\r\n            \r\n            if(title.hp===0 || title.hp<0){\r\n                if(title.name===\"plainWall\"){\r\n                    player.building.plainWall.quantity+=1\r\n                }\r\n                if(title.name===\"solidWall\"){\r\n                    player.building.solidWall.quantity+=1\r\n                }\r\n               tArr.splice(tI,1)\r\n                \r\n            }\r\n            }\r\n\r\n            //IF AMMO PASSED VERGE OF MAP\r\n\r\nif(bullet.posX<0 || bullet.posX>can.C_W || bullet.posY>can.C_H || bullet.posY<0){\r\n    bArr.splice(bArr[bI],1)\r\n\r\n}\r\n\r\n    })\r\n\r\n    \r\n\r\n\r\n})\r\n})\r\n\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/player/AmmoVSWall.js?");

/***/ }),

/***/ "./src/objects/player/FireAtakFromPlayer.js":
/*!**************************************************!*\
  !*** ./src/objects/player/FireAtakFromPlayer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FireAtakFromPlayer\": () => (/* binding */ FireAtakFromPlayer)\n/* harmony export */ });\nconst FireAtakFromPlayer=(player,can,WALL)=>{\r\n    if(player.bulletGlockArray.length>0){\r\n        player.bulletGlockArray.forEach((el,i,arrBullet)=>{\r\n           if(el.name===\"glock\"){\r\n            el.draw(can)\r\n           }\r\n       \r\n        })\r\n    }\r\n    if(player.dynamitsArray.length>0){\r\n        player.dynamitsArray.forEach((el,i,arrDynamits)=>{\r\n           if(el.name===\"dynamite\"){\r\n            el.draw(can)\r\n           }\r\n       \r\n        })\r\n    }\r\n \r\n}\r\n\r\n            \r\n            \r\n            \r\n\n\n//# sourceURL=webpack://gra/./src/objects/player/FireAtakFromPlayer.js?");

/***/ }),

/***/ "./src/objects/player/PLAYERGRAVITY.js":
/*!*********************************************!*\
  !*** ./src/objects/player/PLAYERGRAVITY.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PLAYERGRAVITY\": () => (/* binding */ PLAYERGRAVITY)\n/* harmony export */ });\nconst PLAYERGRAVITY=(player,WALL,can)=>{\r\n\r\n//paW- particular array with wall\r\n\r\n\r\n\r\nlet pX=player.posX\r\nlet pXSize=player.posX+player.size\r\nlet pY=player.posY\r\nlet pYSize=player.posY+player.size\r\n\r\n\r\n//STRENGHT GRAVITY\r\nplayer.posY+=player.strenghtGravity\r\n\r\nlet dwa=0\r\nWALL.forEach((pAW,pAI,wallArray)=>{\r\n    //pE-particular Element wall title\r\n  pAW.forEach((pE,pI,pArr)=>{\r\n\r\n    //CONTACT PLAYER WITH TITLE FROM WALL\r\n    if(player.posX+player.size<pE.posX || player.posX>pE.posX+pE.size ||\r\n         player.posY+player.size<pE.posY || player.posY>pE.posY+pE.size){\r\n\r\n         }\r\n         else{\r\n     \r\n          //HORIZONTAL WALL CONTACT WITH PLAYER\r\n          if(pE.direction===\"horizontal\"){\r\n          \r\n      //When player touch horizontal element on top\r\n   \r\n            if(pYSize>pE.posY-player.size && pE.posY>pY){\r\n              //Gravity dont work when player stand on block\r\n            player.posY-=player.strenghtGravity\r\n            //\r\n              player.down=false\r\n             pE.color=\"white\"\r\n             player.up=true\r\n             player.stop=true\r\n             player.counterJump=0\r\n\r\n         \r\n            \r\n             \r\n            }\r\n         //Block MoveRight on horizontal when meet wall\r\n            if(pXSize>pE.posX && pE.posY<pYSize &&pXSize<pE.posX+pE.size/2 && player.directionMove===\"right\"){\r\n              player.posX=pE.posX-player.size-2\r\n            \r\n              // player.right=\"false\"\r\n              pE.color=\"red\"\r\n              console.log(\"HORIZONTAl right\")\r\n             \r\n            \r\n            }\r\n            //Move Left\r\n            if(pX<pE.posX+pE.size&&pX>pE.posX+pE.size/2 && player.directionMove===\"left\" &&pYSize>pE.posY){\r\n              player.posX+=player.speed\r\n              // player.left=false\r\n            \r\n             \r\n              pE.color=\"pink\"\r\n             \r\n            }\r\n      //Block jump when meet down horizontal wall\r\n      //JUMP JUMP\r\n      if(pY<pE.posY+pE.size+player.size&&pY>pE.posY+pE.size/2){\r\n        player.posY=pE.posY+pE.size\r\n        pE.color=\"black\"\r\n        player.stop=false\r\n        player.up=false\r\n        pE.color=\"red\"\r\n      }\r\n\r\n          }\r\n\r\n          //VERTICAL\r\n          if(pE.direction===\"vertical\"){\r\n          \r\n            //STAND ON TOP\r\n            if(pYSize>pE.posY-player.size&&pYSize<pE.posY+pE.size){\r\n              player.down=false\r\n              player.posY-=player.strenghtGravity\r\n              player.counterJump=0\r\n              \r\n             \r\n            }\r\n\r\n            //BLOCK RIGHT\r\n            if(pXSize>pE.posX&&pXSize<pE.posX+pE.size && player.directionMove===\"right\"&&pYSize>pE.posY){\r\n              player.posX=pE.posX-player.size-2\r\n              // player.right=false\r\n              pE.color=\"#696969\"\r\n              console.log(\"block right..v.\")\r\n             \r\n            }\r\n            //BLOCK LEFT\r\n            if(pX<pE.posX+pE.size&&pX>pE.posX+pE.size/2&&player.directionMove===\"left\"&&pYSize>pE.posY){\r\n              let collisionSize=pE.posX+pE.size-player.posX\r\n              player.posX=pE.posX+pE.size+1\r\n             \r\n              // player.left=false\r\n              pE.color=\"darkblue\"\r\n              console.log(\"block left\")\r\n              \r\n\r\n            }\r\n            //JUMP JUMP\r\n            if(pY<pE.posY+pE.size&&pY>pE.posY+pE.size/2&&player.directionMove==\"up\"){\r\n              player.posY=pE.posY+pE.size+2\r\n              pE.color=\"yellow\"\r\n              player.up=false\r\n              \r\n             \r\n              \r\n            }\r\n      \r\n\r\n          }\r\n\r\n           \r\n            //END ELSE\r\n         }\r\n\r\n\r\n  })\r\n})\r\n//WHEN PLAYER TOUCH VERGE OF MAP\r\nif(player.posX<0||player.posX==0){\r\n  player.posX=0+1\r\n  player.left=false\r\n}\r\nif(player.posX+player.size>can.C_W){\r\n  player.posX=can.C_W-player.size-1\r\n  player.right=false\r\n}\r\nif(player.posY>can.C_H){\r\n  player.posY=100\r\n}\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/player/PLAYERGRAVITY.js?");

/***/ }),

/***/ "./src/objects/player/checkIfPlayerIsAlive.js":
/*!****************************************************!*\
  !*** ./src/objects/player/checkIfPlayerIsAlive.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfPlayerIsAlive\": () => (/* binding */ checkIfPlayerIsAlive)\n/* harmony export */ });\nconst checkIfPlayerIsAlive=(player)=>{\r\nif(player.hp<0 || player.hp==0){\r\n    player.hp=player.hpTotal\r\n    player.percentageHp=player.ratePercentage\r\n}\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/player/checkIfPlayerIsAlive.js?");

/***/ }),

/***/ "./src/objects/player/movementPlayer/movementPlayer.js":
/*!*************************************************************!*\
  !*** ./src/objects/player/movementPlayer/movementPlayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movementPlayer\": () => (/* binding */ movementPlayer)\n/* harmony export */ });\n/* harmony import */ var _plainWall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plainWall */ \"./src/objects/plainWall.js\");\n/* harmony import */ var _solidWall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../solidWall */ \"./src/objects/solidWall.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//QUERY FROM HTML\r\n\r\n\r\nconst POINTER=document.querySelector(\".viewFinderImg\")\r\n\r\nconst movementPlayer=(player,imgTitleFromMenu)=>{\r\n    \r\n    window.addEventListener(\"keydown\",(e)=>{\r\n        console.log(player.directionMove)\r\n        if(e.keyCode===37){\r\n               \r\n                player.moveLeft()\r\n                \r\n        }\r\n        if(e.keyCode===39){\r\n            player.moveRight()\r\n    }\r\n\r\nif(e.keyCode===40){\r\n    player.moveDown()\r\n}\r\nif(e.keyCode===32){\r\n    player.fire()\r\n    \r\n}\r\nif(e.keyCode===81){\r\n  \r\n\r\n}\r\n\r\n    })\r\n\r\n    //HANDLE MENU WITH TITLE TO BUILD NEW TITLE ON MAP\r\n    window.addEventListener(\"keyup\",(e)=>{\r\n        console.log(e.keyCode)\r\n        //JUMP\r\n        if(e.keyCode===38){\r\n            if(player.counterJump<2){\r\n                player.moveUp()\r\n                player.counterJump++\r\n            }\r\n        \r\n            if(player.counterJump>2){\r\n                player.up=false\r\n                \r\n            }\r\n    }\r\n    //choicee first block\r\n    if(e.keyCode===49){\r\n\r\n        //Take plain wall and build new title\r\n       player.building.plainWall.canIBuild=true\r\n       player.building.solidWall.canIBuild=false\r\n       player.mode=\"buildingWall\"\r\n       //GIVE BORDER TO CHOOSEN TITLE WHICH YOU WANT TO USE TO Build new title and take from rest\r\n       imgTitleFromMenu.forEach((img,i,arr)=>{\r\n        img.style.border=\"none\"\r\n\r\n       })\r\n       imgTitleFromMenu[0].style.border=`3px solid red`\r\n    \r\n\r\n\r\n       \r\n    }\r\n    if(e.keyCode===50){\r\n        //Take solid wall and build solid title\r\n        player.mode=\"buildingWall\"\r\n        player.building.plainWall.canIBuild=false\r\n        player.building.solidWall.canIBuild=true\r\n  //GIVE BORDER TO CHOOSEN TITLE WHICH YOU WANT TO USE TO Build new title and take from rest\r\n        imgTitleFromMenu.forEach((img,i,arr)=>{\r\n            img.style.border=\"none\"\r\n    \r\n           })\r\n           imgTitleFromMenu[1].style.border=`3px solid red`\r\n\r\n     }\r\nif(e.keyCode===81){\r\n//Q take GLOCK\r\nplayer.mode=\"fireFire\"\r\n}\r\n\r\n\r\n\r\n    })\r\n\r\n    window.addEventListener(\"click\",(e)=>{\r\n        //PLAIN WALL IS BUILDING\r\n      if(player.mode===\"buildingWall\"){\r\n        if(player.building.plainWall.quantity>0 && player.building.plainWall.canIBuild===true){\r\n            player.blockToBuild.push(new _plainWall__WEBPACK_IMPORTED_MODULE_0__.plainWall(e.x-35,e.y-35,60,\"red\",\"horizontal\"))\r\n            player.building.plainWall.quantity-=1\r\n        }\r\n        // SOLID WALL IS BUILDING\r\n        if(player.building.solidWall.quantity>0 && player.building.solidWall.canIBuild===true){\r\n            player.blockToBuild.push(new _solidWall__WEBPACK_IMPORTED_MODULE_1__.solidWall(e.x-30,e.y-30,60,\"red\",\"horizontal\"))\r\n            player.building.solidWall.quantity-=1\r\n        }\r\n      }\r\n     \r\n    })\r\n    window.addEventListener(\"mousemove\",(e)=>{\r\n\r\n        POINTER.style.left=e.x -15 +\"px\"\r\n        POINTER.style.top=e.y - 15+\"px\"\r\n    \r\n    \r\n    })\r\n  \r\n}\r\n\r\n\n\n//# sourceURL=webpack://gra/./src/objects/player/movementPlayer/movementPlayer.js?");

/***/ }),

/***/ "./src/objects/player/movementPlayer/switchViefinder.js":
/*!**************************************************************!*\
  !*** ./src/objects/player/movementPlayer/switchViefinder.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchViewfinder\": () => (/* binding */ switchViewfinder)\n/* harmony export */ });\n/* harmony import */ var _celownik_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celownik.png */ \"./src/objects/player/movementPlayer/celownik.png\");\n/* harmony import */ var _brick_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick.png */ \"./src/objects/player/movementPlayer/brick.png\");\n\r\n\r\nconst pointerViewFinder=new Image(100,100).src=_celownik_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconst brickViewFinder=new Image(100,100).src=_brick_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\nconst POINTER=document.querySelector(\".viewFinderImg\")\r\n\r\nconst switchViewfinder=(player)=>{\r\nif(player.mode===\"buildingWall\"){\r\n    POINTER.src=brickViewFinder\r\n}\r\nif(player.mode===\"fireFire\"){\r\n    POINTER.src=pointerViewFinder\r\n}\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/player/movementPlayer/switchViefinder.js?");

/***/ }),

/***/ "./src/objects/player/player.js":
/*!**************************************!*\
  !*** ./src/objects/player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _GUN_dynamite_dynamite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GUN/dynamite/dynamite */ \"./src/objects/GUN/dynamite/dynamite.js\");\n/* harmony import */ var _GUN_glock_glock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GUN/glock/glock */ \"./src/objects/GUN/glock/glock.js\");\n/* harmony import */ var _playerSprite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerSprite.png */ \"./src/objects/player/playerSprite.png\");\n\r\n\r\n\r\nconst playerImage=new Image(100,100)\r\nplayerImage.src=_playerSprite_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\nclass Player{\r\n    constructor(){\r\n        this.posX=300\r\n        this.posY=500\r\n        this.size=45.7\r\n        this.color=\"blue\"\r\n        //IMAGE PLAYER\r\n        this.image=playerImage\r\n        this.animation=0\r\n        this.movementOngoing=true\r\n       \r\n        this.id=\"player\"\r\n      this.strenghtGravity=2\r\n        this.directionMove=\"down\"\r\n        this.directionAttack=\"left\"\r\n        this.directionJump=\"left\"\r\n        this.speed=19.57\r\n\r\n        //Direction\r\n        this.up=true\r\n        this.down=true\r\n        this.left=true\r\n        this.right=true\r\n \r\n        //JUMP HANDLE\r\n   this.powerJump=20\r\n   this.counterJump=0\r\n\r\n   //HP\r\n   this.hpTotal=100\r\n   this.hp=this.hpTotal\r\n   this.percentageHp=50\r\n   //ratePercentage serve as on what number is count \"percent\" for example 20*50/hpTotal\r\n   this.ratePercentage=50\r\n   //quantity live\r\n   this.quantityLive=3\r\n\r\n   //MODE DASHBOARD\r\n   this.mode=\"fireFire\"\r\n   //BUILDIN NEW BLOCK\r\n   this.building={plainWall:{quantity:3,canIBuild:false},solidWall:{quantity:3,canIBuild:false}}\r\n   this.blockToBuild=[]\r\n       //gun\r\n       this.GUN={glock:{choosen:true,available:true,ammo:102332},dynamite:{choosen:true,available:true,ammo:52112}}\r\n       this.bulletGlockArray=[]\r\n       this.dynamitsArray=[]\r\n       \r\n       \r\n\r\n    }\r\n    draw(can){\r\n \r\n      can.ctx.fillStyle=\"green\"\r\n        can.ctx.fillRect(this.posX,this.posY-25,this.percentageHp,10)\r\n        can.ctx.strokeRect(this.posX,this.posY-25,50,10)\r\n \r\n     \r\n     if(this.directionMove===\"up\" || this.directionMove===\"down\"){\r\n      can.ctx.drawImage(this.image,0,0,250,240,this.posX,this.posY,this.size,this.size)\r\n      \r\n     }\r\n     if(this.directionMove===\"left\"){\r\n   \r\n      can.ctx.drawImage(this.image,this.animation,500,250,240,this.posX,this.posY,this.size,this.size)\r\n    \r\n      if(this.animation>=1000){\r\n        this.animation=0\r\n      }\r\n     }\r\n     if(this.directionMove===\"right\")\r\n   \r\n     can.ctx.drawImage(this.image,this.animation,750,250,240,this.posX,this.posY,this.size,this.size)\r\n    \r\n     if(this.animation>=1000){\r\n       this.animation=0\r\n     }\r\n    }\r\n    moveUp(){\r\n  \r\n      if(this.up===true){\r\n        this.posY-=this.powerJump\r\n      setTimeout(()=>{\r\n        if(this.stop===true){\r\n          this.posY-=this.powerJump\r\n        }\r\n        setTimeout(()=>{\r\n          if(this.stop===true){\r\n            this.posY-=this.powerJump\r\n          }\r\n          setTimeout(()=>{\r\n            if(this.stop===true){\r\n              this.posY-=this.powerJump\r\n            }\r\n            setTimeout(()=>{\r\n              if(this.stop===true){\r\n                this.posY-=this.powerJump\r\n              }\r\n              setTimeout(()=>{\r\n                if(this.stop===true){\r\n                  this.posY-=this.powerJump\r\n                }\r\n              },20)\r\n            },20)\r\n          },20)\r\n        },20)\r\n      },20)\r\n      }\r\n\r\n      this.right=true\r\n      this.left=true\r\n      this.down=true\r\n      \r\n      \r\n  this.directionMove=\"up\"\r\n  this.directionAttack=\"up\"\r\n  this.movementOngoing=false\r\n\r\n    }\r\n\r\n    moveLeft(){\r\n      \r\n      \r\n            this.animation+=250\r\n            if(this.animation>=1200){\r\n              this.animation=0\r\n            }\r\n            this.right=true\r\n            this.directionMove=\"left\"\r\n            this.directionAttack=\"left\"\r\n            this.directionJump=\"left\"\r\n            if(this.left===true){\r\n              this.posX-=this.speed\r\n            }\r\n            this.movementOngoing=false\r\n           \r\n       \r\n    }\r\n    moveRight(){\r\n           this.animation+=250\r\n           if(this.animation>=1200){\r\n            this.animation=0\r\n           }\r\n          this.left=true\r\n            this.directionMove=\"right\"\r\n            this.directionAttack=\"right\"\r\n            this.directionJump=\"right\"\r\n            if(this.right===true){\r\n              this.posX+=this.speed\r\n            }\r\n            this.movementOngoing=false\r\n}\r\nmoveDown(){\r\n  this.directionMove=\"down\"\r\n  this.directionAttack=\"down\"\r\n  this.movementOngoing=false\r\n\r\n}\r\n\r\nfire(){\r\nif(this.GUN.glock.choosen===true&&this.GUN.glock.available===true&&this.GUN.glock.ammo>0){\r\n  this.GUN.glock.ammo-=1\r\n  this.bulletGlockArray.push(new _GUN_glock_glock__WEBPACK_IMPORTED_MODULE_1__.Glock(this.posX+this.size/2,this.posY+this.size/2,this.directionAttack))\r\n\r\n}\r\nif(this.GUN.dynamite.choosen===true&&this.GUN.dynamite.available===true&&this.GUN.dynamite.ammo>0){\r\n  this.GUN.dynamite.ammo-=1\r\n  this.dynamitsArray.push(new _GUN_dynamite_dynamite__WEBPACK_IMPORTED_MODULE_0__.Dynamite(this.posX+this.size/2,this.posY-10,this.directionAttack))\r\n\r\n}\r\n\r\n}\r\n\r\n\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/player/player.js?");

/***/ }),

/***/ "./src/objects/solidWall.js":
/*!**********************************!*\
  !*** ./src/objects/solidWall.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"solidWall\": () => (/* binding */ solidWall)\n/* harmony export */ });\n/* harmony import */ var _images_solidWall_100SolidBlock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/solidWall/100SolidBlock.png */ \"./src/images/solidWall/100SolidBlock.png\");\n/* harmony import */ var _images_solidWall_80SolidBlock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/solidWall/80SolidBlock.png */ \"./src/images/solidWall/80SolidBlock.png\");\n/* harmony import */ var _images_solidWall_50SolidBlock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/solidWall/50SolidBlock.png */ \"./src/images/solidWall/50SolidBlock.png\");\n/* harmony import */ var _images_solidWall_20SolidBlock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/solidWall/20SolidBlock.png */ \"./src/images/solidWall/20SolidBlock.png\");\n\r\n\r\n\r\n\r\n\r\nlet block1=new Image(100,100)\r\nlet block2=new Image(100,100)\r\nlet block3=new Image(100,100)\r\nlet block4=new Image(100,100)\r\nblock1.src=_images_solidWall_100SolidBlock_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nblock2.src=_images_solidWall_80SolidBlock_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\nblock3.src=_images_solidWall_50SolidBlock_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\nblock4.src=_images_solidWall_20SolidBlock_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n\r\nclass solidWall{\r\n    constructor(posX,posY,size,color,direction){\r\n        this.posX=posX \r\n        this.posY=posY\r\n        this.size=size\r\n        this.color=color\r\n        this.type=\"static\"\r\n        this.name=\"solidWall\"\r\n        this.direction=direction\r\n        this.image=[block1,block2,block3,block4]\r\n        this.hp=25\r\n        \r\n    }\r\n    draw(can){\r\n      if(this.hp===25 || this.hp<25 || this.hp===20){\r\n        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===19||this.hp<19||this.hp==12){\r\n        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===11 || this.hp<11 ){\r\n        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)\r\n      }\r\n      if(this.hp===5 || this.hp<5 ){\r\n        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)\r\n      }\r\n         \r\n    }\r\n    // draw(can){\r\n      \r\n    //   can.ctx.fillStyle=this.color\r\n    //   can.ctx.fillRect(this.posX,this.posY,this.size,this.size)\r\n    //   can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)\r\n    // }\r\n}\n\n//# sourceURL=webpack://gra/./src/objects/solidWall.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;