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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * written by Jinyeon.Choi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

	var _SpinBoxView = __webpack_require__(1);

	var _SpinBoxView2 = _interopRequireDefault(_SpinBoxView);

	var _SpinBoxModel = __webpack_require__(2);

	var _SpinBoxModel2 = _interopRequireDefault(_SpinBoxModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SpinBox = (function () {
	    function SpinBox() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? '_spinbox' : arguments[0];

	        _classCallCheck(this, SpinBox);

	        this._initProp(id);
	        this._initEvent();
	    }

	    _createClass(SpinBox, [{
	        key: '_initProp',
	        value: function _initProp() {
	            var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	            this.el = document.getElementById(id);
	            this.model = new _SpinBoxModel2.default();
	            this.view = new _SpinBoxView2.default(this);
	            this.view.initInputVal();
	        }
	    }, {
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this = this;

	            var setTimer = null;

	            this.el.addEventListener('mousedown', function (event) {
	                if (event.target && event.target.nodeName == 'BUTTON') {
	                    if (event.target.dataset['btn'] === 'up') {
	                        setTimer = setInterval(function () {
	                            return _this.view.plus();
	                        }, 80);
	                    } else if (event.target.dataset['btn'] === 'down') {
	                        setTimer = setInterval(function () {
	                            return _this.view.minus();
	                        }, 80);
	                    }
	                }
	            }, false);

	            document.addEventListener('mouseup', function () {
	                clearInterval(setTimer);
	            }, false);

	            this.el.addEventListener('focusout', function (event) {
	                if (event.target && event.target.nodeName == 'INPUT') {
	                    var inputVal = _this.view.checkValue(Number(event.target.value));
	                    _this.view.setInputVal(inputVal);
	                }
	            });
	        }
	    }, {
	        key: 'setMax',
	        value: function setMax(max) {
	            this.model.setMax(max);
	        }
	    }, {
	        key: 'setMin',
	        value: function setMin(min) {
	            this.model.setMin(min);
	        }
	    }, {
	        key: 'setAdd',
	        value: function setAdd(num) {
	            this.model.setAdd(num);
	        }
	    }, {
	        key: 'setMinus',
	        value: function setMinus(num) {
	            this.model.setMinus(num);
	        }
	    }, {
	        key: 'setInit',
	        value: function setInit(num) {
	            this.model.setNum(num);
	        }
	    }]);

	    return SpinBox;
	})();

	new SpinBox();

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

	var View = (function () {
	    function View(core) {
	        _classCallCheck(this, View);

	        this.core = core;
	        this.el = this.core.el.querySelector('input');
	    }

	    _createClass(View, [{
	        key: 'initInputVal',
	        value: function initInputVal() {
	            this.el.value = this.core.model.getNum();
	        }
	    }, {
	        key: 'setInputVal',
	        value: function setInputVal(val) {
	            this.core.model.setNum(val);
	            this.el.value = val;
	        }
	    }, {
	        key: 'plus',
	        value: function plus() {
	            var val = this.core.model.getNum() + this.core.model.getIncreaseNum();
	            this.setInputVal(this.checkLimit(val));
	        }
	    }, {
	        key: 'minus',
	        value: function minus() {
	            var val = this.core.model.getNum() + this.core.model.getDecreaseNum();
	            this.setInputVal(this.checkLimit(val));
	        }
	    }, {
	        key: 'checkValue',
	        value: function checkValue(val) {
	            if (isNaN(val)) {
	                return 200;
	            }
	            return this.checkLimit(val);
	        }
	    }, {
	        key: 'checkLimit',
	        value: function checkLimit(val) {
	            var max = this.core.model.getMax();
	            var min = this.core.model.getMin();
	            if (val > max) {
	                return max;
	            } else if (val < min) {
	                return min;
	            }
	            return val;
	        }
	    }]);

	    return View;
	})();

	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by chy58 on 2016-01-04.
	 */

	var Model = (function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.num = 200;
	        this.max = 300;
	        this.min = 100;
	        this.add = 1;
	        this.minus = -1;
	    }

	    _createClass(Model, [{
	        key: "getNum",
	        value: function getNum() {
	            return this.num;
	        }
	    }, {
	        key: "setNum",
	        value: function setNum(num) {
	            this.num = num;
	        }
	    }, {
	        key: "getMax",
	        value: function getMax() {
	            return this.max;
	        }
	    }, {
	        key: "setMax",
	        value: function setMax(max) {
	            this.max = max;
	        }
	    }, {
	        key: "getMin",
	        value: function getMin() {
	            return this.min;
	        }
	    }, {
	        key: "setMin",
	        value: function setMin(min) {
	            this.min = min;
	        }
	    }, {
	        key: "getIncreaseNum",
	        value: function getIncreaseNum() {
	            return this.add;
	        }
	    }, {
	        key: "setIncreaseNum",
	        value: function setIncreaseNum(num) {
	            this.add = num;
	        }
	    }, {
	        key: "getDecreaseNum",
	        value: function getDecreaseNum() {
	            return this.minus;
	        }
	    }, {
	        key: "setDecreaseNum",
	        value: function setDecreaseNum(num) {
	            return this.minus = num;
	        }
	    }]);

	    return Model;
	})();

	exports.default = Model;

/***/ }
/******/ ]);