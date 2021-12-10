/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    max-width: fit-content;\n}\n\nnav {\n    display: flex;\n    flex: row;\n    justify-content: center;\n    column-gap: 5rem;\n    border: 2px solid black;\n    width: 100vw;\n    padding: 20px;\n    margin: 10px;\n    background-color: rgba(0, 0, 0, 0.9);\n}\n\n.btn {\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0);\n    color: #eee;\n    padding: 10px;\n    font-family:'Courier New', Courier, monospace;\n    font-size: 20px;\n}\n\n.main {\n    width: 80vw;\n    border: 2px solid black;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    font-family:'Courier New', Courier, monospace;\n    color: #eee;\n    display: flex;\n    flex-direction: column;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.desc {\n    vertical-align: middle;\n}\n\n.menu-image {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    margin: 10px;\n    width: 300px;\n    max-width: 50%;\n    float: left;\n}\n\n.loc {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    width: 600px;\n    max-width: 80%;\n}\n\n.slider {\n    width: 40vw;\n    margin: auto;\n    overflow: hidden;\n    position: relative;\n}\n\n.frame {\n    display: flex;\n    width: 100%;\n    height: auto;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.slideImg {\n    width: 40vw;\n    justify-self: center;\n    align-self: center;\n}\n\n.arr {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.4);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 10px;\n    transition: 0.4 ease;\n}\n\n.arr:hover {\n    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.5)\n}\n\n.arr div {\n    position: absolute;\n    height: 18px;\n    width: 18px;\n    border-top: 4px solid whitesmoke;\n    border-left: 4px solid whitesmoke;\n    transform: rotate(45deg);\n    left: 9px;\n    top: 12px;\n    opacity: 0.8;\n}\n\n.next {\n    transform: rotate(90deg);\n}\n\n.prev {\n    transform: rotate(-90deg);\n}\n\n.next-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    right: 0%;\n}\n\n.prev-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    row-gap: 15px;\n    padding-top: 50px;\n}\n\n.user-info {\n    width: 80vw;\n}\n\n.user-message {\n    width: 80vw;\n    height: 250px;\n}\n\n.submit-btn {\n    width: 100px;\n    height: 25px;\n}\n\ninput {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ninput:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\ntextarea {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ntextarea:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ntextarea:focus:invalid {\n    outline: none;\n}\n\n.error {\n    width  : 100%;\n    padding: 0;\n    font-size: 80%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n    box-sizing: border-box;\n}\n  \n.error.active {\n    padding: 0.3em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yDAA8C;IAC9C,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,WAAW;IACX,aAAa;IACb,6CAA6C;IAC7C,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,6CAA6C;IAC7C,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,iCAAiC;IACjC,wBAAwB;IACxB,SAAS;IACT,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,SAAS;IACT,oBAAoB;IACpB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,SAAS;IACT,oBAAoB;IACpB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,cAAc;IACd,YAAY;IACZ,sBAAsB;IACtB,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\n    background-image: url('images/background.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    max-width: fit-content;\n}\n\nnav {\n    display: flex;\n    flex: row;\n    justify-content: center;\n    column-gap: 5rem;\n    border: 2px solid black;\n    width: 100vw;\n    padding: 20px;\n    margin: 10px;\n    background-color: rgba(0, 0, 0, 0.9);\n}\n\n.btn {\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0);\n    color: #eee;\n    padding: 10px;\n    font-family:'Courier New', Courier, monospace;\n    font-size: 20px;\n}\n\n.main {\n    width: 80vw;\n    border: 2px solid black;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    font-family:'Courier New', Courier, monospace;\n    color: #eee;\n    display: flex;\n    flex-direction: column;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.desc {\n    vertical-align: middle;\n}\n\n.menu-image {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    margin: 10px;\n    width: 300px;\n    max-width: 50%;\n    float: left;\n}\n\n.loc {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    width: 600px;\n    max-width: 80%;\n}\n\n.slider {\n    width: 40vw;\n    margin: auto;\n    overflow: hidden;\n    position: relative;\n}\n\n.frame {\n    display: flex;\n    width: 100%;\n    height: auto;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.slideImg {\n    width: 40vw;\n    justify-self: center;\n    align-self: center;\n}\n\n.arr {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.4);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 10px;\n    transition: 0.4 ease;\n}\n\n.arr:hover {\n    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.5)\n}\n\n.arr div {\n    position: absolute;\n    height: 18px;\n    width: 18px;\n    border-top: 4px solid whitesmoke;\n    border-left: 4px solid whitesmoke;\n    transform: rotate(45deg);\n    left: 9px;\n    top: 12px;\n    opacity: 0.8;\n}\n\n.next {\n    transform: rotate(90deg);\n}\n\n.prev {\n    transform: rotate(-90deg);\n}\n\n.next-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    right: 0%;\n}\n\n.prev-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    row-gap: 15px;\n    padding-top: 50px;\n}\n\n.user-info {\n    width: 80vw;\n}\n\n.user-message {\n    width: 80vw;\n    height: 250px;\n}\n\n.submit-btn {\n    width: 100px;\n    height: 25px;\n}\n\ninput {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ninput:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\ntextarea {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ntextarea:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ntextarea:focus:invalid {\n    outline: none;\n}\n\n.error {\n    width  : 100%;\n    padding: 0;\n    font-size: 80%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n    box-sizing: border-box;\n}\n  \n.error.active {\n    padding: 0.3em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ "./src/validation.js");



function createContactForm() {
    const form = document.createElement('form');
    const name = document.createElement('input');
    const nameError = document.createElement('span');
    const email = document.createElement('input');
    const emailError = document.createElement('span');
    const phone = document.createElement('input');
    const phoneError = document.createElement('span');
    const message = document.createElement('textarea');
    const messageError = document.createElement('span');
    const button = document.createElement('button');

    form.classList.add('contact-form');
    form.setAttribute('novalidate', 'true');
    name.classList.add('user-info');
    name.setAttribute('type', 'text');
    name.setAttribute('id', 'name');
    name.setAttribute('required', 'true');
    name.setAttribute('maxlength', '70');
    name.setAttribute('placeholder', 'Name');
    nameError.classList.add('error');
    nameError.setAttribute('id', 'nameError');
    email.classList.add('user-info');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('required', 'true');
    email.setAttribute('maxlength', '255');
    email.setAttribute('placeholder', 'Email')
    emailError.classList.add('error');
    emailError.setAttribute('id', 'emailError');
    phone.classList.add('user-info');
    phone.setAttribute('type', 'tel');
    phone.setAttribute('id', 'phone');
    phone.setAttribute('required', 'true');
    phone.setAttribute('minlength', '10');
    phone.setAttribute('pattern', "[0-9]{10}");
    phone.setAttribute('placeholder', 'Enter a 10-digit US phone #');
    phoneError.classList.add('error');
    phoneError.setAttribute('id', 'phoneError');
    message.classList.add('user-message');
    message.setAttribute('id', 'message');
    message.setAttribute('required', 'true');
    message.setAttribute('maxlength', '500');
    message.setAttribute('placeholder', 'Write us a message')
    messageError.classList.add('error');
    messageError.setAttribute('id', 'messageError');
    button.classList.add('submit-btn');
    button.textContent = 'Submit';

    form.appendChild(name);
    form.appendChild(nameError)
    form.appendChild(email);
    form.appendChild(emailError);
    form.appendChild(phone);
    form.appendChild(phoneError);
    form.appendChild(message);
    form.appendChild(messageError);
    form.appendChild(button);

    return form;
}

