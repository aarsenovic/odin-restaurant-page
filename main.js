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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nheader {\n    background-color: #A8C686;\n    padding: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav {\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n}\n\n.nav-button {\n    background-color: #E07A5F;\n    color: #2E2E2E;\n    padding: 0.50em;\n    border-radius: 4px;\n    border: 1px solid #E07A5F;\n}\n\n.active {\n    background-color: #CDE990;\n}\n\n\nh1 {\n    text-align: center;\n    font-size: 2em;\n    color: #2E2E2E;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.working-hours-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n     flex-direction: column;\n}\n\nh2 {\n    margin-bottom: 1em;\n\n}\n\n.working-hours-mini-container {\n    color: #2E2E2E;\n    margin-bottom: 2em;\n}\n\n\n.location-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #2E2E2E;\n}\n\nh2 {\n    text-align: center;\n    color: #2E2E2E;\n}\n\n.breakfast-container, .about-us-container,.description-text {\n    text-align: justify;\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n    line-height: 1.5;\n    margin-bottom: 2em;\n    padding: 0.75em;\n    border: 3px solid #A8C686;\n}\n\n.breakfast-meal  {\n    font-weight: 700;\n    color: #2E2E2E;\n}\n\n.breakfast-meal-description {\n    color: #2E2E2E;\n    padding-left: 1em;\n}\n\nimg {\n    width: 200px;\n}\n\n.image-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2em;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ \"./src/helperFunction.js\");\n/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptor */ \"./src/descriptor.js\");\n\n\n\nfunction createHeader() {\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", { text: \"About us\" });\n}\n\nfunction createAboutUsSection() {\n    const aboutUs = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\",{\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.aboutUsText,\n    })\n\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement) (\"div\", {\n        children: [aboutUs],\n        classes: [\"about-us-container\"]\n    })\n}\n\nfunction renderAboutTab() {\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n\n    content.appendChild(createHeader());\n    content.appendChild(createAboutUsSection());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutTab);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/aboutTab.js?\n}");

/***/ }),

/***/ "./src/descriptor.js":
/*!***************************!*\
  !*** ./src/descriptor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutUsText: () => (/* binding */ aboutUsText),\n/* harmony export */   breakFastOneDescription: () => (/* binding */ breakFastOneDescription),\n/* harmony export */   breakFastThreeDescription: () => (/* binding */ breakFastThreeDescription),\n/* harmony export */   breakFastTwoDescription: () => (/* binding */ breakFastTwoDescription),\n/* harmony export */   breakfastOne: () => (/* binding */ breakfastOne),\n/* harmony export */   breakfastThree: () => (/* binding */ breakfastThree),\n/* harmony export */   breakfastTwo: () => (/* binding */ breakfastTwo),\n/* harmony export */   restaurantDescriptionText: () => (/* binding */ restaurantDescriptionText),\n/* harmony export */   workHoursMondayToFridayText: () => (/* binding */ workHoursMondayToFridayText),\n/* harmony export */   workHoursSaturdayText: () => (/* binding */ workHoursSaturdayText)\n/* harmony export */ });\nconst restaurantDescriptionText = `\n                ZenBites is a health-focused restaurant that blends mindful eating with bold, modern flavors.\n                Our mission is simple: to nourish your body and calm your mind, one bite at a time.\n                Every dish is crafted with fresh, locally-sourced ingredients and inspired by global wellness traditions\n                — from vibrant plant-based bowls and hearty whole-grain wraps to refreshing smoothies and balanced\n                seasonal plates.\n                At ZenBites, eating well isn’t a restriction — it’s a celebration of balance, flavor, and vitality.\n                Whether you’re here for a quick energizing lunch, a mindful dinner, or a smoothie to recharge,\n                ZenBites is your space to eat clean, feel good, and live well.\n`\n\nconst workHoursMondayToFridayText = `Monday - Friday: 8am - 8pm`;\nconst workHoursSaturdayText = `Satuarday: 8am - 10pm`;\n\nconst breakfastOne = `Zen Glow Bowl`;\nconst breakfastTwo = `Avocado Balance Toast`;\nconst breakfastThree = `Protein Pancakes`;\n\nconst breakFastOneDescription = `Greek yogurt, chia seeds, mango, blueberries, and a drizzle of honey topped with toasted coconut flakes.`;\nconst breakFastTwoDescription = `Whole-grain sourdough, smashed avocado, poached egg, microgreens, and chili flakes.`;\nconst breakFastThreeDescription = `Oat and banana pancakes served with Greek yogurt and berry compote — sweet and nourishing.`;\n\nconst aboutUsText = `\nAt ZenBites, we believe that food is more than fuel — it’s a form of balance, mindfulness, and connection. Born from a love of clean ingredients and peaceful living, ZenBites is a space where every meal nourishes both body and mind.\n\nOur philosophy is simple: eat consciously, live vibrantly.\nEach dish is crafted from fresh, locally-sourced ingredients, inspired by the harmony of nature and the flavors of world wellness cuisines. Whether it’s a vibrant smoothie bowl to start your morning or a warm, wholesome lunch that recharges your day, we bring together nutrition and creativity in every bite.\n\nWe created ZenBites as a place where healthy eating feels effortless — calm music, earthy tones, the scent of fresh herbs, and a menu that’s colorful, honest, and full of life. No extremes, no guilt, just food that helps you feel your best.\n\nCome to ZenBites to slow down, savor your meal, and rediscover the joy of eating well.\nBalance begins here.\n\n`\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/descriptor.js?\n}");

