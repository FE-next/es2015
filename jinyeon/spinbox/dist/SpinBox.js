/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _SpinBoxModel = __webpack_require__(1);

	var _SpinBoxModel2 = _interopRequireDefault(_SpinBoxModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * written by Jinyeon.Choi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SpinBox = (function (_Model) {
	    _inherits(SpinBox, _Model);

	    function SpinBox() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? '_spinbox' : arguments[0];

	        _classCallCheck(this, SpinBox);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpinBox).call(this, id));

	        _this._initProp(id);
	        _this._initEvent();
	        return _this;
	    }

	    _createClass(SpinBox, [{
	        key: '_initProp',
	        value: function _initProp(id) {
	            this.el = document.getElementById(id);
	        }
	    }, {
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this2 = this;

	            var setTimer = null;

	            this.el.addEventListener('mousedown', function (event) {
	                if (event.target && event.target.nodeName == 'BUTTON') {
	                    if (event.target.dataset['btn'] === 'up') {
	                        setTimer = setInterval(function () {
	                            _this2.increase();
	                            _this2.setNum(_this2.checkVal(_this2.num));
	                        }, 80);
	                    } else if (event.target.dataset['btn'] === 'down') {
	                        setTimer = setInterval(function () {
	                            _this2.decrease();
	                            _this2.setNum(_this2.checkVal(_this2.num));
	                        }, 80);
	                    }
	                }
	            }, false);

	            document.addEventListener('mouseup', function () {
	                clearInterval(setTimer);
	            }, false);

	            this.el.addEventListener('focusout', function (event) {
	                if (event.target && event.target.nodeName == 'INPUT') {
	                    _this2.setNum(_this2.checkVal(Number(event.target.value)));
	                }
	            });
	        }
	    }, {
	        key: 'checkVal',
	        value: function checkVal(num) {
	            if (isNaN(num)) {
	                return this.defaultVal;
	            }
	            return this.checkLimit(num);
	        }
	    }, {
	        key: 'checkLimit',
	        value: function checkLimit(num) {
	            if (num > this.max) {
	                return this.max;
	            } else if (num < this.min) {
	                return this.min;
	            }
	            return num;
	        }
	    }]);

	    return SpinBox;
	})(_SpinBoxModel2.default);

	window.Spinbox = SpinBox;
	new Spinbox();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by chy58 on 2016-01-04.
	 */
	var defaultVal = 200;

	var Model = (function () {
	    function Model(id) {
	        _classCallCheck(this, Model);

	        this.max = 300;
	        this.min = 100;
	        this.add = 1;
	        this.minus = -1;
	        this.elInput = document.getElementById(id).getElementsByTagName('input')[0];
	        this.elInput.value = this.defaultVal = this.num = defaultVal;
	    }

	    _createClass(Model, [{
	        key: 'getNum',
	        value: function getNum() {
	            return this.num;
	        }
	    }, {
	        key: 'setNum',
	        value: function setNum(num) {
	            this.num = num;
	            this.elInput.value = num;
	        }
	    }, {
	        key: 'getMax',
	        value: function getMax() {
	            return this.max;
	        }
	    }, {
	        key: 'setMax',
	        value: function setMax(max) {
	            this.max = max;
	        }
	    }, {
	        key: 'getMin',
	        value: function getMin() {
	            return this.min;
	        }
	    }, {
	        key: 'setMin',
	        value: function setMin(min) {
	            this.min = min;
	        }
	    }, {
	        key: 'increase',
	        value: function increase() {
	            this.num += this.add;
	        }
	    }, {
	        key: 'decrease',
	        value: function decrease() {
	            this.num += this.minus;
	        }
	    }]);

	    return Model;
	})();

	exports.default = Model;

/***/ }
/******/ ]);