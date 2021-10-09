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
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n  display: inline-grid;\n  grid-template-columns: 10% auto;\n  width: 100%;\n}\n\n#projectList {\n  height: 100%;\n  background-color: #85a392;\n  padding-top: 60px;\n  display: flex;\n  flex-direction: column;\n}\n.projectSelected {\n  font-weight: bold;\n}\n#addProject {\n  order: 1;\n}\n\n.form {\n  display: none;\n  position: absolute;\n  border: solid;\n  background-color: white;\n}\n\n#addTask {\n  background-color: #f5b971;\n  margin: 10px;\n  width: 400px;\n  height: 50px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n}\n\n.activeProject {\n  font-weight: bold;\n}\n\n.card {\n  display: grid;\n  grid-template-columns: auto auto 40px 40px;\n  background-color: #ffecc7;\n  margin: 10px;\n  width: 400px;\n}\n\n.card:nth-child(odd) {\n  background: #fdd998;\n}\n\n.card:hover {\n  background: #f5b971;\n}\n\n.cardTitle {\n  text-align: left;\n  padding: 10px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n  font-weight: bold;\n}\n\n.cardDate {\n  text-align: right;\n  padding: 10px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n}\n\n.deleteIcon {\n  padding: 10px;\n}\n\n.editIcon {\n  padding: 10px;\n}\n\n#taskList {\n  display: grid;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,4DAA4D;EAC5D,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,0CAA0C;EAC1C,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4DAA4D;EAC5D,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,4DAA4D;EAC5D,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["#content {\n  display: inline-grid;\n  grid-template-columns: 10% auto;\n  width: 100%;\n}\n\n#projectList {\n  height: 100%;\n  background-color: #85a392;\n  padding-top: 60px;\n  display: flex;\n  flex-direction: column;\n}\n.projectSelected {\n  font-weight: bold;\n}\n#addProject {\n  order: 1;\n}\n\n.form {\n  display: none;\n  position: absolute;\n  border: solid;\n  background-color: white;\n}\n\n#addTask {\n  background-color: #f5b971;\n  margin: 10px;\n  width: 400px;\n  height: 50px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n}\n\n.activeProject {\n  font-weight: bold;\n}\n\n.card {\n  display: grid;\n  grid-template-columns: auto auto 40px 40px;\n  background-color: #ffecc7;\n  margin: 10px;\n  width: 400px;\n}\n\n.card:nth-child(odd) {\n  background: #fdd998;\n}\n\n.card:hover {\n  background: #f5b971;\n}\n\n.cardTitle {\n  text-align: left;\n  padding: 10px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n  font-weight: bold;\n}\n\n.cardDate {\n  text-align: right;\n  padding: 10px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n}\n\n.deleteIcon {\n  padding: 10px;\n}\n\n.editIcon {\n  padding: 10px;\n}\n\n#taskList {\n  display: grid;\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/delete_black_24dp.svg":
/*!***********************************!*\
  !*** ./src/delete_black_24dp.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a53e22036f5f02bda3f2.svg";

/***/ }),

/***/ "./src/edit_black_24dp.svg":
/*!*********************************!*\
  !*** ./src/edit_black_24dp.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b527df04c00d16681c2.svg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _edit_black_24dp_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_black_24dp.svg */ "./src/edit_black_24dp.svg");
/* harmony import */ var _delete_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_black_24dp.svg */ "./src/delete_black_24dp.svg");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



 //localStorage.clear();

var projectGroup = function () {
  var Project = function Project(name) {
    _classCallCheck(this, Project);

    this.name = name;
    this.list = [];
  };

  var activeProject;
  var projects = [];

  var populateStorage = function populateStorage() {
    localStorage.setItem("projectList", JSON.stringify(projectGroup.projects));
    localStorage.setItem("activeProject", JSON.stringify(projectGroup.activeProject));
  };

  var getProjects = function getProjects() {
    projectGroup.projects = JSON.parse(localStorage.getItem("projectList"));
    projectGroup.activeProject = JSON.parse(localStorage.getItem("activeProject"));
  };

  return {
    Project: Project,
    activeProject: activeProject,
    projects: projects,
    populateStorage: populateStorage,
    getProjects: getProjects
  };
}();

