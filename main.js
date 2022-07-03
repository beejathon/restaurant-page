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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@200&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: 'Montserrat', sans-serif;\n    color: #eee;\n    box-sizing: border-box;\n    font-size: 18px;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    max-width: fit-content;\n}\n\nnav {\n    display: flex;\n    flex: row;\n    justify-content: space-around;\n    border: 2px solid black;\n    width: 100vw;\n    padding: 20px;\n    margin-bottom: 10px;\n    background-color: rgba(0, 0, 0, 0.9);\n    flex: 1;\n}\n\n.logo {\n    width: 6em;\n}\n\n.btn {\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0);\n    padding: 10px;\n    color: #eee;\n    font-size: 24px;\n    flex: 1;\n}\n\n.main {\n    width: 80vw;\n    border: 2px solid black;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    display: flex;\n    flex-direction: column;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.desc {\n    vertical-align: middle;\n}\n\n.menu-image {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    margin: 10px;\n    width: 300px;\n    max-width: 50%;\n    float: left;\n}\n\n.loc {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    width: 600px;\n    max-width: 80%;\n}\n\n.slider {\n    width: 30vw;\n    margin: auto;\n    overflow: hidden;\n    position: relative;\n}\n\n.frame {\n    display: flex;\n    width: 100%;\n    height: auto;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.slideImg {\n    width: 30vw;\n    justify-self: center;\n    align-self: center;\n}\n\n.arr {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 10px;\n    transition: 0.4 ease;\n}\n\n.arr:hover {\n    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.2)\n}\n\n.arr div {\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    border-top: 4px groove whitesmoke;\n    border-left: 4px groove whitesmoke;\n    transform: rotate(45deg);\n    left: 10px;\n    top: 12px;\n}\n\n.next {\n    transform: rotate(90deg);\n}\n\n.prev {\n    transform: rotate(-90deg);\n}\n\n.next-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    right: 1%;\n}\n\n.prev-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    left: 1%;\n}\n\n.form-wrapper {\n    display: flex;\n    width: 50vw;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    padding-top: 50px;\n}\n\n.user-info {\n    padding: 10px;\n    width: 80vw;\n    height: 25px;\n}\n\n.user-message {\n    padding: 10px;\n    width: 80vw;\n    height: 250px;\n}\n\n.submit-btn {\n    width: 100px;\n    height: 25px;\n}\n\ninput {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ninput:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\ntextarea {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ntextarea:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ntextarea:focus:invalid {\n    outline: none;\n}\n\n.error {\n    text-align: center;\n    width: 400px;\n    padding: 0;\n    font-size: 90%;\n    color: white;\n    background-color: rgba(2, 206, 196, 0.783);\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n  \n.error.active {\n    padding: 0.3em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@200&display=swap');\n\n:root {\n    font-family: 'Montserrat', sans-serif;\n    color: #eee;\n    box-sizing: border-box;\n    font-size: 18px;\n}\n\nbody {\n    background-image: url('images/background.jpg');\n    background-attachment: fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    max-width: fit-content;\n}\n\nnav {\n    display: flex;\n    flex: row;\n    justify-content: space-around;\n    border: 2px solid black;\n    width: 100vw;\n    padding: 20px;\n    margin-bottom: 10px;\n    background-color: rgba(0, 0, 0, 0.9);\n    flex: 1;\n}\n\n.logo {\n    width: 6em;\n}\n\n.btn {\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0);\n    padding: 10px;\n    color: #eee;\n    font-size: 24px;\n    flex: 1;\n}\n\n.main {\n    width: 80vw;\n    border: 2px solid black;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    display: flex;\n    flex-direction: column;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.desc {\n    vertical-align: middle;\n}\n\n.menu-image {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    margin: 10px;\n    width: 300px;\n    max-width: 50%;\n    float: left;\n}\n\n.loc {\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n    width: 600px;\n    max-width: 80%;\n}\n\n.slider {\n    width: 30vw;\n    margin: auto;\n    overflow: hidden;\n    position: relative;\n}\n\n.frame {\n    display: flex;\n    width: 100%;\n    height: auto;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.slideImg {\n    width: 30vw;\n    justify-self: center;\n    align-self: center;\n}\n\n.arr {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 10px;\n    transition: 0.4 ease;\n}\n\n.arr:hover {\n    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.2)\n}\n\n.arr div {\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    border-top: 4px groove whitesmoke;\n    border-left: 4px groove whitesmoke;\n    transform: rotate(45deg);\n    left: 10px;\n    top: 12px;\n}\n\n.next {\n    transform: rotate(90deg);\n}\n\n.prev {\n    transform: rotate(-90deg);\n}\n\n.next-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    right: 1%;\n}\n\n.prev-wrapper {\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n    left: 1%;\n}\n\n.form-wrapper {\n    display: flex;\n    width: 50vw;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    padding-top: 50px;\n}\n\n.user-info {\n    padding: 10px;\n    width: 80vw;\n    height: 25px;\n}\n\n.user-message {\n    padding: 10px;\n    width: 80vw;\n    height: 250px;\n}\n\n.submit-btn {\n    width: 100px;\n    height: 25px;\n}\n\ninput {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ninput:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\ntextarea {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    border: 1px solid #333;\n    margin: 0;\n    font-family: inherit;\n    font-size: 90%;\n    box-sizing: border-box;\n}\n\ntextarea:not(:focus):not(:placeholder-shown):invalid {\n    border-color: #900;\n    background-color: #FDD;\n}\n\ntextarea:focus:invalid {\n    outline: none;\n}\n\n.error {\n    text-align: center;\n    width: 400px;\n    padding: 0;\n    font-size: 90%;\n    color: white;\n    background-color: rgba(2, 206, 196, 0.783);\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n  \n.error.active {\n    padding: 0.3em;\n}"],"sourceRoot":""}]);
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
    const wrapper = document.createElement('div')
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

    wrapper.classList.add('form-wrapper')
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
    wrapper.appendChild(form)

    return wrapper;
}