/***/ }),

/***/ "./src/helperFunction.js":
/*!*******************************!*\
  !*** ./src/helperFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(tag, { text, classes = [], children = [],  attrs = {}} = {}) {\n  const el = document.createElement(tag);\n  if (text) el.textContent = text;\n  if (classes.length) el.classList.add(...classes);\n  children.forEach(child => el.appendChild(child));\n\n    if (attrs && typeof attrs === \"object\") {\n    for (const [key, value] of Object.entries(attrs)) {\n      el.setAttribute(key, value);\n    }\n  }\n\n\n\n\n  return el;\n}\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/helperFunction.js?\n}");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor */ \"./src/descriptor.js\");\n/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunction */ \"./src/helperFunction.js\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.jpg */ \"./src/images/logo.jpg\");\n\n\n\n\n\n\n\nfunction createHeader() {\n  return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"h1\", { text: \"ZenBites\" });\n}\n\nfunction createDescription() {\n  const descriptionText = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", { text: _descriptor__WEBPACK_IMPORTED_MODULE_0__.restaurantDescriptionText, classes:[\"description-text\"] });\n  return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { classes: [\"description-container\"], children: [descriptionText] });\n}\n\nfunction createWorkHours() {\n  const headerTwo = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"h2\", { text: \"Hours\" });\n  const workHoursMondayToFriday = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", { \n    text: _descriptor__WEBPACK_IMPORTED_MODULE_0__.workHoursMondayToFridayText, \n    classes: [\"work-hours\"] \n  });\n  const workHoursSaturday = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", { \n    text: _descriptor__WEBPACK_IMPORTED_MODULE_0__.workHoursSaturdayText, \n    classes: [\"work-hours\"] \n  });\n\n  const workingHoursMiniContainer = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { \n    classes: [\"working-hours-mini-container\"], \n    children: [workHoursMondayToFriday, workHoursSaturday] \n  });\n\n  return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { \n    classes: [\"working-hours-container\"], \n    children: [headerTwo, workingHoursMiniContainer] \n  });\n}\n\nfunction createLocation() {\n    const headerTwo = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"h2\", {text: \"Location\"})\n    const locationText = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", {text: \"Masarikova 10, Sabac\", classes:[\"location-text\"]})\n\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement) (\"div\", {\n        classes: [\"location-container\"],\n        children: [headerTwo, locationText]\n    })\n}\n\nfunction createImageContainer() {\n  const image = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"img\", {attrs:{src: _images_logo_jpg__WEBPACK_IMPORTED_MODULE_2__}})\n\n  return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_1__.createElement) (\"div\", {classes: [\"image-container\"], children:[image]})\n}\n\n\n\n\nfunction renderHomeTab() {\n  const content = document.querySelector(\"#content\");\n  content.innerHTML = \"\";\n\n  content.appendChild(createHeader());\n  content.appendChild(createDescription());\n  content.appendChild(createWorkHours());\n  content.appendChild(createLocation());\n  content.appendChild(createImageContainer());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomeTab);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/homeTab.js?\n}");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"20311fb7daac7e00f648.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/logo.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutTab */ \"./src/aboutTab.js\");\n\n\n\n\n\nconst tabRenderers = {\n  home: _homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  menu: _menuTab__WEBPACK_IMPORTED_MODULE_2__.renderMenuTab,\n  about: _aboutTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n};\n\n(0,_homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst homeButton = document.querySelector('[data-tab=\"home\"]');\nsetActiveButton(homeButton);\n\nfunction attachEventListeners() {\n  document.querySelectorAll(\".nav-button\").forEach(button => {\n    button.addEventListener(\"click\", () => {\n      setActiveButton(button);  \n      const tab = button.dataset.tab;\n      const render = tabRenderers[tab];\n      if (render) render();\n    });\n  });\n}\n\nfunction setActiveButton(button){\n    const allButtons = document.querySelectorAll(\".nav-button\");\n\n    for (let i = 0; i<allButtons.length; i++) {\n        allButtons[i].classList.remove(\"active\");\n    }\n\n    button.classList.add(\"active\");\n}\n\nattachEventListeners();\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuTab: () => (/* binding */ renderMenuTab)\n/* harmony export */ });\n/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ \"./src/helperFunction.js\");\n/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptor */ \"./src/descriptor.js\");\n\n\n\nfunction createHeader() {\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", { text: \"Menu\" });\n}\n\nfunction createSecondaryHeader() {\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", { text: \"Breakfast\" });\n}\n\nfunction createBreakfastSection() {\n    const mealOne = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakfastOne,\n        classes: [\"breakfast-meal\"],\n    })\n    const mealTwo = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakfastTwo,\n        classes: [\"breakfast-meal\"],\n    })\n    const mealThree = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakfastThree,\n        classes: [\"breakfast-meal\"],\n    })\n\n    const mealOneDescription = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakFastOneDescription,\n        classes: [\"breakfast-meal-description\"],\n    })\n    const mealTwoDescription = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakFastTwoDescription,\n        classes: [\"breakfast-meal-description\"],\n    })\n    const mealThreeDescription = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        text: _descriptor__WEBPACK_IMPORTED_MODULE_1__.breakFastThreeDescription,\n        classes: [\"breakfast-meal-description\"],\n    })\n\n    const mealOneContainer = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        children: [mealOne, mealOneDescription],\n        classes: [\"breakfast-meal-container\"],\n    })\n    const mealTwoContainer = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        children: [mealTwo, mealTwoDescription],\n        classes: [\"breakfast-meal-container\"],\n    })\n    const mealThreeContainer = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        children: [mealThree, mealThreeDescription],\n        classes: [\"breakfast-meal-container\"],\n    })\n\n    return (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        children: [mealOneContainer, mealTwoContainer, mealThreeContainer],\n        classes: [\"breakfast-container\"],\n    })\n}\n\nfunction renderMenuTab() {\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\";\n\n    content.appendChild(createHeader());\n    content.appendChild(createSecondaryHeader());\n    content.appendChild(createBreakfastSection());\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menuTab.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;