function loadContact() {
    const footer = document.getElementById('footer');
    footer.textContent = '';

    const content = document.getElementById('main');
    content.textContent = '';

    const description = document.createElement('p');
    description.textContent = 'We are located in Long Bien District, just near the Long Bien Bridge and overlooking the Red River. Slide thru muffucker.'

    const loc = new Image();
    loc.src = _images_location_png__WEBPACK_IMPORTED_MODULE_0__;
    loc.classList.add('loc');

    const contact = document.createElement('p');
    contact.textContent = 'Call us @ +84 01697341170 or send a message using the form below :)'

    content.appendChild(description);
    content.appendChild(loc);
    content.appendChild(contact);
    content.appendChild(createContactForm());

    (0,_validation_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");


function loadHome() {
    const main = document.getElementById('main');
    main.innerHTML = `
    <h2>Welcome to my Twisted Restaurant</h2>
    <p>We have been expecting you... *mwahahaha*</p>
    <p>Our story begins in 2015, the year we moved to Hanoi to escape the decaying imperial core of our forebears. 
    We hadn't met yet but on opposite sides of the ancient city we were schemin' in similar ways.
    We were fully prepared to "hit a lick" so to speak. 
    Through the people we met and the food we ate, Hanoi got us bad.</p>
    <p>A year later, we found each other and discovered a mutual affection for Bun Dau... Mien Tron... things of that nature.
    We argued over our favorite spots for Com Rang or Banh Mi.
    We began to cook meals for each other which were poor approximations of the dishes we had fallen in love with.
    We fell in love with each other too it turns out!
    Over time, our technique improved... Know what I'm saying?
    I mean, we were fine tuning our dinners as we did our lesson plans.
    Oh yes, we were ESL teachers too... Tough racket!
    Slowly but surely, we came to the conclusion that we should probably get married and open a restaurant.
    Before we could realize this plan of ours we moved about the globe some more, collecting bits of seasoning here and there.
    Along the way, we also realized the contradictions between our politics and starting a business.
    Ultimately, we found ourselves back where we started.</p>
    <p>When we finally decided to open up a restaurant, we knew we were reproducing a pattern that we wanted to break.
    We stand in solidarity with the global proletariat and all oppressed peoples of the world.
    We support all attempts to build socialism and a nation's right to self-determination.
    We uphold scientific socialism and dialectical materialism as the basis for understanding history.
    We also want to make a bomb ass vegan pizza for the comrades.</p>
    <p>With all of that in mind, we opened up my Twisted Restaurant with two primary goals:</p>
    <ul>
        <li>Make delicious vegan food.</li>
        <li>Serve the community.</li>
    </ul>
    <p>We would also have to create surplus value, of course, but through the robust national co-op framework of Vietnam.
    Working together with several local agriculture co-ops, all of our profits go into improving our food and our ability to serve the most vulnerable communities in Hanoi.
    Yes, we are actual vegan communists.
    Oh, and we still continue to teach as well.
    Now we produce dumplings as well as ideology :)
    We wish to struggle with our comrades, not our meals.
    If any of this sounds appealing to you, have a look at our menu.
    It's our favorite food from all of the places we've lived and we've spent over a decade perfecting these dishes.
    It's good, actually. Ask anyone!
    `;

    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.createSlider)();
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.loadSlider)();
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.addSliderEvents)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _images_patatas_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/patatas.jpg */ "./src/images/patatas.jpg");
/* harmony import */ var _images_sope_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sope.jpg */ "./src/images/sope.jpg");
/* harmony import */ var _images_flautas_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/flautas.jpg */ "./src/images/flautas.jpg");
/* harmony import */ var _images_ginataang_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ginataang.jpg */ "./src/images/ginataang.jpg");
/* harmony import */ var _images_laing_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/laing.jpg */ "./src/images/laing.jpg");
/* harmony import */ var _images_sesame_noodles_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sesame_noodles.jpg */ "./src/images/sesame_noodles.jpg");
/* harmony import */ var _images_dumplings_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/dumplings.jpg */ "./src/images/dumplings.jpg");
/* harmony import */ var _images_mien_tron_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/mien_tron.jpg */ "./src/images/mien_tron.jpg");
/* harmony import */ var _images_goi_nam_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/goi_nam.jpg */ "./src/images/goi_nam.jpg");











function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');

    const pizza_img = new Image();
    pizza_img.src = _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pizza_img.classList.add('menu-image');
    const patatas_img = new Image();
    patatas_img.src = _images_patatas_jpg__WEBPACK_IMPORTED_MODULE_1__;
    patatas_img.classList.add('menu-image');
    const sope_img = new Image();
    sope_img.src = _images_sope_jpg__WEBPACK_IMPORTED_MODULE_2__;
    sope_img.classList.add('menu-image');
    const flautas_img = new Image();
    flautas_img.src = _images_flautas_jpg__WEBPACK_IMPORTED_MODULE_3__;
    flautas_img.classList.add('menu-image');
    const ginataang_img = new Image();
    ginataang_img.src = _images_ginataang_jpg__WEBPACK_IMPORTED_MODULE_4__;
    ginataang_img.classList.add('menu-image');
    const laing_img = new Image();
    laing_img.src = _images_laing_jpg__WEBPACK_IMPORTED_MODULE_5__;
    laing_img.classList.add('menu-image');
    const sesame_img = new Image();
    sesame_img.src = _images_sesame_noodles_jpg__WEBPACK_IMPORTED_MODULE_6__;
    sesame_img.classList.add('menu-image');
    const dumplings_img = new Image();
    dumplings_img.src = _images_dumplings_jpg__WEBPACK_IMPORTED_MODULE_7__;
    dumplings_img.classList.add('menu-image');
    const mien_img = new Image();
    mien_img.src = _images_mien_tron_jpg__WEBPACK_IMPORTED_MODULE_8__;
    mien_img.classList.add('menu-image');
    const goi_img = new Image();
    goi_img.src = _images_goi_nam_jpg__WEBPACK_IMPORTED_MODULE_9__;
    goi_img.classList.add('menu-image');

    const pizza_desc = document.createElement('div');
    pizza_desc.classList.add('desc');
    pizza_desc.innerHTML = `
        <h3>Margherita Pizza</h3>
        <p>Tomato based sauce on cornmeal dough topped with mozzarella cashew cream cheese, tomatoes and basil. 
        Basil freshly picked from our garden and all other ingredients locally sourced.</p> 
    `
    const patatas_desc = document.createElement('div');
    patatas_desc.classList.add('desc');
    patatas_desc.innerHTML = `
        <h3>Patatas Bravas</h3>
        <p>Crispy fried potatoes in a creamy garlic aioli sauce topped with paprika and fresh parsley.</p> 
    `
    const sope_desc = document.createElement('div');
    sope_desc.classList.add('desc');
    sope_desc.innerHTML = `
        <h3>Walnut and Bean Sopes</h3>
        <p>Two thick masa harina tortillas fried and topped with walnuts, refried mayocoba beans, lettuce, tomatillo avocado salsa, queso freso and cashew cheese.</p>
    `
    const flautas_desc = document.createElement('div');
    flautas_desc.classList.add('desc');
    flautas_desc.innerHTML = `
        <h3>Black Bean and Potato Flautas</h3>
        <p>Black beans, potatoes and corn wrapped in a flour tortilla and baked until crispy. Topped with tomatillo avocado salsa, queso freso and cashew cheese.</p>
    `
    const ginataang_desc = document.createElement('div');
    ginataang_desc.classList.add('desc');
    ginataang_desc.innerHTML = `
        <h3>Ginataang Kalabasa</h3>
        <p>Kalabasa squash, eggplant and string beans braised in a creamy coconut curry sauce.</p>
    `
    const laing_desc = document.createElement('div');
    laing_desc.classList.add('desc');
    laing_desc.innerHTML = `
        <h3>Laing</h3>
        <p>Dried taro leaves slow cooked in coconut milk, aromatics, and spices.</p>
    `
    const sesame_desc = document.createElement('div');
    sesame_desc.classList.add('desc');
    sesame_desc.innerHTML = `
        <h3>Chilled Sesame Noodles</h3>
        <p>Flour noodles in a creamy sesame and chili oil sauce and topped with green onions.</p>
    `
    const dumplings_desc = document.createElement('div');
    dumplings_desc.classList.add('desc');
    dumplings_desc.innerHTML = `
        <h3>Vegan Xiao Long Bao</h3>
        <p>Flour dumplings with a tofu and mushroom filling and soy based broth.</p>
    `
    const mien_desc = document.createElement('div');
    mien_desc.classList.add('desc');
    mien_desc.innerHTML = `
        <h3>Mien Tron</h3>
        <p>Glass noodles mixed with tofu, peanuts and lime in a light vegan fish sauce.</p>
    `
    const goi_desc = document.createElement('div');
    goi_desc.classList.add('desc');
    goi_desc.innerHTML = `
        <h3>Goi Nam</h3>
        <p>Oyster mushroom, carrot, peanut and basil salad topped with a light vegan fish sauce dressing.</p>
    `
    const item0 = document.createElement('div');
    item0.classList.add('menu-item');
    item0.appendChild(pizza_img);
    item0.appendChild(pizza_desc);
    const item1 = document.createElement('div');
    item1.classList.add('menu-item');
    item1.appendChild(patatas_img);
    item1.appendChild(patatas_desc);
    const item2 = document.createElement('div');
    item2.classList.add('menu-item');
    item2.appendChild(sope_img);
    item2.appendChild(sope_desc);
    const item3 = document.createElement('div');
    item3.classList.add('menu-item');
    item3.appendChild(flautas_img);
    item3.appendChild(flautas_desc);
    const item4 = document.createElement('div');
    item4.classList.add('menu-item');
    item4.appendChild(ginataang_img);
    item4.appendChild(ginataang_desc);
    const item5 = document.createElement('div');
    item5.classList.add('menu-item');
    item5.appendChild(laing_img);
    item5.appendChild(laing_desc);
    const item6 = document.createElement('div');
    item6.classList.add('menu-item');
    item6.appendChild(sesame_img);
    item6.appendChild(sesame_desc);
    const item7 = document.createElement('div');
    item7.classList.add('menu-item');
    item7.appendChild(dumplings_img);
    item7.appendChild(dumplings_desc);
    const item8 = document.createElement('div');
    item8.classList.add('menu-item');
    item8.appendChild(mien_img);
    item8.appendChild(mien_desc);
    const item9 = document.createElement('div');
    item9.classList.add('menu-item');
    item9.appendChild(goi_img);
    item9.appendChild(goi_desc);

    menu.appendChild(item0);
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);
    menu.appendChild(item7);
    menu.appendChild(item8);
    menu.appendChild(item9);

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());

    const footer = document.getElementById('footer');
    footer.textContent = '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSlider": () => (/* binding */ createSlider),