function loadContact() {
    const footer = document.getElementById('footer');
    footer.textContent = '';

    const content = document.getElementById('main');
    content.textContent = '';

    const description = document.createElement('p');
    description.textContent = 'We are located in Long Bien District, just near the Long Bien Bridge and overlooking the Red River.'

    const loc = new Image();
    loc.src = _images_location_png__WEBPACK_IMPORTED_MODULE_0__;
    loc.classList.add('loc');

    const contact = document.createElement('p');
    contact.textContent = 'Call us @ +84 01697341170 or send a message using the form below'

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
    <p>We're just a couple former English teachers that want to make bomb ass vegan pizza for the comrades.</p>
    <p>Our dishes come from all our favorite places around the world but are made from locally sourced ingredients whenever possible.</p>
    <p>Come and enjoy a meal by the Red River with us. Best meal with a view in town, ask anyone! ;)</p>
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
/* harmony import */ var _images_01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/01.png */ "./src/images/01.png");
/* harmony import */ var _images_02_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/02.png */ "./src/images/02.png");
/* harmony import */ var _images_03_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/03.png */ "./src/images/03.png");
/* harmony import */ var _images_04_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/04.png */ "./src/images/04.png");
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
  image01.src = _images_01_png__WEBPACK_IMPORTED_MODULE_0__;
  image01.classList.add('slideImg');
  const image02 = new Image();
  image02.src = _images_02_png__WEBPACK_IMPORTED_MODULE_1__;
  image02.classList.add('slideImg');
  const image03 = new Image();
  image03.src = _images_03_png__WEBPACK_IMPORTED_MODULE_2__;
  image03.classList.add('slideImg');
  const image04 = new Image();
  image04.src = _images_04_png__WEBPACK_IMPORTED_MODULE_3__;
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
  firstClone.src = _images_01_png__WEBPACK_IMPORTED_MODULE_0__;
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
  
  frame.style.transform = `translateX(${counter * -30}vw)`;
  
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  
  prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter--;
      frame.style.transform = `translateX(${counter * -30}vw)`;
  });
  
  nextBtn.addEventListener('click', () => {
      if (counter >= images.length - 1) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter++;
      frame.style.transform = `translateX(${counter * -30}vw)`;
      console.log(counter)
  });
  
  frame.addEventListener('transitionend', () => {
      if (images[counter].id ==='lastClone') {
          frame.style.transition = 'none';
          counter = images.length -2;
          frame.style.transform = `translateX(${counter * -30}vw)`;
      }
      if (images[counter].id ==='firstClone') {
          frame.style.transition = 'none';
          counter = 1;
          frame.style.transform = `translateX(${counter * -30}vw)`;
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
      phoneError.textContent = 'Enter a phone # ya dingus';
  }
  if (phone.validity.patternMismatch) {
      phoneError.textContent = 'Incorrect format ya dingus';
  }
  if (phone.validity.tooShort) {
      phoneError.textContent = 'Too $hort';
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

/***/ "./src/images/01.png":
/*!***************************!*\
  !*** ./src/images/01.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cff64dfa00322df280ba.png";

/***/ }),

/***/ "./src/images/02.png":
/*!***************************!*\
  !*** ./src/images/02.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7d58dc4ec62df2862124.png";

/***/ }),

