webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #565656; }\r\n\r\n.bold {\r\n  font-weight: 800; }\r\n\r\n.content {\r\n  max-width: 970px;\r\n  padding: 0 20px;\r\n  overflow: hidden;\r\n  margin: 0 auto; }\r\n  .content .top {\r\n    height: 60px;\r\n    margin: 0 auto;\r\n    margin-top: 30px; }\r\n    .content .top .logo {\r\n      height: 100%;\r\n      float: left; }\r\n      .content .top .logo img {\r\n        height: 100%; }\r\n  .content .slogan {\r\n    font-weight: 300;\r\n    padding-top: 70px;\r\n    color: #565656;\r\n    padding-bottom: 30px;\r\n    font-size: 34px;\r\n    text-align: center;\r\n    transition: all .8s;\r\n    opacity: 1; }\r\n    .content .slogan.closed {\r\n      -webkit-transform: translate3d(0, -150%, 0);\r\n              transform: translate3d(0, -150%, 0);\r\n      opacity: 0; }\r\n\r\n.search-bar {\r\n  padding: 30px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  transition: all .8s;\r\n  float: left;\r\n  width: 100%; }\r\n  .search-bar.topBar {\r\n    margin-top: -150px; }\r\n\r\n.input-search {\r\n  font-family: 'Open Sans', sans-serif;\r\n  padding: 30px 40px;\r\n  border-radius: 30px;\r\n  height: 20px;\r\n  border: solid 1px #a0a0a0;\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  margin-right: 5%;\r\n  font-size: 24px;\r\n  color: #565656; }\r\n  .input-search::-webkit-input-placeholder {\r\n    /* Chrome */\r\n    color: #dadada; }\r\n  .input-search:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    color: #dadada; }\r\n  .input-search::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: #dadada;\r\n    opacity: 1; }\r\n  .input-search:-moz-placeholder {\r\n    /* Firefox 4 - 18 */\r\n    color: #dadada;\r\n    opacity: 1; }\r\n\r\ntextarea:focus, input:focus, button:focus {\r\n  outline: none; }\r\n\r\n.menu {\r\n  float: right; }\r\n\r\n.bt {\r\n  font-family: 'Open Sans', sans-serif;\r\n  border-radius: 30px;\r\n  height: 60px;\r\n  box-sizing: border-box;\r\n  width: 20%;\r\n  font-size: 16px;\r\n  border-style: none;\r\n  color: #fff;\r\n  background-color: #ff0c0c;\r\n  font-weight: 800; }\r\n\r\n.inline {\r\n  float: left; }\r\n\r\n.list-movies .item {\r\n  padding: 30px 50px;\r\n  overflow: hidden; }\r\n  .list-movies .item .img {\r\n    width: 80px;\r\n    height: 120px;\r\n    float: left; }\r\n    .list-movies .item .img img {\r\n      width: 100%; }\r\n  .list-movies .item .infos {\r\n    padding-top: 20px;\r\n    padding-left: 40px;\r\n    overflow: hidden; }\r\n    .list-movies .item .infos .title {\r\n      font-size: 1.6em;\r\n      font-weight: 800; }\r\n    .list-movies .item .infos .score .star {\r\n      float: left; }\r\n    .list-movies .item .infos .score img {\r\n      width: 30px; }\r\n    .list-movies .item .infos .year {\r\n      font-size: .6em;\r\n      font-weight: 800;\r\n      color: #909090; }\r\n  .list-movies .item .separator {\r\n    height: 1px;\r\n    background-color: #ddd;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    float: left;\r\n    margin-top: 50px; }\r\n\r\n.bt-menu {\r\n  float: left;\r\n  margin-right: 20px; }\r\n  .bt-menu .bt-title {\r\n    margin-top: 5px;\r\n    color: #ff0c0c;\r\n    text-align: center;\r\n    font-size: .8em; }\r\n\r\n.bt-icon {\r\n  margin: 0 auto;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 19px;\r\n  border: solid 4px #ff0c0c;\r\n  transition: width .8s;\r\n  overflow: hidden;\r\n  margin-top: 10px; }\r\n\r\n.bt-add {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 19px;\r\n  border: solid 4px #ff0c0c;\r\n  transition: width .8s;\r\n  overflow: hidden;\r\n  margin-top: 10px; }\r\n  .bt-add:hover {\r\n    width: 160px; }\r\n  .bt-add:hover .icon-add {\r\n    margin-left: -30px; }\r\n  .bt-add .icon-add {\r\n    float: left;\r\n    height: 30px;\r\n    width: 30px;\r\n    transition: all .5s; }\r\n  .bt-add .icon-star {\r\n    float: left;\r\n    height: 30px;\r\n    width: 30px;\r\n    position: relative; }\r\n    .bt-add .icon-star .stroke {\r\n      width: 100%;\r\n      opacity: .5;\r\n      position: absolute;\r\n      z-index: 1; }\r\n      .bt-add .icon-star .stroke:hover + .fill {\r\n        opacity: 1; }\r\n    .bt-add .icon-star .fill {\r\n      opacity: 0;\r\n      width: 100%; }\r\n      .bt-add .icon-star .fill img {\r\n        width: 150px;\r\n        float: left; }\r\n\r\n.number {\r\n  font-size: 30px; }\r\n\r\n.footer {\r\n  background-color: #00000060;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  padding-top: 10px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  width: 100%;\r\n  position: fixed;\r\n  height: 30px;\r\n  bottom: 0; }\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map