/* harmony export */   "loadSlider": () => (/* binding */ loadSlider),
/* harmony export */   "addSliderEvents": () => (/* binding */ addSliderEvents)
/* harmony export */ });
/* harmony import */ var _images_01_JPG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/01.JPG */ "./src/images/01.JPG");
/* harmony import */ var _images_02_JPG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/02.JPG */ "./src/images/02.JPG");
/* harmony import */ var _images_03_JPG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/03.JPG */ "./src/images/03.JPG");
/* harmony import */ var _images_04_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/04.JPG */ "./src/images/04.JPG");
/* harmony import */ var _images_05_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/05.JPG */ "./src/images/05.JPG");
/* harmony import */ var _images_06_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/06.JPG */ "./src/images/06.JPG");
/* harmony import */ var _images_07_JPG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/07.JPG */ "./src/images/07.JPG");
/* harmony import */ var _images_08_JPG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/08.JPG */ "./src/images/08.JPG");









let counter = 1;

function createSlider() {
    const footer = document.getElementById('footer');
    const slider = document.createElement('div');
    const prevWrapper = document.createElement('div');
    const nextWrapper = document.createElement('div');
    const prevBtn = document.createElement('div');
    const nextBtn = document.createElement('div');
    const prevArr = document.createElement('div');
    const nextArr = document.createElement('div');
    const frame = document.createElement('div');

    slider.classList.add('slider');
    slider.setAttribute('id', 'slider');
    prevWrapper.classList.add('prev-wrapper');
    nextWrapper.classList.add('next-wrapper');
    prevBtn.classList.add('arr');
    prevBtn.classList.add('prev');
    prevBtn.setAttribute('id', 'prevBtn');
    nextBtn.classList.add('arr');
    nextBtn.classList.add('next');
    nextBtn.setAttribute('id', 'nextBtn')
    frame.classList.add('frame');
    frame.setAttribute('id', 'frame');

    prevBtn.appendChild(prevArr);
    nextBtn.appendChild(nextArr);
    prevWrapper.appendChild(prevBtn);
    nextWrapper.appendChild(nextBtn);
    slider.appendChild(prevWrapper);
    slider.appendChild(nextWrapper);
    slider.appendChild(frame);
    footer.appendChild(slider)
}

function loadSlider() {
  const frame = document.getElementById('frame');
  
  const lastClone = new Image();
  lastClone.src = _images_08_JPG__WEBPACK_IMPORTED_MODULE_7__;
  lastClone.setAttribute('id', 'lastClone');
  lastClone.classList.add('slideImg');
  const image01 = new Image();
  image01.src = _images_01_JPG__WEBPACK_IMPORTED_MODULE_0__;
  image01.classList.add('slideImg');
  const image02 = new Image();
  image02.src = _images_02_JPG__WEBPACK_IMPORTED_MODULE_1__;
  image02.classList.add('slideImg');
  const image03 = new Image();
  image03.src = _images_03_JPG__WEBPACK_IMPORTED_MODULE_2__;
  image03.classList.add('slideImg');
  const image04 = new Image();
  image04.src = _images_04_JPG__WEBPACK_IMPORTED_MODULE_3__;
  image04.classList.add('slideImg');
  const image05 = new Image();
  image05.src = _images_05_JPG__WEBPACK_IMPORTED_MODULE_4__;
  image05.classList.add('slideImg');
  const image06 = new Image();
  image06.src = _images_06_JPG__WEBPACK_IMPORTED_MODULE_5__;
  image06.classList.add('slideImg');
  const image07 = new Image();
  image07.src = _images_07_JPG__WEBPACK_IMPORTED_MODULE_6__;
  image07.classList.add('slideImg');
  const image08 = new Image();
  image08.src = _images_08_JPG__WEBPACK_IMPORTED_MODULE_7__;
  image08.classList.add('slideImg');
  const firstClone = new Image();
  firstClone.src = _images_01_JPG__WEBPACK_IMPORTED_MODULE_0__;
  firstClone.setAttribute('id', 'firstClone');
  firstClone.classList.add('slideImg');

  frame.appendChild(lastClone);
  frame.appendChild(image01);
  frame.appendChild(image02);
  frame.appendChild(image03);
  frame.appendChild(image04);
  frame.appendChild(image05);
  frame.appendChild(image06);
  frame.appendChild(image07);
  frame.appendChild(image08);
  frame.appendChild(firstClone);
}

function addSliderEvents() {
  const frame = document.querySelector('#frame');
  const images = document.querySelectorAll('.frame img');
  
  frame.style.transform = `translateX(${counter * -40}vw)`;
  
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  
  prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter--;
      frame.style.transform = `translateX(${counter * -40}vw)`;
  });
  
  nextBtn.addEventListener('click', () => {
      if (counter >= images.length - 1) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter++;
      frame.style.transform = `translateX(${counter * -40}vw)`;
      console.log(counter)
  });
  
  frame.addEventListener('transitionend', () => {
      if (images[counter].id ==='lastClone') {
          frame.style.transition = 'none';
          counter = images.length -2;
          frame.style.transform = `translateX(${counter * -40}vw)`;
      }
      if (images[counter].id ==='firstClone') {
          frame.style.transition = 'none';
          counter = 1;
          frame.style.transform = `translateX(${counter * -40}vw)`;
      }
  });
}