/***/ "./src/images/03.png":
/*!***************************!*\
  !*** ./src/images/03.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/76c382802e8a351f8cff.png";

/***/ }),

/***/ "./src/images/04.png":
/*!***************************!*\
  !*** ./src/images/04.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d9c5c5023680c873c8a4.png";

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

/***/ "./src/images/bridge.png":
/*!*******************************!*\
  !*** ./src/images/bridge.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7115956c8c4ed9865f27.png";

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
/* harmony import */ var _images_bridge_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/bridge.png */ "./src/images/bridge.png");







function createNav() {
    const nav = document.createElement('nav');

    const logo = new Image();
    logo.src = _images_bridge_png__WEBPACK_IMPORTED_MODULE_4__;
    logo.classList.add('logo')

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

    nav.appendChild(logo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7QUFDOUQ7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hJakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ1k7QUFDQTtBQUNNO0FBQ0U7OztBQUd6QztBQUNBOztBQUVBO0FBQ0EsZUFBZSwrQ0FBTTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQVE7QUFDM0M7QUFDQTtBQUNBLG1DQUFtQyxnREFBUTtBQUMzQztBQUNBO0FBQ0Esc0NBQXNDLG1EQUFXO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFRO0FBQ1o7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA2ZW07XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVzYyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5sb2Mge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZyYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2xpZGVJbWcge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFyciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC40IGVhc2U7XFxufVxcblxcbi5hcnI6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMilcXG59XFxuXFxuLmFyciBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDRweCBncm9vdmUgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBncm9vdmUgd2hpdGVzbW9rZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDEycHg7XFxufVxcblxcbi5uZXh0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ucHJldiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcblxcbi5uZXh0LXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcmlnaHQ6IDElO1xcbn1cXG5cXG4ucHJldi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGxlZnQ6IDElO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuLnVzZXItaW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi51c2VyLW1lc3NhZ2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnRleHRhcmVhOm5vdCg6Zm9jdXMpOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREQ7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzOmludmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyMDYsIDE5NiwgMC43ODMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiAgXFxuLmVycm9yLmFjdGl2ZSB7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJ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LGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ubG9jIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNsaWRlSW1nIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNCBlYXNlO1xcbn1cXG5cXG4uYXJyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpXFxufVxcblxcbi5hcnIgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItdG9wOiA0cHggZ3Jvb3ZlIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggZ3Jvb3ZlIHdoaXRlc21va2U7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAxMnB4O1xcbn1cXG5cXG4ubmV4dCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnByZXYge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG5cXG4ubmV4dC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHJpZ2h0OiAxJTtcXG59XFxuXFxuLnByZXYtd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBsZWZ0OiAxJTtcXG59XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi51c2VyLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4udXNlci1tZXNzYWdlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmlucHV0Om5vdCg6Zm9jdXMpOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREQ7XFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG50ZXh0YXJlYTpub3QoOmZvY3VzKTpub3QoOnBsYWNlaG9sZGVyLXNob3duKTppbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1czppbnZhbGlkIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMjA2LCAxOTYsIDAuNzgzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gIFxcbi5lcnJvci5hY3RpdmUge1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvY2F0aW9uIGZyb20gJy4vaW1hZ2VzL2xvY2F0aW9uLnBuZyc7XG5pbXBvcnQgbG9hZEZvcm1WYWxpZGF0aW9uIGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RGb3JtKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmFtZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBwaG9uZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IG1lc3NhZ2VFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJ3RydWUnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5mbycpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc3MCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgbmFtZUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgbmFtZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZUVycm9yJyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgndXNlci1pbmZvJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1NScpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW1haWwnKVxuICAgIGVtYWlsRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBlbWFpbEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWxFcnJvcicpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5mbycpO1xuICAgIHBob25lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZWwnKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lJyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMTAnKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBcIlswLTldezEwfVwiKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgMTAtZGlnaXQgVVMgcGhvbmUgIycpO1xuICAgIHBob25lRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBwaG9uZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmVFcnJvcicpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndXNlci1tZXNzYWdlJyk7XG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAwJyk7XG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIHVzIGEgbWVzc2FnZScpXG4gICAgbWVzc2FnZUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgbWVzc2FnZUVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZUVycm9yJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lRXJyb3IpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbEVycm9yKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lRXJyb3IpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRXJyb3IpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2UgYXJlIGxvY2F0ZWQgaW4gTG9uZyBCaWVuIERpc3RyaWN0LCBqdXN0IG5lYXIgdGhlIExvbmcgQmllbiBCcmlkZ2UgYW5kIG92ZXJsb29raW5nIHRoZSBSZWQgUml2ZXIuJ1xuXG4gICAgY29uc3QgbG9jID0gbmV3IEltYWdlKCk7XG4gICAgbG9jLnNyYyA9IGxvY2F0aW9uO1xuICAgIGxvYy5jbGFzc0xpc3QuYWRkKCdsb2MnKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDYWxsIHVzIEAgKzg0IDAxNjk3MzQxMTcwIG9yIHNlbmQgYSBtZXNzYWdlIHVzaW5nIHRoZSBmb3JtIGJlbG93J1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2MpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Rm9ybSgpKTtcblxuICAgIGxvYWRGb3JtVmFsaWRhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgeyBjcmVhdGVTbGlkZXIsIGxvYWRTbGlkZXIsIGFkZFNsaWRlckV2ZW50c30gZnJvbSAnLi9zbGlkZXInO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICA8aDI+V2VsY29tZSB0byBteSBUd2lzdGVkIFJlc3RhdXJhbnQ8L2gyPlxuICAgIDxwPldlIGhhdmUgYmVlbiBleHBlY3RpbmcgeW91Li4uICptd2FoYWhhaGEqPC9wPlxuICAgIDxwPldlJ3JlIGp1c3QgYSBjb3VwbGUgZm9ybWVyIEVuZ2xpc2ggdGVhY2hlcnMgdGhhdCB3YW50IHRvIG1ha2UgYm9tYiBhc3MgdmVnYW4gcGl6emEgZm9yIHRoZSBjb21yYWRlcy48L3A+XG4gICAgPHA+T3VyIGRpc2hlcyBjb21lIGZyb20gYWxsIG91ciBmYXZvcml0ZSBwbGFjZXMgYXJvdW5kIHRoZSB3b3JsZCBidXQgYXJlIG1hZGUgZnJvbSBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgd2hlbmV2ZXIgcG9zc2libGUuPC9wPlxuICAgIDxwPkNvbWUgYW5kIGVuam95IGEgbWVhbCBieSB0aGUgUmVkIFJpdmVyIHdpdGggdXMuIEJlc3QgbWVhbCB3aXRoIGEgdmlldyBpbiB0b3duLCBhc2sgYW55b25lISA7KTwvcD5cbiAgICBgO1xuXG4gICAgY3JlYXRlU2xpZGVyKCk7XG4gICAgbG9hZFNsaWRlcigpO1xuICAgIGFkZFNsaWRlckV2ZW50cygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgcGl6emEgZnJvbSAnLi9pbWFnZXMvcGl6emEuanBnJztcbmltcG9ydCBwYXRhdGFzIGZyb20gJy4vaW1hZ2VzL3BhdGF0YXMuanBnJztcbmltcG9ydCBzb3BlIGZyb20gJy4vaW1hZ2VzL3NvcGUuanBnJztcbmltcG9ydCBmbGF1dGFzIGZyb20gJy4vaW1hZ2VzL2ZsYXV0YXMuanBnJztcbmltcG9ydCBnaW5hdGFhbmcgZnJvbSAnLi9pbWFnZXMvZ2luYXRhYW5nLmpwZyc7XG5pbXBvcnQgbGFpbmcgZnJvbSAnLi9pbWFnZXMvbGFpbmcuanBnJztcbmltcG9ydCBzZXNhbWUgZnJvbSAnLi9pbWFnZXMvc2VzYW1lX25vb2RsZXMuanBnJztcbmltcG9ydCBkdW1wbGluZ3MgZnJvbSAnLi9pbWFnZXMvZHVtcGxpbmdzLmpwZyc7XG5pbXBvcnQgbWllbiBmcm9tICcuL2ltYWdlcy9taWVuX3Ryb24uanBnJztcbmltcG9ydCBnb2kgZnJvbSAnLi9pbWFnZXMvZ29pX25hbS5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gICAgY29uc3QgcGl6emFfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFfaW1nLnNyYyA9IHBpenphO1xuICAgIHBpenphX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgcGF0YXRhc19pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXRhdGFzX2ltZy5zcmMgPSBwYXRhdGFzO1xuICAgIHBhdGF0YXNfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBzb3BlX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHNvcGVfaW1nLnNyYyA9IHNvcGU7XG4gICAgc29wZV9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IGZsYXV0YXNfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgZmxhdXRhc19pbWcuc3JjID0gZmxhdXRhcztcbiAgICBmbGF1dGFzX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgZ2luYXRhYW5nX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGdpbmF0YWFuZ19pbWcuc3JjID0gZ2luYXRhYW5nO1xuICAgIGdpbmF0YWFuZ19pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IGxhaW5nX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxhaW5nX2ltZy5zcmMgPSBsYWluZztcbiAgICBsYWluZ19pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IHNlc2FtZV9pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzZXNhbWVfaW1nLnNyYyA9IHNlc2FtZTtcbiAgICBzZXNhbWVfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBkdW1wbGluZ3NfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgZHVtcGxpbmdzX2ltZy5zcmMgPSBkdW1wbGluZ3M7XG4gICAgZHVtcGxpbmdzX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgbWllbl9pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtaWVuX2ltZy5zcmMgPSBtaWVuO1xuICAgIG1pZW5faW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBnb2lfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgZ29pX2ltZy5zcmMgPSBnb2k7XG4gICAgZ29pX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cbiAgICBjb25zdCBwaXp6YV9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgcGl6emFfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5NYXJnaGVyaXRhIFBpenphPC9oMz5cbiAgICAgICAgPHA+VG9tYXRvIGJhc2VkIHNhdWNlIG9uIGNvcm5tZWFsIGRvdWdoIHRvcHBlZCB3aXRoIG1venphcmVsbGEgY2FzaGV3IGNyZWFtIGNoZWVzZSwgdG9tYXRvZXMgYW5kIGJhc2lsLiBcbiAgICAgICAgQmFzaWwgZnJlc2hseSBwaWNrZWQgZnJvbSBvdXIgZ2FyZGVuIGFuZCBhbGwgb3RoZXIgaW5ncmVkaWVudHMgbG9jYWxseSBzb3VyY2VkLjwvcD4gXG4gICAgYFxuICAgIGNvbnN0IHBhdGF0YXNfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhdGF0YXNfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgcGF0YXRhc19kZXNjLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPlBhdGF0YXMgQnJhdmFzPC9oMz5cbiAgICAgICAgPHA+Q3Jpc3B5IGZyaWVkIHBvdGF0b2VzIGluIGEgY3JlYW15IGdhcmxpYyBhaW9saSBzYXVjZSB0b3BwZWQgd2l0aCBwYXByaWthIGFuZCBmcmVzaCBwYXJzbGV5LjwvcD4gXG4gICAgYFxuICAgIGNvbnN0IHNvcGVfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvcGVfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgc29wZV9kZXNjLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPldhbG51dCBhbmQgQmVhbiBTb3BlczwvaDM+XG4gICAgICAgIDxwPlR3byB0aGljayBtYXNhIGhhcmluYSB0b3J0aWxsYXMgZnJpZWQgYW5kIHRvcHBlZCB3aXRoIHdhbG51dHMsIHJlZnJpZWQgbWF5b2NvYmEgYmVhbnMsIGxldHR1Y2UsIHRvbWF0aWxsbyBhdm9jYWRvIHNhbHNhLCBxdWVzbyBmcmVzbyBhbmQgY2FzaGV3IGNoZWVzZS48L3A+XG4gICAgYFxuICAgIGNvbnN0IGZsYXV0YXNfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZsYXV0YXNfZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZmxhdXRhc19kZXNjLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPkJsYWNrIEJlYW4gYW5kIFBvdGF0byBGbGF1dGFzPC9oMz5cbiAgICAgICAgPHA+QmxhY2sgYmVhbnMsIHBvdGF0b2VzIGFuZCBjb3JuIHdyYXBwZWQgaW4gYSBmbG91ciB0b3J0aWxsYSBhbmQgYmFrZWQgdW50aWwgY3Jpc3B5LiBUb3BwZWQgd2l0aCB0b21hdGlsbG8gYXZvY2FkbyBzYWxzYSwgcXVlc28gZnJlc28gYW5kIGNhc2hldyBjaGVlc2UuPC9wPlxuICAgIGBcbiAgICBjb25zdCBnaW5hdGFhbmdfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdpbmF0YWFuZ19kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBnaW5hdGFhbmdfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5HaW5hdGFhbmcgS2FsYWJhc2E8L2gzPlxuICAgICAgICA8cD5LYWxhYmFzYSBzcXVhc2gsIGVnZ3BsYW50IGFuZCBzdHJpbmcgYmVhbnMgYnJhaXNlZCBpbiBhIGNyZWFteSBjb2NvbnV0IGN1cnJ5IHNhdWNlLjwvcD5cbiAgICBgXG4gICAgY29uc3QgbGFpbmdfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhaW5nX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIGxhaW5nX2Rlc2MuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+TGFpbmc8L2gzPlxuICAgICAgICA8cD5EcmllZCB0YXJvIGxlYXZlcyBzbG93IGNvb2tlZCBpbiBjb2NvbnV0IG1pbGssIGFyb21hdGljcywgYW5kIHNwaWNlcy48L3A+XG4gICAgYFxuICAgIGNvbnN0IHNlc2FtZV9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VzYW1lX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIHNlc2FtZV9kZXNjLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPkNoaWxsZWQgU2VzYW1lIE5vb2RsZXM8L2gzPlxuICAgICAgICA8cD5GbG91ciBub29kbGVzIGluIGEgY3JlYW15IHNlc2FtZSBhbmQgY2hpbGkgb2lsIHNhdWNlIGFuZCB0b3BwZWQgd2l0aCBncmVlbiBvbmlvbnMuPC9wPlxuICAgIGBcbiAgICBjb25zdCBkdW1wbGluZ3NfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1bXBsaW5nc19kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBkdW1wbGluZ3NfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5WZWdhbiBYaWFvIExvbmcgQmFvPC9oMz5cbiAgICAgICAgPHA+RmxvdXIgZHVtcGxpbmdzIHdpdGggYSB0b2Z1IGFuZCBtdXNocm9vbSBmaWxsaW5nIGFuZCBzb3kgYmFzZWQgYnJvdGguPC9wPlxuICAgIGBcbiAgICBjb25zdCBtaWVuX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWVuX2Rlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIG1pZW5fZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5NaWVuIFRyb248L2gzPlxuICAgICAgICA8cD5HbGFzcyBub29kbGVzIG1peGVkIHdpdGggdG9mdSwgcGVhbnV0cyBhbmQgbGltZSBpbiBhIGxpZ2h0IHZlZ2FuIGZpc2ggc2F1Y2UuPC9wPlxuICAgIGBcbiAgICBjb25zdCBnb2lfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdvaV9kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBnb2lfZGVzYy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5Hb2kgTmFtPC9oMz5cbiAgICAgICAgPHA+T3lzdGVyIG11c2hyb29tLCBjYXJyb3QsIHBlYW51dCBhbmQgYmFzaWwgc2FsYWQgdG9wcGVkIHdpdGggYSBsaWdodCB2ZWdhbiBmaXNoIHNhdWNlIGRyZXNzaW5nLjwvcD5cbiAgICBgXG4gICAgY29uc3QgaXRlbTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtMC5hcHBlbmRDaGlsZChwaXp6YV9pbWcpO1xuICAgIGl0ZW0wLmFwcGVuZENoaWxkKHBpenphX2Rlc2MpO1xuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQocGF0YXRhc19pbWcpO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKHBhdGF0YXNfZGVzYyk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChzb3BlX2ltZyk7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoc29wZV9kZXNjKTtcbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGZsYXV0YXNfaW1nKTtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChmbGF1dGFzX2Rlc2MpO1xuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoZ2luYXRhYW5nX2ltZyk7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoZ2luYXRhYW5nX2Rlc2MpO1xuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQobGFpbmdfaW1nKTtcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChsYWluZ19kZXNjKTtcbiAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW02LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW02LmFwcGVuZENoaWxkKHNlc2FtZV9pbWcpO1xuICAgIGl0ZW02LmFwcGVuZENoaWxkKHNlc2FtZV9kZXNjKTtcbiAgICBjb25zdCBpdGVtNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW03LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW03LmFwcGVuZENoaWxkKGR1bXBsaW5nc19pbWcpO1xuICAgIGl0ZW03LmFwcGVuZENoaWxkKGR1bXBsaW5nc19kZXNjKTtcbiAgICBjb25zdCBpdGVtOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW04LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW04LmFwcGVuZENoaWxkKG1pZW5faW1nKTtcbiAgICBpdGVtOC5hcHBlbmRDaGlsZChtaWVuX2Rlc2MpO1xuICAgIGNvbnN0IGl0ZW05ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbTkuYXBwZW5kQ2hpbGQoZ29pX2ltZyk7XG4gICAgaXRlbTkuYXBwZW5kQ2hpbGQoZ29pX2Rlc2MpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtNCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtNSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtNik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtNyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtOCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtOSk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGltZzAxIGZyb20gJy4vaW1hZ2VzLzAxLnBuZyc7XG5pbXBvcnQgaW1nMDIgZnJvbSAnLi9pbWFnZXMvMDIucG5nJztcbmltcG9ydCBpbWcwMyBmcm9tICcuL2ltYWdlcy8wMy5wbmcnO1xuaW1wb3J0IGltZzA0IGZyb20gJy4vaW1hZ2VzLzA0LnBuZyc7XG5pbXBvcnQgaW1nMDUgZnJvbSAnLi9pbWFnZXMvMDUuSlBHJztcbmltcG9ydCBpbWcwNiBmcm9tICcuL2ltYWdlcy8wNi5KUEcnO1xuaW1wb3J0IGltZzA3IGZyb20gJy4vaW1hZ2VzLzA3LkpQRyc7XG5pbXBvcnQgaW1nMDggZnJvbSAnLi9pbWFnZXMvMDguSlBHJztcblxubGV0IGNvdW50ZXIgPSAxO1xuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByZXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByZXZBcnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXh0QXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcbiAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzbGlkZXInKTtcbiAgICBwcmV2V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcmV2LXdyYXBwZXInKTtcbiAgICBuZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCduZXh0LXdyYXBwZXInKTtcbiAgICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICAgIHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgIHByZXZCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2QnRuJyk7XG4gICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICBuZXh0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dEJ0bicpXG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZCgnZnJhbWUnKTtcbiAgICBmcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZyYW1lJyk7XG5cbiAgICBwcmV2QnRuLmFwcGVuZENoaWxkKHByZXZBcnIpO1xuICAgIG5leHRCdG4uYXBwZW5kQ2hpbGQobmV4dEFycik7XG4gICAgcHJldldyYXBwZXIuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gICAgbmV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKHByZXZXcmFwcGVyKTtcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQobmV4dFdyYXBwZXIpO1xuICAgIHNsaWRlci5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNsaWRlcilcbn1cblxuZnVuY3Rpb24gbG9hZFNsaWRlcigpIHtcbiAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUnKTtcbiAgXG4gIGNvbnN0IGxhc3RDbG9uZSA9IG5ldyBJbWFnZSgpO1xuICBsYXN0Q2xvbmUuc3JjID0gaW1nMDg7XG4gIGxhc3RDbG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhc3RDbG9uZScpO1xuICBsYXN0Q2xvbmUuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgaW1hZ2UwMSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZTAxLnNyYyA9IGltZzAxO1xuICBpbWFnZTAxLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDIgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwMi5zcmMgPSBpbWcwMjtcbiAgaW1hZ2UwMi5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBpbWFnZTAzID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMDMuc3JjID0gaW1nMDM7XG4gIGltYWdlMDMuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgaW1hZ2UwNCA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZTA0LnNyYyA9IGltZzA0O1xuICBpbWFnZTA0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDUgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwNS5zcmMgPSBpbWcwNTtcbiAgaW1hZ2UwNS5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBpbWFnZTA2ID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMDYuc3JjID0gaW1nMDY7XG4gIGltYWdlMDYuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcbiAgY29uc3QgaW1hZ2UwNyA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZTA3LnNyYyA9IGltZzA3O1xuICBpbWFnZTA3LmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW1nJyk7XG4gIGNvbnN0IGltYWdlMDggPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UwOC5zcmMgPSBpbWcwODtcbiAgaW1hZ2UwOC5jbGFzc0xpc3QuYWRkKCdzbGlkZUltZycpO1xuICBjb25zdCBmaXJzdENsb25lID0gbmV3IEltYWdlKCk7XG4gIGZpcnN0Q2xvbmUuc3JjID0gaW1nMDE7XG4gIGZpcnN0Q2xvbmUuc2V0QXR0cmlidXRlKCdpZCcsICdmaXJzdENsb25lJyk7XG4gIGZpcnN0Q2xvbmUuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbWcnKTtcblxuICBmcmFtZS5hcHBlbmRDaGlsZChsYXN0Q2xvbmUpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWFnZTAxKTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwMik7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltYWdlMDMpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWFnZTA0KTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwNSk7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltYWdlMDYpO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWFnZTA3KTtcbiAgZnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2UwOCk7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGZpcnN0Q2xvbmUpO1xufVxuXG5mdW5jdGlvbiBhZGRTbGlkZXJFdmVudHMoKSB7XG4gIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyYW1lJyk7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmFtZSBpbWcnKTtcbiAgXG4gIGZyYW1lLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y291bnRlciAqIC0zMH12dylgO1xuICBcbiAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2QnRuJyk7XG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dEJ0bicpO1xuICBcbiAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyIDw9IDApIHJldHVybjtcbiAgICAgIGZyYW1lLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0XCI7XG4gICAgICBjb3VudGVyLS07XG4gICAgICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2NvdW50ZXIgKiAtMzB9dncpYDtcbiAgfSk7XG4gIFxuICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPj0gaW1hZ2VzLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgIGZyYW1lLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0XCI7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2NvdW50ZXIgKiAtMzB9dncpYDtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpXG4gIH0pO1xuICBcbiAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGlmIChpbWFnZXNbY291bnRlcl0uaWQgPT09J2xhc3RDbG9uZScpIHtcbiAgICAgICAgICBmcmFtZS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICAgIGNvdW50ZXIgPSBpbWFnZXMubGVuZ3RoIC0yO1xuICAgICAgICAgIGZyYW1lLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y291bnRlciAqIC0zMH12dylgO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlc1tjb3VudGVyXS5pZCA9PT0nZmlyc3RDbG9uZScpIHtcbiAgICAgICAgICBmcmFtZS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICAgIGNvdW50ZXIgPSAxO1xuICAgICAgICAgIGZyYW1lLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y291bnRlciAqIC0zMH12dylgO1xuICAgICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2xpZGVyLCBsb2FkU2xpZGVyLCBhZGRTbGlkZXJFdmVudHMgfTsiLCJmdW5jdGlvbiBsb2FkRm9ybVZhbGlkYXRpb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgY29uc3QgbmFtZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVFcnJvcicpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRXJyb3InKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKTtcbiAgY29uc3QgcGhvbmVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZUVycm9yJyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICBjb25zdCBtZXNzYWdlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUVycm9yJyk7XG5cbiAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAobmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBuYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgbmFtZUVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd05hbWVFcnJvcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZW1haWxFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgfVxuICB9KTtcblxuICBwaG9uZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAocGhvbmUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgcGhvbmVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBwaG9uZUVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1Bob25lRXJyb3IoKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgbWVzc2FnZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1lc3NhZ2VFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dNZXNzYWdlRXJyb3IoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBzaG93TmFtZUVycm9yKCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBzaG93RW1haWxFcnJvcigpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICghcGhvbmUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgc2hvd1Bob25lRXJyb3IoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoIW1lc3NhZ2UudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgc2hvd01lc3NhZ2VFcnJvcigpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYFRoYW5rcyBmb3IgeW91ciBtZXNzYWdlIWApO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd05hbWVFcnJvcigpIHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gIGNvbnN0IG5hbWVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lRXJyb3InKTtcblxuICBpZiAobmFtZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIG5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlciBhIG5hbWUgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAobmFtZS52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICAgIG5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdJbmNvcnJldCBuYW1lIHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKG5hbWUudmFsaWRpdHkucmFuZ2VPdmVyZmxvdykge1xuICAgICAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gJ1RvbyBsb25nIHlhIGRpbmd1cyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0VtYWlsRXJyb3IoKSB7XG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gIGNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxFcnJvcicpO1xuXG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYW4gZW1haWwgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0luY29ycmVjdCBmb3JtYXQgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAoZW1haWwudmFsaWRpdHkucmFuZ2VPdmVyZmxvdykge1xuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdUb28gbG9uZyB5YSBkaW5ndXMnXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Bob25lRXJyb3IoKSB7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk7XG4gIGNvbnN0IHBob25lRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmVFcnJvcicpO1xuXG4gIGlmIChwaG9uZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHBob25lRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSBwaG9uZSAjIHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKHBob25lLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgcGhvbmVFcnJvci50ZXh0Q29udGVudCA9ICdJbmNvcnJlY3QgZm9ybWF0IHlhIGRpbmd1cyc7XG4gIH1cbiAgaWYgKHBob25lLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBwaG9uZUVycm9yLnRleHRDb250ZW50ID0gJ1RvbyAkaG9ydCc7XG4gIH1cbiAgaWYgKHBob25lLnZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgIHBob25lRXJyb3IudGV4dENvbnRlbnQgPSAnVG9vIGxvbmcgeWEgZGluZ3VzJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVzc2FnZUVycm9yKCkge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcbiAgY29uc3QgbWVzc2FnZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VFcnJvcicpO1xuXG4gIGlmIChtZXNzYWdlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgbWVzc2FnZUVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGEgbWVzc2FnZSB5YSBkaW5ndXMnO1xuICB9XG4gIGlmIChtZXNzYWdlLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgbWVzc2FnZUVycm9yLnRleHRDb250ZW50ID0gJ0luY29ycmVjdCBmb3JtYXQgeWEgZGluZ3VzJztcbiAgfVxuICBpZiAobWVzc2FnZS52YWxpZGl0eS5yYW5nZU92ZXJmbG93KSB7XG4gICAgICBtZXNzYWdlRXJyb3IudGV4dENvbnRlbnQgPSAnVG9vIGxvbmcgeWEgZGluZ3VzJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkRm9ybVZhbGlkYXRpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBicmlkZ2UgZnJvbSAnLi9pbWFnZXMvYnJpZGdlLnBuZyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uc3JjID0gYnJpZGdlO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdCk7XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxvYWRQYWdlKCk7XG4gICAgbG9hZEhvbWUoKTtcbiAgICBhZGRFdmVudHMoKTtcbn1cblxuaW5pdCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=