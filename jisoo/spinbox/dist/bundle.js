webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _spinboxComponent = __webpack_require__(1);

	var _spinboxComponent2 = _interopRequireDefault(_spinboxComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var spinbox = new _spinboxComponent2.default();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spinboxModel = __webpack_require__(2);

	var _spinboxModel2 = _interopRequireDefault(_spinboxModel);

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SpinboxComponent = (function () {
	  function SpinboxComponent() {
	    var spinboxClass = arguments.length <= 0 || arguments[0] === undefined ? 'spinbox' : arguments[0];

	    _classCallCheck(this, SpinboxComponent);

	    console.log(spinboxClass);
	    this.model = new _spinboxModel2.default();

	    this.spinboxClass = spinboxClass;

	    this.elements = [];

	    this._assignElements();
	    this._assignEvents();
	    this._initData();
	  }

	  _createClass(SpinboxComponent, [{
	    key: '_assignElements',
	    value: function _assignElements() {
	      var wrapperElement = (0, _jquery2.default)('.' + this.spinboxClass);

	      this.elements.input = wrapperElement.find('input');
	      this.elements.upButton = wrapperElement.find('.btn-up');
	      this.elements.downButton = wrapperElement.find('.btn-down');
	    }
	  }, {
	    key: '_assignEvents',
	    value: function _assignEvents() {
	      var _this = this;

	      this.elements.input.focusout(function () {
	        return _this._onFocusOutInput();
	      });
	      this.elements.upButton.click(function () {
	        return _this._onClickUp();
	      });
	      this.elements.downButton.click(function () {
	        return _this._onClickDown();
	      });
	    }
	  }, {
	    key: '_initData',
	    value: function _initData() {
	      this._updateNumber();
	    }
	  }, {
	    key: '_onFocusOutInput',
	    value: function _onFocusOutInput() {
	      var num = this.elements.input.val().replace(/[^0-9]/g, "");

	      this.model.setNum(num);
	      this._updateNumber();
	    }
	  }, {
	    key: '_onClickUp',
	    value: function _onClickUp() {
	      this.model.increaseNum();
	      this._updateNumber();
	    }
	  }, {
	    key: '_onClickDown',
	    value: function _onClickDown() {
	      this.model.decreaseNum();
	      this._updateNumber();
	    }
	  }, {
	    key: '_updateNumber',
	    value: function _updateNumber() {
	      this.elements.input.val(this.model.getNum());
	    }
	  }]);

	  return SpinboxComponent;
	})();

	exports.default = SpinboxComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spinbox = (function () {
	  function Spinbox() {
	    var num = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];

	    _classCallCheck(this, Spinbox);

	    this.num = num;
	  }

	  _createClass(Spinbox, [{
	    key: 'increaseNum',
	    value: function increaseNum() {
	      this.num++;
	    }
	  }, {
	    key: 'decreaseNum',
	    value: function decreaseNum() {
	      this.num--;
	    }
	  }, {
	    key: 'setNum',
	    value: function setNum(num) {
	      this.num = parseInt(num, 10);
	    }
	  }, {
	    key: 'getNum',
	    value: function getNum() {
	      return this.num;
	    }
	  }]);

	  return Spinbox;
	})();

	exports.default = Spinbox;

/***/ }
]);