/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadFormValidation() {
  const form = document.getElementsByTagName('form')[0];
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  name.addEventListener('focusout', function(e) {
    if (name.validity.valid) {
        nameError.textContent = '';
        nameError.className = 'error';
    } else {
        showNameError();
    }
  });

  email.addEventListener('focusout', function(e) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
  });

  phone.addEventListener('focusout', function(e) {
    if (phone.validity.valid) {
        phoneError.textContent = '';
        phoneError.className = 'error';
    } else {
        showPhoneError();
    }
  });

  message.addEventListener('focusout', function(e) {
    if (message.validity.valid) {
        messageError.textContent = '';
        messageError.className = 'error';
    } else {
        showMessageError();
    }
  });

  form.addEventListener('submit', function(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!name.validity.valid) {
        showNameError();
        e.stopPropagation();
        e.preventDefault();
    } else if (!email.validity.valid) {
        showEmailError();
        e.stopPropagation();
        e.preventDefault();
    } else if (!phone.validity.valid) {
        showPhoneError();
        e.stopPropagation();
        e.preventDefault();
    } else if (!message.validity.valid) {
        showMessageError();
        e.stopPropagation();
        e.preventDefault();
    } else {
        alert(`Thanks for your message!`);
        form.reset();
    }
  });
}

function showNameError() {
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');

  if (name.validity.valueMissing) {
      nameError.textContent = 'Enter a name ya dingus';
  }
  if (name.validity.typeMismatch) {
      nameError.textContent = 'Incorret name ya dingus';
  }
  if (name.validity.rangeOverflow) {
      nameError.textContent = 'Too long ya dingus';
  }
}

function showEmailError() {
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  if (email.validity.valueMissing) {
      emailError.textContent = 'Enter an email ya dingus';
  }
  if (email.validity.typeMismatch) {
      emailError.textContent = 'Incorrect format ya dingus';
  }
  if (email.validity.rangeOverflow) {
      emailError.textContent = 'Too long ya dingus'
  }
}

function showPhoneError() {
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');

  if (phone.validity.valueMissing) {
      phoneError.textContent = 'Enter a phone ya dingus';
  }
  if (phone.validity.patternMismatch) {
      phoneError.textContent = 'Incorrect format ya dingus';
  }
  if (phone.validity.tooShort) {
      phoneError.textContent = 'Too $hort beeyotch';
  }
  if (phone.validity.rangeOverflow) {
      phoneError.textContent = 'Too long ya dingus';
  }
}

function showMessageError() {
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  if (message.validity.valueMissing) {
      messageError.textContent = 'Enter a message ya dingus';
  }
  if (message.validity.typeMismatch) {
      messageError.textContent = 'Incorrect format ya dingus';
  }
  if (message.validity.rangeOverflow) {
      messageError.textContent = 'Too long ya dingus';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFormValidation);

/***/ }),

/***/ "./src/images/01.JPG":
/*!***************************!*\
  !*** ./src/images/01.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b7b751f50e326bcce573.JPG";

/***/ }),

/***/ "./src/images/02.JPG":
/*!***************************!*\
  !*** ./src/images/02.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c2c50e31d9dc4a5e8678.JPG";

/***/ }),

/***/ "./src/images/03.JPG":
/*!***************************!*\
  !*** ./src/images/03.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/8729aa8bcb7e1a853acc.JPG";

/***/ }),

/***/ "./src/images/04.JPG":
/*!***************************!*\
  !*** ./src/images/04.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dc6a2be37d56ecf19549.JPG";

/***/ }),

/***/ "./src/images/05.JPG":
/*!***************************!*\
  !*** ./src/images/05.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7ceddab6fb584289ef0b.JPG";

/***/ }),

/***/ "./src/images/06.JPG":
/*!***************************!*\
  !*** ./src/images/06.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1a7994358576c40f0f0d.JPG";

/***/ }),

/***/ "./src/images/07.JPG":
/*!***************************!*\
  !*** ./src/images/07.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3ad792e58e54c1fe14f4.JPG";

/***/ }),

/***/ "./src/images/08.JPG":
/*!***************************!*\
  !*** ./src/images/08.JPG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/93805277fec1f6789e7a.JPG";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/493a9bbfe58fec163904.jpg";

/***/ }),

/***/ "./src/images/dumplings.jpg":
/*!**********************************!*\
  !*** ./src/images/dumplings.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/98ae90597f4ddfedf6ef.jpg";

/***/ }),

/***/ "./src/images/flautas.jpg":
/*!********************************!*\
  !*** ./src/images/flautas.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/06ef6ba85f731f27344e.jpg";

/***/ }),

/***/ "./src/images/ginataang.jpg":
/*!**********************************!*\
  !*** ./src/images/ginataang.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d61314c7e66ebf9f2b86.jpg";

/***/ }),

/***/ "./src/images/goi_nam.jpg":
/*!********************************!*\
  !*** ./src/images/goi_nam.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0f4a14082ad56dd4b20c.jpg";

/***/ }),

/***/ "./src/images/laing.jpg":
/*!******************************!*\
  !*** ./src/images/laing.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ed9fa96facf4c2f10a44.jpg";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6abee2879c52dc015355.png";

/***/ }),

/***/ "./src/images/mien_tron.jpg":
/*!**********************************!*\
  !*** ./src/images/mien_tron.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/41d1ba2e79418ec30ba5.jpg";

/***/ }),

/***/ "./src/images/patatas.jpg":
/*!********************************!*\
  !*** ./src/images/patatas.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cab85f82824f48a6af24.jpg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9c40075b7a6ab825ebb7.jpg";

/***/ }),

/***/ "./src/images/sesame_noodles.jpg":
/*!***************************************!*\
  !*** ./src/images/sesame_noodles.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c0794e5df3663980fe56.jpg";

/***/ }),

