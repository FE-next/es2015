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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _model = __webpack_require__(2);
	
	var _model2 = _interopRequireDefault(_model);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PI = {
	    test: 123
	};
	
	PI.test = 321;
	
	var SpinBox = (function () {
	    function SpinBox(options) {
	        _classCallCheck(this, SpinBox);
	
	        this.model = new _model2.default();
	        this._setOptions(options);
	        this._assignElements();
	        this._setEvents();
	        this._setModelEvents();
	    }
	
	    _createClass(SpinBox, [{
	        key: '_setOptions',
	        value: function _setOptions(options) {
	            var defaultOptions = {
	                el: null,
	                step: 1,
	                initNum: 200
	            };
	
	            options = Object.assign(defaultOptions, options);
	
	            this._el = options.el;
	
	            this.model.set('step', options.step).set('num', options.initNum);
	        }
	    }, {
	        key: '_assignElements',
	        value: function _assignElements() {
	            this._elInput = this._el.querySelector('[data-input]');
	            this._elUpBtn = this._el.querySelector('[data-up-btn]');
	            this._elDownBtn = this._el.querySelector('[data-down-btn]');
	        }
	    }, {
	        key: '_createInterval',
	        value: function _createInterval(cb) {
	            var _this = this;
	
	            this._timer = setTimeout(function () {
	                _this._intervalTimer = setInterval(function () {
	                    cb.apply(_this);
	                }, 100);
	            }, 300);
	        }
	    }, {
	        key: '_setEvents',
	        value: function _setEvents() {
	            var _this2 = this;
	
	            this._elUpBtn.addEventListener('mousedown', function () {
	                _this2.model.increase();
	                _this2._createInterval(function () {
	                    _this2.model.increase();
	                });
	            });
	
	            this._elDownBtn.addEventListener('mousedown', function () {
	                _this2.model.decrease();
	                _this2._createInterval(function () {
	                    _this2.model.decrease();
	                });
	            });
	
	            document.addEventListener('mouseup', function () {
	                clearTimeout(_this2._timer);
	                clearInterval(_this2._intervalTimer);
	            });
	        }
	    }, {
	        key: '_setModelEvents',
	        value: function _setModelEvents() {
	            var _this3 = this;
	
	            this.model.on('change', function () {
	                _this3._elInput.value = _this3.model.get('num');
	            }).trigger('change');
	        }
	    }]);
	
	    return SpinBox;
	})();
	
	window.SpinBox = SpinBox;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _EventEmitter2 = __webpack_require__(3);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Model = (function (_EventEmitter) {
	    _inherits(Model, _EventEmitter);
	
	    function Model() {
	        _classCallCheck(this, Model);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this));
	
	        _this.step = null;
	        _this.num = null;
	        return _this;
	    }
	
	    _createClass(Model, [{
	        key: 'set',
	        value: function set(type, val) {
	            this[type] = val;
	            this.trigger('change');
	            return this;
	        }
	    }, {
	        key: 'get',
	        value: function get(type) {
	            return this[type];
	        }
	    }, {
	        key: 'increase',
	        value: function increase() {
	            this.set('num', this.get('num') + this.step);
	        }
	    }, {
	        key: 'decrease',
	        value: function decrease() {
	            this.set('num', this.get('num') - this.step);
	        }
	    }]);
	
	    return Model;
	})(_EventEmitter3.default);
	
	exports.default = Model;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var isFunction = function isFunction(obj) {
	    return typeof obj == 'function' || false;
	};
	
	var EventEmitter = (function () {
	    function EventEmitter() {
	        _classCallCheck(this, EventEmitter);
	
	        this.listeners = new Map();
	    }
	
	    _createClass(EventEmitter, [{
	        key: 'addListener',
	        value: function addListener(label, callback) {
	            this.listeners.has(label) || this.listeners.set(label, []);
	            this.listeners.get(label).push(callback);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(label, callback) {
	            var listeners = this.listeners.get(label),
	                index = undefined;
	
	            if (listeners && listeners.length) {
	                index = listeners.reduce(function (i, listener, index) {
	                    return isFunction(listener) && listener === callback ? i = index : i;
	                }, -1);
	
	                if (index > -1) {
	                    listeners.splice(index, 1);
	                    this.listeners.set(label, listeners);
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'emit',
	        value: function emit(label) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }
	
	            var listeners = this.listeners.get(label);
	
	            if (listeners && listeners.length) {
	                listeners.forEach(function (listener) {
	                    listener.apply(undefined, args);
	                });
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger() {
	            this.emit.apply(this, arguments);
	            return this;
	        }
	    }, {
	        key: 'on',
	        value: function on() {
	            this.addListener.apply(this, arguments);
	            return this;
	        }
	    }, {
	        key: 'off',
	        value: function off() {
	            this.removeListener.apply(this, arguments);
	            return this;
	        }
	    }]);
	
	    return EventEmitter;
	})();
	
	exports.default = EventEmitter;

/***/ }
/******/ ]);
//# sourceMappingURL=spinbox.js.map