var taskGroup = function () {
  var Task = function Task(title, description, dueDate, priority, complete) {
    _classCallCheck(this, Task);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  };

  var createTask = function createTask() {
    var title = document.getElementById("addTitle").value;
    var description = document.getElementById("addDescription").value;
    var dueDate = document.getElementById("addDueDate").value;
    var priority = document.getElementById("addPriority").value;
    var complete = document.getElementById("addComplete").checked;
    var newTask = new Task(title, description, dueDate, priority, complete);
    projectGroup.activeProject.list.push(newTask);
  };

  var editTask = function editTask() {
    var title = document.getElementById("editTitle").value;
    var description = document.getElementById("editDescription").value;
    var dueDate = document.getElementById("editDueDate").value;
    var priority = document.getElementById("editPriority").value;
    var complete = document.getElementById("editComplete").checked;
    var amendedTask = new Task(title, description, dueDate, priority, complete);
    var activeCard = document.getElementsByClassName("active")[0];
    var i = activeCard.id.substring(4);
    projectGroup.activeProject.list.splice(i, 1, amendedTask);
  };

  var deleteTask = function deleteTask(i) {
    projectGroup.activeProject.list.splice(i, 1);
  };

  return {
    Task: Task,
    createTask: createTask,
    editTask: editTask,
    deleteTask: deleteTask
  };
}();