/***/ "./src/images/sope.jpg":
/*!*****************************!*\
  !*** ./src/images/sope.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c3f9baad0d54d73f8490.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('btn');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';
    
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function loadPage() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    content.appendChild(createNav());
    content.appendChild(main);
}

function addEvents() {
    const home = document.getElementById('home');
    home.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    
    const menu = document.getElementById('menu');
    menu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    
    const contact = document.getElementById('contact');
    contact.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

function init() {
    loadPage();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    addEvents();
}

init();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeElqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNZO0FBQ0E7QUFDTTs7O0FBR3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxnREFBUTtBQUMzQztBQUNBO0FBQ0EsbUNBQW1DLGdEQUFRO0FBQzNDO0FBQ0E7QUFDQSxzQ0FBc0MsbURBQVc7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQVE7QUFDWjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA1cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBjb2xvcjogI2VlZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ubG9jIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNsaWRlSW1nIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNCBlYXNlO1xcbn1cXG5cXG4uYXJyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpXFxufVxcblxcbi5hcnIgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5uZXh0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ucHJldiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcblxcbi5uZXh0LXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcmlnaHQ6IDAlO1xcbn1cXG5cXG4ucHJldi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgcm93LWdhcDogMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi51c2VyLWluZm8ge1xcbiAgICB3aWR0aDogODB2dztcXG59XFxuXFxuLnVzZXItbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5pbnB1dDpub3QoOmZvY3VzKTpub3QoOnBsYWNlaG9sZGVyLXNob3duKTppbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREO1xcbn1cXG5cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudGV4dGFyZWE6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXM6aW52YWxpZCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIHdpZHRoICA6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gIFxcbi5lcnJvci5hY3RpdmUge1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxc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QUFjO0lBQ2QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogNXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmxvYyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zbGlkZUltZyB7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYXJyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjQgZWFzZTtcXG59XFxuXFxuLmFycjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KVxcbn1cXG5cXG4uYXJyIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogMTJweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmV4dCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnByZXYge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG5cXG4ubmV4dC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHJpZ2h0OiAwJTtcXG59XFxuXFxuLnByZXYtd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4udXNlci1pbmZvIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi51c2VyLW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnRleHRhcmVhOm5vdCg6Zm9jdXMpOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREQ7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzOmludmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICB3aWR0aCAgOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuICBcXG4uZXJyb3IuYWN0aXZlIHtcXG4gICAgcGFkZGluZzogMC4zZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2NhdGlvbiBmcm9tICcuL2ltYWdlcy9sb2NhdGlvbi5wbmcnO1xuaW1wb3J0IGxvYWRGb3JtVmFsaWRhdGlvbiBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5hbWVFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcGhvbmVFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBtZXNzYWdlRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJ3RydWUnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5mbycpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc3MCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgbmFtZUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgbmFtZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZUVycm9yJyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgndXNlci1pbmZvJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1NScpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW1haWwnKVxuICAgIGVtYWlsRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBlbWFpbEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWxFcnJvcicpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5mbycpO1xuICAgIHBob25lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZWwnKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lJyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMTAnKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBcIlswLTldezEwfVwiKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgMTAtZGlnaXQgVVMgcGhvbmUgIycpO1xuICAgIHBob25lRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBwaG9uZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmVFcnJvcicpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndXNlci1tZXNzYWdlJyk7XG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAwJyk7XG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIHVzIGEgbWVzc2FnZScpXG4gICAgbWVzc2FnZUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgbWVzc2FnZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZUVycm9yJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lRXJyb3IpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbEVycm9yKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lRXJyb3IpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRXJyb3IpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXZSBhcmUgbG9jYXRlZCBpbiBMb25nIEJpZW4gRGlzdHJpY3QsIGp1c3QgbmVhciB0aGUgTG9uZyBCaWVuIEJyaWRnZSBhbmQgb3Zlcmxvb2tpbmcgdGhlIFJlZCBSaXZlci4gU2xpZGUgdGhydSBtdWZmdWNrZXIuJ1xuXG4gICAgY29uc3QgbG9jID0gbmV3IEltYWdlKCk7XG4gICAgbG9jLnNyYyA9IGxvY2F0aW9uO1xuICAgIGxvYy5jbGFzc0xpc3QuYWRkKCdsb2MnKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDYWxsIHVzIEAgKzg0IDAxNjk3MzQxMTcwIG9yIHNlbmQgYSBtZXNzYWdlIHVzaW5nIHRoZSBmb3JtIGJlbG93IDopJ1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2MpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Rm9ybSgpKTtcblxuICAgIGxvYWRGb3JtVmFsaWRhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgeyBjcmVhdGVTbGlkZXIsIGxvYWRTbGlkZXIsIGFkZFNsaWRlckV2ZW50c30gZnJvbSAnLi9zbGlkZXInO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICA8aDI+V2VsY29tZSB0byBteSBUd2lzdGVkIFJlc3RhdXJhbnQ8L2gyPlxuICAgIDxwPldlIGhhdmUgYmVlbiBleHBlY3RpbmcgeW91Li4uICptd2FoYWhhaGEqPC9wPlxuICAgIDxwPk91ciBzdG9yeSBiZWdpbnMgaW4gMjAxNSwgdGhlIHllYXIgd2UgbW92ZWQgdG8gSGFub2kgdG8gZXNjYXBlIHRoZSBkZWNheWluZyBpbXBlcmlhbCBjb3JlIG9mIG91ciBmb3JlYmVhcnMuIFxuICAgIFdlIGhhZG4ndCBtZXQgeWV0IGJ1dCBvbiBvcHBvc2l0ZSBzaWRlcyBvZiB0aGUgYW5jaWVudCBjaXR5IHdlIHdlcmUgc2NoZW1pbicgaW4gc2ltaWxhciB3YXlzLlxuICAgIFdlIHdlcmUgZnVsbHkgcHJlcGFyZWQgdG8gXCJoaXQgYSBsaWNrXCIgc28gdG8gc3BlYWsuIFxuICAgIFRocm91Z2ggdGhlIHBlb3BsZSB3ZSBtZXQgYW5kIHRoZSBmb29kIHdlIGF0ZSwgSGFub2kgZ290IHVzIGJhZC48L3A+XG4gICAgPHA+QSB5ZWFyIGxhdGVyLCB3ZSBmb3VuZCBlYWNoIG90aGVyIGFuZCBkaXNjb3ZlcmVkIGEgbXV0dWFsIGFmZmVjdGlvbiBmb3IgQnVuIERhdS4uLiBNaWVuIFRyb24uLi4gdGhpbmdzIG9mIHRoYXQgbmF0dXJlLlxuICAgIFdlIGFyZ3VlZCBvdmVyIG91ciBmYXZvcml0ZSBzcG90cyBmb3IgQ29tIFJhbmcgb3IgQmFuaCBNaS5cbiAgICBXZSBiZWdhbiB0byBjb29rIG1lYWxzIGZvciBlYWNoIG90aGVyIHdoaWNoIHdlcmUgcG9vciBhcHByb3hpbWF0aW9ucyBvZiB0aGUgZGlzaGVzIHdlIGhhZCBmYWxsZW4gaW4gbG92ZSB3aXRoLlxuICAgIFdlIGZlbGwgaW4gbG92ZSB3aXRoIGVhY2ggb3RoZXIgdG9vIGl0IHR1cm5zIG91dCFcbiAgICBPdmVyIHRpbWUsIG91ciB0ZWNobmlxdWUgaW1wcm92ZWQuLi4gS25vdyB3aGF0IEknbSBzYXlpbmc/XG4gICAgSSBtZWFuLCB3ZSB3ZXJlIGZpbmUgdHVuaW5nIG91ciBkaW5uZXJzIGFzIHdlIGRpZCBvdXIgbGVzc29uIHBsYW5zLlxuICAgIE9oIHllcywgd2Ugd2VyZSBFU0wgdGVhY2hlcnMgdG9vLi4uIFRvdWdoIHJhY2tldCFcbiAgICBTbG93bHkgYnV0IHN1cmVseSwgd2UgY2FtZSB0byB0aGUgY29uY2x1c2lvbiB0aGF0IHdlIHNob3VsZCBwcm9iYWJseSBnZXQgbWFycmllZCBhbmQgb3BlbiBhIHJlc3RhdXJhbnQuXG4gICAgQmVmb3JlIHdlIGNvdWxkIHJlYWxpemUgdGhpcyBwbGFuIG9mIG91cnMgd2UgbW92ZWQgYWJvdXQgdGhlIGdsb2JlIHNvbWUgbW9yZSwgY29sbGVjdGluZyBiaXRzIG9mIHNlYXNvbmluZyBoZXJlIGFuZCB0aGVyZS5cbiAgICBBbG9uZyB0aGUgd2F5LCB3ZSBhbHNvIHJlYWxpemVkIHRoZSBjb250cmFkaWN0aW9ucyBiZXR3ZWVuIG91ciBwb2xpdGljcyBhbmQgc3RhcnRpbmcgYSBidXNpbmVzcy5cbiAgICBVbHRpbWF0ZWx5LCB3ZSBmb3VuZCBvdXJzZWx2ZXMgYmFjayB3aGVyZSB3ZSBzdGFydGVkLjwvcD5cbiAgICA8cD5XaGVuIHdlIGZpbmFsbHkgZGVjaWRlZCB0byBvcGVuIHVwIGEgcmVzdGF1cmFudCwgd2Uga25ldyB3ZSB3ZXJlIHJlcHJvZHVjaW5nIGEgcGF0dGVybiB0aGF0IHdlIHdhbnRlZCB0byBicmVhay5cbiAgICBXZSBzdGFuZCBpbiBzb2xpZGFyaXR5IHdpdGggdGhlIGdsb2JhbCBwcm9sZXRhcmlhdCBhbmQgYWxsIG9wcHJlc3NlZCBwZW9wbGVzIG9mIHRoZSB3b3JsZC5cbiAgICBXZSBzdXBwb3J0IGFsbCBhdHRlbXB0cyB0byBidWlsZCBzb2NpYWxpc20gYW5kIGEgbmF0aW9uJ3MgcmlnaHQgdG8gc2VsZi1kZXRlcm1pbmF0aW9uLlxuICAgIFdlIHVwaG9sZCBzY2llbnRpZmljIHNvY2lhbGlzbSBhbmQgZGlhbGVjdGljYWwgbWF0ZXJpYWxpc20gYXMgdGhlIGJhc2lzIGZvciB1bmRlcnN0YW5kaW5nIGhpc3RvcnkuXG4gICAgV2UgYWxzbyB3YW50IHRvIG1ha2UgYSBib21iIGFzcyB2ZWdhbiBwaXp6YSBmb3IgdGhlIGNvbXJhZGVzLjwvcD5cbiAgICA8cD5XaXRoIGFsbCBvZiB0aGF0IGluIG1pbmQsIHdlIG9wZW5lZCB1cCBteSBUd2lzdGVkIFJlc3RhdXJhbnQgd2l0aCB0d28gcHJpbWFyeSBnb2Fsczo8L3A+XG4gICAgPHVsPlxuICAgICAgICA8bGk+TWFrZSBkZWxpY2lvdXMgdmVnYW4gZm9vZC48L2xpPlxuICAgICAgICA8bGk+U2VydmUgdGhlIGNvbW11bml0eS48L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+V2Ugd291bGQgYWxzbyBoYXZlIHRvIGNyZWF0ZSBzdXJwbHVzIHZhbHVlLCBvZiBjb3Vyc2UsIGJ1dCB0aHJvdWdoIHRoZSByb2J1c3QgbmF0aW9uYWwgY28tb3AgZnJhbWV3b3JrIG9mIFZpZXRuYW0uXG4gICAgV29ya2luZyB0b2dldGhlciB3aXRoIHNldmVyYWwgbG9jYWwgYWdyaWN1bHR1cmUgY28tb3BzLCBhbGwgb2Ygb3VyIHByb2ZpdHMgZ28gaW50byBpbXByb3Zpbmcgb3VyIGZvb2QgYW5kIG91ciBhYmlsaXR5IHRvIHNlcnZlIHRoZSBtb3N0IHZ1bG5lcmFibGUgY29tbXVuaXRpZXMgaW4gSGFub2kuXG4gICAgWWVzLCB3ZSBhcmUgYWN0dWFsIHZlZ2FuIGNvbW11bmlzdHMuXG4gICAgT2gsIGFuZCB3ZSBzdGlsbCBjb250aW51ZSB0byB0ZWFjaCBhcyB3ZWxsLlxuICAgIE5vdyB3ZSBwcm9kdWNlIGR1bXBsaW5ncyBhcyB3ZWxsIGFzIGlkZW9sb2d5IDopXG4gICAgV2Ugd2lzaCB0byBzdHJ1Z2dsZSB3aXRoIG91ciBjb21yYWRlcywgbm90IG91ciBtZWFscy5cbiAgICBJZiBhbnkgb2YgdGhpcyBzb3VuZHMgYXBwZWFsaW5nIHRvIHlvdSwgaGF2ZSBhIGxvb2sgYXQgb3VyIG1lbnUuXG4gICAgSXQncyBvdXIgZmF2b3JpdGUgZm9vZCBmcm9tIGFsbCBvZiB0aGUgcGxhY2VzIHdlJ3ZlIGxpdmVkIGFuZCB3ZSd2ZSBzcGVudCBvdmVyIGEgZGVjYWRlIHBlcmZlY3RpbmcgdGhlc2UgZGlzaGVzLlxuICAgIEl0J3MgZ29vZCwgYWN0dWFsbHkuIEFzayBhbnlvbmUhXG4gICAgYDtcblxuICAgIGNyZWF0ZVNsaWRlcigpO1xuICAgIGxvYWRTbGlkZXIoKTtcbiAgICBhZGRTbGlkZXJFdmVudHMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IHBpenphIGZyb20gJy4vaW1hZ2VzL3BpenphLmpwZyc7XG5pbXBvcnQgcGF0YXRhcyBmcm9tICcuL2ltYWdlcy9wYXRhdGFzLmpwZyc7XG5pbXBvcnQgc29wZSBmcm9tICcuL2ltYWdlcy9zb3BlLmpwZyc7XG5pbXBvcnQgZmxhdXRhcyBmcm9tICcuL2ltYWdlcy9mbGF1dGFzLmpwZyc7XG5pbXBvcnQgZ2luYXRhYW5nIGZyb20gJy4vaW1hZ2VzL2dpbmF0YWFuZy5qcGcnO1xuaW1wb3J0IGxhaW5nIGZyb20gJy4vaW1hZ2VzL2xhaW5nLmpwZyc7XG5pbXBvcnQgc2VzYW1lIGZyb20gJy4vaW1hZ2VzL3Nlc2FtZV9ub29kbGVzLmpwZyc7XG5pbXBvcnQgZHVtcGxpbmdzIGZyb20gJy4vaW1hZ2VzL2R1bXBsaW5ncy5qcGcnO1xuaW1wb3J0IG1pZW4gZnJvbSAnLi9pbWFnZXMvbWllbl90cm9uLmpwZyc7XG5pbXBvcnQgZ29pIGZyb20gJy4vaW1hZ2VzL2dvaV9uYW0uanBnJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuICAgIGNvbnN0IHBpenphX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphX2ltZy5zcmMgPSBwaXp6YTtcbiAgICBwaXp6YV9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IHBhdGF0YXNfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgcGF0YXRhc19pbWcuc3JjID0gcGF0YXRhcztcbiAgICBwYXRhdGFzX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3Qgc29wZV9pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzb3BlX2ltZy5zcmMgPSBzb3BlO1xuICAgIHNvcGVfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBmbGF1dGFzX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZsYXV0YXNfaW1nLnNyYyA9IGZsYXV0YXM7XG4gICAgZmxhdXRhc19pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IGdpbmF0YWFuZ19pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBnaW5hdGFhbmdfaW1nLnNyYyA9IGdpbmF0YWFuZztcbiAgICBnaW5hdGFhbmdfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBsYWluZ19pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBsYWluZ19pbWcuc3JjID0gbGFpbmc7XG4gICAgbGFpbmdfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBzZXNhbWVfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgc2VzYW1lX2ltZy5zcmMgPSBzZXNhbWU7XG4gICAgc2VzYW1lX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgZHVtcGxpbmdzX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGR1bXBsaW5nc19pbWcuc3JjID0gZHVtcGxpbmdzO1xuICAgIGR1bXBsaW5nc19pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IG1pZW5faW1nID0gbmV3IEltYWdlKCk7XG4gICAgbWllbl9pbWcuc3JjID0gbWllbjtcbiAgICBtaWVuX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgZ29pX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGdvaV9pbWcuc3JjID0gZ29pO1xuICAgIGdvaV9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXG4gICAgY29uc3QgcGl6emFfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIHBpenphX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+TWFyZ2hlcml0YSBQaXp6YTwvaDM+XG4gICAgICAgIDxwPlRvbWF0byBiYXNlZCBzYXVjZSBvbiBjb3JubWVhbCBkb3VnaCB0b3BwZWQgd2l0aCBtb3p6YXJlbGxhIGNhc2hldyBjcmVhbSBjaGVlc2UsIHRvbWF0b2VzIGFuZCBiYXNpbC4gXG4gICAgICAgIEJhc2lsIGZyZXNobHkgcGlja2VkIGZyb20gb3VyIGdhcmRlbiBhbmQgYWxsIG90aGVyIGluZ3JlZGllbnRzIGxvY2FsbHkgc291cmNlZC48L3A+IFxuICAgIGBcbiAgICBjb25zdCBwYXRhdGFzX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXRhdGFzX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIHBhdGF0YXNfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5QYXRhdGFzIEJyYXZhczwvaDM+XG4gICAgICAgIDxwPkNyaXNweSBmcmllZCBwb3RhdG9lcyBpbiBhIGNyZWFteSBnYXJsaWMgYWlvbGkgc2F1Y2UgdG9wcGVkIHdpdGggcGFwcmlrYSBhbmQgZnJlc2ggcGFyc2xleS48L3A+IFxuICAgIGBcbiAgICBjb25zdCBzb3BlX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3BlX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIHNvcGVfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5XYWxudXQgYW5kIEJlYW4gU29wZXM8L2gzPlxuICAgICAgICA8cD5Ud28gdGhpY2sgbWFzYSBoYXJpbmEgdG9ydGlsbGFzIGZyaWVkIGFuZCB0b3BwZWQgd2l0aCB3YWxudXRzLCByZWZyaWVkIG1heW9jb2JhIGJlYW5zLCBsZXR0dWNlLCB0b21hdGlsbG8gYXZvY2FkbyBzYWxzYSwgcXVlc28gZnJlc28gYW5kIGNhc2hldyBjaGVlc2UuPC9wPlxuICAgIGBcbiAgICBjb25zdCBmbGF1dGFzX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbGF1dGFzX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIGZsYXV0YXNfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5CbGFjayBCZWFuIGFuZCBQb3RhdG8gRmxhdXRhczwvaDM+XG4gICAgICAgIDxwPkJsYWNrIGJlYW5zLCBwb3RhdG9lcyBhbmQgY29ybiB3cmFwcGVkIGluIGEgZmxvdXIgdG9ydGlsbGEgYW5kIGJha2VkIHVudGlsIGNyaXNweS4gVG9wcGVkIHdpdGggdG9tYXRpbGxvIGF2b2NhZG8gc2Fsc2EsIHF1ZXNvIGZyZXNvIGFuZCBjYXNoZXcgY2hlZXNlLjwvcD5cbiAgICBgXG4gICAgY29uc3QgZ2luYXRhYW5nX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaW5hdGFhbmdfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZ2luYXRhYW5nX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+R2luYXRhYW5nIEthbGFiYXNhPC9oMz5cbiAgICAgICAgPHA+S2FsYWJhc2Egc3F1YXNoLCBlZ2dwbGFudCBhbmQgc3RyaW5nIGJlYW5zIGJyYWlzZWQgaW4gYSBjcmVhbXkgY29jb251dCBjdXJyeSBzYXVjZS48L3A+XG4gICAgYFxuICAgIGNvbnN0IGxhaW5nX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYWluZ19kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBsYWluZ19kZXNjLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPkxhaW5nPC9oMz5cbiAgICAgICAgPHA+RHJpZWQgdGFybyBsZWF2ZXMgc2xvdyBjb29rZWQgaW4gY29jb251dCBtaWxrLCBhcm9tYXRpY3MsIGFuZCBzcGljZXMuPC9wPlxuICAgIGBcbiAgICBjb25zdCBzZXNhbWVfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlc2FtZV9kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBzZXNhbWVfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5DaGlsbGVkIFNlc2FtZSBOb29kbGVzPC9oMz5cbiAgICAgICAgPHA+RmxvdXIgbm9vZGxlcyBpbiBhIGNyZWFteSBzZXNhbWUgYW5kIGNoaWxpIG9pbCBzYXVjZSBhbmQgdG9wcGVkIHdpdGggZ3JlZW4gb25pb25zLjwvcD5cbiAgICBgXG4gICAgY29uc3QgZHVtcGxpbmdzX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdW1wbGluZ3NfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZHVtcGxpbmdzX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+VmVnYW4gWGlhbyBMb25nIEJhbzwvaDM+XG4gICAgICAgIDxwPkZsb3VyIGR1bXBsaW5ncyB3aXRoIGEgdG9mdSBhbmQgbXVzaHJvb20gZmlsbGluZyBhbmQgc295IGJhc2VkIGJyb3RoLjwvcD5cbiAgICBgXG4gICAgY29uc3QgbWllbl9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWllbl9kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBtaWVuX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+TWllbiBUcm9uPC9oMz5cbiAgICAgICAgPHA+R2xhc3Mgbm9vZGxlcyBtaXhlZCB3aXRoIHRvZnUsIHBlYW51dHMgYW5kIGxpbWUgaW4gYSBsaWdodCB2ZWdhbiBmaXNoIHNhdWNlLjwvcD5cbiAgICBgXG4gICAgY29uc3QgZ29pX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnb2lfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZ29pX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+R29pIE5hbTwvaDM+XG4gICAgICAgIDxwPk95c3RlciBtdXNocm9vbSwgY2Fycm90LCBwZWFudXQgYW5kIGJhc2lsIHNhbGFkIHRvcHBlZCB3aXRoIGEgbGlnaHQgdmVnYW4gZmlzaCBzYXVjZSBkcmVzc2luZy48L3A+XG4gICAgYFxuICAgIGNvbnN0IGl0ZW0wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTAuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTAuYXBwZW5kQ2hpbGQocGl6emFfaW1nKTtcbiAgICBpdGVtMC5hcHBlbmRDaGlsZChwaXp6YV9kZXNjKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKHBhdGF0YXNfaW1nKTtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChwYXRhdGFzX2Rlc2MpO1xuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoc29wZV9pbWcpO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKHNvcGVfZGVzYyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChmbGF1dGFzX2ltZyk7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoZmxhdXRhc19kZXNjKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW00LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGdpbmF0YWFuZ19pbWcpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGdpbmF0YWFuZ19kZXNjKTtcbiAgICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW01LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW01LmFwcGVuZENoaWxkKGxhaW5nX2ltZyk7XG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQobGFpbmdfZGVzYyk7XG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChzZXNhbWVfaW1nKTtcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChzZXNhbWVfZGVzYyk7XG4gICAgY29uc3QgaXRlbTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtNy5hcHBlbmRDaGlsZChkdW1wbGluZ3NfaW1nKTtcbiAgICBpdGVtNy5hcHBlbmRDaGlsZChkdW1wbGluZ3NfZGVzYyk7XG4gICAgY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtOC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtOC5hcHBlbmRDaGlsZChtaWVuX2ltZyk7XG4gICAgaXRlbTguYXBwZW5kQ2hpbGQobWllbl9kZXNjKTtcbiAgICBjb25zdCBpdGVtOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW05LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW05LmFwcGVuZENoaWxkKGdvaV9pbWcpO1xuICAgIGl0ZW05LmFwcGVuZENoaWxkKGdvaV9kZXNjKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTYpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTgpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTkpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBpbWcwMSBmcm9tICcuL2ltYWdlcy8wMS5KUEcnO1xuaW1wb3J0IGltZzAyIGZyb20gJy4vaW1hZ2VzLzAyLkpQRyc7XG5pbXBvcnQgaW1nMDMgZnJvbSAnLi9pbWFnZXMvMDMuSlBHJztcbmltcG9ydCBpbWcwNCBmcm9tICcuL2ltYWdlcy8wNC5KUEcnO1xuaW1wb3J0IGltZzA1IGZyb20gJy4vaW1hZ2VzLzA1LkpQRyc7XG5pbXBvcnQgaW1nMDYgZnJvbSAnLi9pbWFnZXMvMDYuSlBHJztcbmltcG9ydCBpbWcwNyBmcm9tICcuL2ltYWdlcy8wNy5KUEcnO1xuaW1wb3J0IGltZzA4IGZyb20gJy4vaW1hZ2VzLzA4LkpQRyc7XG5cbmxldCBjb3VudGVyID0gMTtcblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmV2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5leHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmV2QXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV4dEFyciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2xpZGVyJyk7XG4gICAgcHJldldyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJldi13cmFwcGVyJyk7XG4gICAgbmV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmV4dC13cmFwcGVyJyk7XG4gICAgcHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICBwcmV2QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldkJ0bicpO1xuICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgbmV4dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHRCdG4nKVxuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoJ2ZyYW1lJyk7XG4gICAgZnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsICdmcmFtZScpO1xuXG4gICAgcHJldkJ0bi5hcHBlbmRDaGlsZChwcmV2QXJyKTtcbiAgICBuZXh0QnRuLmFwcGVuZENoaWxkKG5leHRBcnIpO1xuICAgIHByZXZXcmFwcGVyLmFwcGVuZENoaWxkKHByZXZCdG4pO1xuICAgIG5leHRXcmFwcGVyLmFwcGVuZENoaWxkKG5leHRCdG4pO1xuICAgIHNsaWRlci5hcHBlbmRDaGlsZChwcmV2V3JhcHBlcik7XG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKG5leHRXcmFwcGVyKTtcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzbGlkZXIpXG59XG5cbmZ1bmN0aW9uIGxvYWRTbGlkZXIoKSB7XG4gIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lJyk7XG4gIFxuICBjb25zdCBsYXN0Q2xvbmUgPSBuZXcgSW1hZ2UoKTtcbiAgbGFzdENsb25lLnNyYyA9IGltZzA4O1xuICBsYXN0Q2xvbmUuc2V0QXR0cmlidXRlKCdpZCcsICdsYXN0Q2xvbmUnKTtcbiAgbGFzdENsb25lLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDEgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwMS5zcmMgPSBpbWcwMTtcbiAgaW1hZ2UwMS5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBpbWFnZTAyID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMDIuc3JjID0gaW1nMDI7XG4gIGltYWdlMDIuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgaW1hZ2UwMyA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZTAzLnNyYyA9IGltZzAzO1xuICBpbWFnZTAzLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDQgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwNC5zcmMgPSBpbWcwNDtcbiAgaW1hZ2UwNC5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBpbWFnZTA1ID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMDUuc3JjID0gaW1nMDU7XG4gIGltYWdlMDUuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgaW1hZ2UwNiA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZTA2LnNyYyA9IGltZzA2O1xuICBpbWFnZTA2LmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwNy5zcmMgPSBpbWcwNztcbiAgaW1hZ2UwNy5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBpbWFnZTA4ID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMDguc3JjID0gaW1nMDg7XG4gIGltYWdlMDguY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgZmlyc3RDbG9uZSA9IG5ldyBJbWFnZSgpO1xuICBmaXJzdENsb25lLnNyYyA9IGltZzAxO1xuICBmaXJzdENsb25lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmlyc3RDbG9uZScpO1xuICBmaXJzdENsb25lLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG5cbiAgZnJhbWUuYXBwZW5kQ2hpbGQobGFzdENsb25lKTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwMSk7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltYWdlMDIpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWFnZTAzKTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwNCk7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltYWdlMDUpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWFnZTA2KTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwNyk7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltYWdlMDgpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChmaXJzdENsb25lKTtcbn1cblxuZnVuY3Rpb24gYWRkU2xpZGVyRXZlbnRzKCkge1xuICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcmFtZScpO1xuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJhbWUgaW1nJyk7XG4gIFxuICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2NvdW50ZXIgKiAtNDB9dncpYDtcbiAgXG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldkJ0bicpO1xuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHRCdG4nKTtcbiAgXG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA8PSAwKSByZXR1cm47XG4gICAgICBmcmFtZS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dFwiO1xuICAgICAgY291bnRlci0tO1xuICAgICAgZnJhbWUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjb3VudGVyICogLTQwfXZ3KWA7XG4gIH0pO1xuICBcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyID49IGltYWdlcy5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgICBmcmFtZS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dFwiO1xuICAgICAgY291bnRlcisrO1xuICAgICAgZnJhbWUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjb3VudGVyICogLTQwfXZ3KWA7XG4gICAgICBjb25zb2xlLmxvZyhjb3VudGVyKVxuICB9KTtcbiAgXG4gIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBpZiAoaW1hZ2VzW2NvdW50ZXJdLmlkID09PSdsYXN0Q2xvbmUnKSB7XG4gICAgICAgICAgZnJhbWUuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgICBjb3VudGVyID0gaW1hZ2VzLmxlbmd0aCAtMjtcbiAgICAgICAgICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2NvdW50ZXIgKiAtNDB9dncpYDtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZXNbY291bnRlcl0uaWQgPT09J2ZpcnN0Q2xvbmUnKSB7XG4gICAgICAgICAgZnJhbWUuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgICBjb3VudGVyID0gMTtcbiAgICAgICAgICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2NvdW50ZXIgKiAtNDB9dncpYDtcbiAgICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNsaWRlciwgbG9hZFNsaWRlciwgYWRkU2xpZGVyRXZlbnRzIH07IiwiZnVuY3Rpb24gbG9hZEZvcm1WYWxpZGF0aW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gIGNvbnN0IG5hbWVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lRXJyb3InKTtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbiAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEVycm9yJyk7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk7XG4gIGNvbnN0IHBob25lRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmVFcnJvcicpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcbiAgY29uc3QgbWVzc2FnZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VFcnJvcicpO1xuXG4gIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKG5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG5hbWVFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dOYW1lRXJyb3IoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93RW1haWxFcnJvcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgcGhvbmUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHBob25lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHBob25lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcGhvbmVFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dQaG9uZUVycm9yKCk7XG4gICAgfVxuICB9KTtcblxuICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIG1lc3NhZ2VFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBtZXNzYWdlRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TWVzc2FnZUVycm9yKCk7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgc2hvd05hbWVFcnJvcigpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICghZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgc2hvd0VtYWlsRXJyb3IoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoIXBob25lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHNob3dQaG9uZUVycm9yKCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKCFtZXNzYWdlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHNob3dNZXNzYWdlRXJyb3IoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBUaGFua3MgZm9yIHlvdXIgbWVzc2FnZSFgKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dOYW1lRXJyb3IoKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICBjb25zdCBuYW1lRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUVycm9yJyk7XG5cbiAgaWYgKG5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBuYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSBuYW1lIHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKG5hbWUudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgICBuYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnSW5jb3JyZXQgbmFtZSB5YSBkaW5ndXMnO1xuICB9XG4gIGlmIChuYW1lLnZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgIG5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdUb28gbG9uZyB5YSBkaW5ndXMnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dFbWFpbEVycm9yKCkge1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRXJyb3InKTtcblxuICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGFuIGVtYWlsIHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdJbmNvcnJlY3QgZm9ybWF0IHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnVG9vIGxvbmcgeWEgZGluZ3VzJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQaG9uZUVycm9yKCkge1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICBjb25zdCBwaG9uZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lRXJyb3InKTtcblxuICBpZiAocGhvbmUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBwaG9uZUVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGEgcGhvbmUgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAocGhvbmUudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICBwaG9uZUVycm9yLnRleHRDb250ZW50ID0gJ0luY29ycmVjdCBmb3JtYXQgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAocGhvbmUudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIHBob25lRXJyb3IudGV4dENvbnRlbnQgPSAnVG9vICRob3J0IGJlZXlvdGNoJztcbiAgfVxuICBpZiAocGhvbmUudmFsaWRpdHkucmFuZ2VPdmVyZmxvdykge1xuICAgICAgcGhvbmVFcnJvci50ZXh0Q29udGVudCA9ICdUb28gbG9uZyB5YSBkaW5ndXMnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNZXNzYWdlRXJyb3IoKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICBjb25zdCBtZXNzYWdlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUVycm9yJyk7XG5cbiAgaWYgKG1lc3NhZ2UudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBtZXNzYWdlRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSBtZXNzYWdlIHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKG1lc3NhZ2UudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgICBtZXNzYWdlRXJyb3IudGV4dENvbnRlbnQgPSAnSW5jb3JyZWN0IGZvcm1hdCB5YSBkaW5ndXMnO1xuICB9XG4gIGlmIChtZXNzYWdlLnZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgIG1lc3NhZ2VFcnJvci50ZXh0Q29udGVudCA9ICdUb28gbG9uZyB5YSBkaW5ndXMnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRGb3JtVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG4gICAgXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsb2FkUGFnZSgpO1xuICAgIGxvYWRIb21lKCk7XG4gICAgYWRkRXZlbnRzKCk7XG59XG5cbmluaXQoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9