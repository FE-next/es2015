/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _spinboxModel = __webpack_require__(2);
	
	var _spinboxModel2 = _interopRequireDefault(_spinboxModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Spinbox = function () {
	    function Spinbox(config) {
	        _classCallCheck(this, Spinbox);
	
	        this.el = config.el;
	        this.model = new _spinboxModel2.default(config);
	        this._assignElements();
	        this._attachEvents();
	        this._updateInputValue();
	    }
	
	    _createClass(Spinbox, [{
	        key: '_assignElements',
	        value: function _assignElements() {
	            this._input = this.el.querySelector('#_textArea');
	            this._btnUp = this.el.querySelector('#_up');
	            this._btnDown = this.el.querySelector('#_down');
	        }
	    }, {
	        key: '_attachEvents',
	        value: function _attachEvents() {
	            this._input.addEventListener('change', this._onChange.bind(this));
	            this._btnUp.addEventListener('click', this._onClickUp.bind(this));
	            this._btnDown.addEventListener('click', this._onClickDown.bind(this));
	            this.model.on('change', this._updateInputValue.bind(this));
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            var val = e.target.value;
	
	            this.model.set(parseInt(val, 10));
	            //this._updateInputValue();
	        }
	    }, {
	        key: '_onClickUp',
	        value: function _onClickUp(e) {
	            this.model.increase();
	            //this._updateInputValue();
	        }
	    }, {
	        key: '_onClickDown',
	        value: function _onClickDown(e) {
	            this.model.decrease();
	            //this._updateInputValue();
	        }
	    }, {
	        key: '_updateInputValue',
	        value: function _updateInputValue() {
	            this._input.value = this.model.get();
	        }
	    }]);
	
	    return Spinbox;
	}();
	
	window.Spinbox = Spinbox;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Model = function () {
	    function Model(config) {
	        _classCallCheck(this, Model);
	
	        this._num = config.num || 200;
	    }
	
	    _createClass(Model, [{
	        key: "set",
	        value: function set(num) {
	            this._num = num;
	        }
	    }, {
	        key: "get",
	        value: function get() {
	            return this._num;
	        }
	    }, {
	        key: "increase",
	        value: function increase() {
	            this._num++;
	        }
	    }, {
	        key: "decrease",
	        value: function decrease() {
	            this._num--;
	        }
	    }]);
	
	    return Model;
	}();
	
	exports.default = Model;

/***/ }
/******/ ]);
//# sourceMappingURL=spinbox.js.map