var manager = function () {
  var projectList = document.querySelector("#projectList");
  var addProjectButton = projectList.querySelector("#addProject");
  var taskList = document.querySelector("#taskList");
  var addTaskButton = taskList.querySelector("#addTask");
  var closeAddTaskFormButton = taskList.querySelector("#closeAddTaskForm");
  var closeEditTaskFormButton = taskList.querySelector("#closeEditTaskForm");

  var openAddTaskForm = function openAddTaskForm() {
    document.getElementById("addTaskForm").style.display = "block";
  };

  var closeAddTaskForm = function closeAddTaskForm() {
    document.getElementById("addTaskForm").style.display = "none";
  };

  var openEditTaskForm = function openEditTaskForm(index) {
    var selectedTask = projectGroup.activeProject.list[index];
    var activeCard = document.getElementById("card" + index);
    activeCard.classList.add("active");
    document.getElementById("editTitle").value = selectedTask.title;
    document.getElementById("editDescription").value = selectedTask.description;
    document.getElementById("editDueDate").value = selectedTask.dueDate;
    document.getElementById("editPriority").value = selectedTask.priority;
    document.getElementById("editComplete").checked = selectedTask.complete;
    document.getElementById("editTaskForm").style.display = "block";
  };

  var closeEditTaskForm = function closeEditTaskForm() {
    document.getElementById("editTaskForm").style.display = "none";
  };

  var promptProject = function promptProject() {
    var name = prompt("Project Name");
    addProject(name);
  };

  var addProject = function addProject(name) {
    var newProject = new projectGroup.Project(name);
    projectGroup.projects.push(newProject);
    projectGroup.activeProject = newProject;
    updateProjectDisplay();
  };

  addProjectButton.addEventListener("click", promptProject);

  var updateProjectDisplay = function updateProjectDisplay() {
    document.querySelectorAll(".project").forEach(function (e) {
      return e.remove();
    });

    for (var i = 0; i < projectGroup.projects.length; i++) {
      var projectButton = document.createElement("button");
      projectButton.textContent = projectGroup.projects[i].name;
      projectButton.classList.add("project");
      projectList.appendChild(projectButton);
      projectButton.addEventListener("click", displayActiveTasks.bind(null, projectGroup.projects[i], projectButton));

      if (projectGroup.projects[i].name === projectGroup.activeProject.name) {
        displayActiveTasks(projectGroup.projects[i], projectButton);
      }
    }
  };

  var updateTaskDisplay = function updateTaskDisplay(Tasks, i) {
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    taskList.appendChild(newCard);
    newCard.id = "card" + i;
    var cardTitle = document.createElement("div");
    cardTitle.textContent = Tasks[i].title;
    cardTitle.classList.add("cardTitle");
    newCard.appendChild(cardTitle);
    var cardDate = document.createElement("div");
    cardDate.textContent = Tasks[i].dueDate;
    cardDate.classList.add("cardDate");
    newCard.appendChild(cardDate);
    var editIcon = new Image();
    editIcon.src = _edit_black_24dp_svg__WEBPACK_IMPORTED_MODULE_1__;
    editIcon.classList.add("editIcon");
    editIcon.addEventListener("click", openEditTaskForm.bind(null, i));
    newCard.appendChild(editIcon);
    var deleteIcon = new Image();
    deleteIcon.src = _delete_black_24dp_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.addEventListener("click", deleteTask.bind(null, i));
    newCard.appendChild(deleteIcon);
  };

  var displayActiveTasks = function displayActiveTasks(a, b) {
    if (a !== undefined) {
      projectGroup.activeProject = a;
    }

    if (b !== undefined) {
      var projects = document.getElementsByClassName("project");

      for (var i = 0; i < projects.length; i++) {
        projects.item(i).classList.remove("activeProject");
      }

      b.classList.add("activeProject");
    }

    document.querySelectorAll(".card").forEach(function (e) {
      return e.remove();
    });

    for (var _i = 0; _i < projectGroup.activeProject.list.length; _i++) {
      updateTaskDisplay(projectGroup.activeProject.list, _i);
    }

    projectGroup.populateStorage();
  };

  var addTask = function addTask() {
    taskGroup.createTask();
    updateTaskDisplay(projectGroup.activeProject.list, projectGroup.activeProject.list.length - 1);
    closeAddTaskForm();
    projectGroup.populateStorage();
  };

  var editTask = function editTask(index) {
    taskGroup.editTask(index);
    document.querySelectorAll(".card").forEach(function (e) {
      return e.remove();
    });

    for (var i = 0; i < projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }

    closeEditTaskForm();
    projectGroup.populateStorage();
  };

  var deleteTask = function deleteTask() {
    taskGroup.deleteTask();
    displayActiveTasks();
  };

  addTaskButton.addEventListener("click", openAddTaskForm);
  closeAddTaskFormButton.addEventListener("click", closeAddTaskForm);
  closeEditTaskFormButton.addEventListener("click", closeEditTaskForm);
  document.getElementById("addTaskForm").addEventListener("submit", addTask);
  document.getElementById("editTaskForm").addEventListener("submit", editTask);

  if (localStorage.activeProject) {
    projectGroup.getProjects();
    updateProjectDisplay();
    displayActiveTasks();
  } else {
    addProject("Default");
  }
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsQ0FBQ2dCLGdCQUF4QixDQUF5QyxPQUF6QyxFQUFrRE4saUJBQWxEO0FBQ0FoQyxFQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNxQyxnQkFBdkMsQ0FBd0QsUUFBeEQsRUFBa0V5QixPQUFsRTtBQUNBL0QsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDcUMsZ0JBQXhDLENBQXlELFFBQXpELEVBQW1FaEMsUUFBbkU7O0FBRUEsTUFBSXJCLFlBQVksQ0FBQ0gsYUFBakIsRUFBZ0M7QUFDOUJKLElBQUFBLFlBQVksQ0FBQ1csV0FBYjtBQUNBZ0QsSUFBQUEsb0JBQW9CO0FBQ3BCVyxJQUFBQSxrQkFBa0I7QUFDbkIsR0FKRCxNQUlPO0FBQ0xiLElBQUFBLFVBQVUsQ0FBQyxTQUFELENBQVY7QUFDRDtBQUNGLENBL0llLEVBQWhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RMaXN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NWEzOTI7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdFNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jYWRkUHJvamVjdCB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1Yjk3MTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byA0MHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2M3O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uY2FyZDpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZmRkOTk4O1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjViOTcxO1xcbn1cXG5cXG4uY2FyZFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkRGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIxcHg7XFxufVxcblxcbi5kZWxldGVJY29uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5lZGl0SWNvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFza0xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osNERBQTREO0VBQzVELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNERBQTREO0VBQzVELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVhMzkyO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3RTZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2FkZFByb2plY3Qge1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWI5NzE7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIxcHg7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gNDBweCA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNjNztcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZDogI2ZkZDk5ODtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Y1Yjk3MTtcXG59XFxuXFxuLmNhcmRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZERhdGUge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG4uZGVsZXRlSWNvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZWRpdEljb24ge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Rhc2tMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGVuSWNvbiBmcm9tIFwiLi9lZGl0X2JsYWNrXzI0ZHAuc3ZnXCI7XG5pbXBvcnQgYmluSWNvbiBmcm9tIFwiLi9kZWxldGVfYmxhY2tfMjRkcC5zdmdcIjtcbi8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmNvbnN0IHByb2plY3RHcm91cCA9ICgoKSA9PiB7XG4gIGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG4gIH1cbiAgbGV0IGFjdGl2ZVByb2plY3Q7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHBvcHVsYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RHcm91cC5wcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJhY3RpdmVQcm9qZWN0XCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHByb2plY3RHcm91cC5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSk7XG4gICAgcHJvamVjdEdyb3VwLmFjdGl2ZVByb2plY3QgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIpXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBQcm9qZWN0LFxuICAgIGFjdGl2ZVByb2plY3QsXG4gICAgcHJvamVjdHMsXG4gICAgcG9wdWxhdGVTdG9yYWdlLFxuICAgIGdldFByb2plY3RzLFxuICB9O1xufSkoKTtcblxuY29uc3QgdGFza0dyb3VwID0gKCgpID0+IHtcbiAgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZERlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZER1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb21wbGV0ZVwiKS5jaGVja2VkO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgIHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0Lmxpc3QucHVzaChuZXdUYXNrKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdER1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdENvbXBsZXRlXCIpLmNoZWNrZWQ7XG4gICAgbGV0IGFtZW5kZWRUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgIGxldCBhY3RpdmVDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKVswXTtcbiAgICBjb25zdCBpID0gYWN0aXZlQ2FyZC5pZC5zdWJzdHJpbmcoNCk7XG4gICAgcHJvamVjdEdyb3VwLmFjdGl2ZVByb2plY3QubGlzdC5zcGxpY2UoaSwgMSwgYW1lbmRlZFRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaSkgPT4ge1xuICAgIHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0Lmxpc3Quc3BsaWNlKGksIDEpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIFRhc2ssXG4gICAgY3JlYXRlVGFzayxcbiAgICBlZGl0VGFzayxcbiAgICBkZWxldGVUYXNrLFxuICB9O1xufSkoKTtcblxuY29uc3QgbWFuYWdlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TGlzdFwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IHByb2plY3RMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tMaXN0XCIpO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gdGFza0xpc3QucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuICBjb25zdCBjbG9zZUFkZFRhc2tGb3JtQnV0dG9uID0gdGFza0xpc3QucXVlcnlTZWxlY3RvcihcIiNjbG9zZUFkZFRhc2tGb3JtXCIpO1xuICBjb25zdCBjbG9zZUVkaXRUYXNrRm9ybUJ1dHRvbiA9IHRhc2tMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VFZGl0VGFza0Zvcm1cIik7XG5cbiAgY29uc3Qgb3BlbkFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfTtcblxuICBjb25zdCBjbG9zZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5FZGl0VGFza0Zvcm0gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdC5saXN0W2luZGV4XTtcbiAgICBjb25zdCBhY3RpdmVDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIgKyBpbmRleCk7XG4gICAgYWN0aXZlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRpdGxlXCIpLnZhbHVlID0gc2VsZWN0ZWRUYXNrLnRpdGxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERlc2NyaXB0aW9uXCIpLnZhbHVlID0gc2VsZWN0ZWRUYXNrLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdER1ZURhdGVcIikudmFsdWUgPSBzZWxlY3RlZFRhc2suZHVlRGF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcmlvcml0eVwiKS52YWx1ZSA9IHNlbGVjdGVkVGFzay5wcmlvcml0eTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRDb21wbGV0ZVwiKS5jaGVja2VkID0gc2VsZWN0ZWRUYXNrLmNvbXBsZXRlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VFZGl0VGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IHByb21wdFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IE5hbWVcIik7XG4gICAgYWRkUHJvamVjdChuYW1lKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0R3JvdXAuUHJvamVjdChuYW1lKTtcbiAgICBwcm9qZWN0R3JvdXAucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgdXBkYXRlUHJvamVjdERpc3BsYXkoKTtcbiAgfTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvbXB0UHJvamVjdCk7XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEdyb3VwLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0R3JvdXAucHJvamVjdHNbaV0ubmFtZTtcbiAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBkaXNwbGF5QWN0aXZlVGFza3MuYmluZChudWxsLCBwcm9qZWN0R3JvdXAucHJvamVjdHNbaV0sIHByb2plY3RCdXR0b24pXG4gICAgICApO1xuICAgICAgaWYgKHByb2plY3RHcm91cC5wcm9qZWN0c1tpXS5uYW1lID09PSBwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdC5uYW1lKSB7XG4gICAgICAgIGRpc3BsYXlBY3RpdmVUYXNrcyhwcm9qZWN0R3JvdXAucHJvamVjdHNbaV0sIHByb2plY3RCdXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrRGlzcGxheSA9IChUYXNrcywgaSkgPT4ge1xuICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgbmV3Q2FyZC5pZCA9IFwiY2FyZFwiICsgaTtcbiAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBUYXNrc1tpXS50aXRsZTtcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRUaXRsZVwiKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgbGV0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IFRhc2tzW2ldLmR1ZURhdGU7XG4gICAgY2FyZERhdGUuY2xhc3NMaXN0LmFkZChcImNhcmREYXRlXCIpO1xuICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoY2FyZERhdGUpO1xuICAgIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEljb24uc3JjID0gcGVuSWNvbjtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdEljb25cIik7XG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0VGFza0Zvcm0uYmluZChudWxsLCBpKSk7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gYmluSWNvbjtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVJY29uXCIpO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2suYmluZChudWxsLCBpKSk7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5QWN0aXZlVGFza3MgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0ID0gYTtcbiAgICB9XG4gICAgaWYgKGIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzLml0ZW0oaSkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RcIik7XG4gICAgICB9XG4gICAgICBiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0XCIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdC5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB1cGRhdGVUYXNrRGlzcGxheShwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdC5saXN0LCBpKTtcbiAgICB9XG4gICAgcHJvamVjdEdyb3VwLnBvcHVsYXRlU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgdGFza0dyb3VwLmNyZWF0ZVRhc2soKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheShcbiAgICAgIHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0Lmxpc3QsXG4gICAgICBwcm9qZWN0R3JvdXAuYWN0aXZlUHJvamVjdC5saXN0Lmxlbmd0aCAtIDFcbiAgICApO1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICBwcm9qZWN0R3JvdXAucG9wdWxhdGVTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICB0YXNrR3JvdXAuZWRpdFRhc2soaW5kZXgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0Lmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KHByb2plY3RHcm91cC5hY3RpdmVQcm9qZWN0Lmxpc3QsIGkpO1xuICAgIH1cbiAgICBjbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgIHByb2plY3RHcm91cC5wb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xuICAgIHRhc2tHcm91cC5kZWxldGVUYXNrKCk7XG4gICAgZGlzcGxheUFjdGl2ZVRhc2tzKCk7XG4gIH07XG5cbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZFRhc2tGb3JtKTtcbiAgY2xvc2VBZGRUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VBZGRUYXNrRm9ybSk7XG4gIGNsb3NlRWRpdFRhc2tGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUVkaXRUYXNrRm9ybSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRUYXNrKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0VGFzayk7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5hY3RpdmVQcm9qZWN0KSB7XG4gICAgcHJvamVjdEdyb3VwLmdldFByb2plY3RzKCk7XG4gICAgdXBkYXRlUHJvamVjdERpc3BsYXkoKTtcbiAgICBkaXNwbGF5QWN0aXZlVGFza3MoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRQcm9qZWN0KFwiRGVmYXVsdFwiKTtcbiAgfVxufSkoKTtcbiJdLCJuYW1lcyI6WyJwZW5JY29uIiwiYmluSWNvbiIsInByb2plY3RHcm91cCIsIlByb2plY3QiLCJuYW1lIiwibGlzdCIsImFjdGl2ZVByb2plY3QiLCJwcm9qZWN0cyIsInBvcHVsYXRlU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvamVjdHMiLCJwYXJzZSIsImdldEl0ZW0iLCJ0YXNrR3JvdXAiLCJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlIiwiY3JlYXRlVGFzayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJuZXdUYXNrIiwicHVzaCIsImVkaXRUYXNrIiwiYW1lbmRlZFRhc2siLCJhY3RpdmVDYXJkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJpZCIsInN1YnN0cmluZyIsInNwbGljZSIsImRlbGV0ZVRhc2siLCJtYW5hZ2VyIiwicHJvamVjdExpc3QiLCJxdWVyeVNlbGVjdG9yIiwiYWRkUHJvamVjdEJ1dHRvbiIsInRhc2tMaXN0IiwiYWRkVGFza0J1dHRvbiIsImNsb3NlQWRkVGFza0Zvcm1CdXR0b24iLCJjbG9zZUVkaXRUYXNrRm9ybUJ1dHRvbiIsIm9wZW5BZGRUYXNrRm9ybSIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlQWRkVGFza0Zvcm0iLCJvcGVuRWRpdFRhc2tGb3JtIiwiaW5kZXgiLCJzZWxlY3RlZFRhc2siLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZUVkaXRUYXNrRm9ybSIsInByb21wdFByb2plY3QiLCJwcm9tcHQiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdCIsInVwZGF0ZVByb2plY3REaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsImxlbmd0aCIsInByb2plY3RCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlBY3RpdmVUYXNrcyIsImJpbmQiLCJ1cGRhdGVUYXNrRGlzcGxheSIsIlRhc2tzIiwibmV3Q2FyZCIsImNhcmRUaXRsZSIsImNhcmREYXRlIiwiZWRpdEljb24iLCJJbWFnZSIsInNyYyIsImRlbGV0ZUljb24iLCJhIiwiYiIsInVuZGVmaW5lZCIsIml0ZW0iLCJhZGRUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==