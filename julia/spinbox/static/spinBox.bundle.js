(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Valuation2 = require('./Valuation');

var _Valuation3 = _interopRequireDefault(_Valuation2);

var SpinBox = (function (_Valuation) {
    _inherits(SpinBox, _Valuation);

    function SpinBox(wapperId, option) {
        _classCallCheck(this, SpinBox);

        _get(Object.getPrototypeOf(SpinBox.prototype), 'constructor', this).call(this, wapperId, option);

        var welWrapper = document.getElementById(wapperId);
        this._welTextBox = welWrapper.getElementsByClassName('textBox')[0];
        this._welBtnUp = welWrapper.getElementsByClassName('btn_up')[0];
        this._welBtnDown = welWrapper.getElementsByClassName('btn_down')[0];

        this._attachEvent();
        this.update();
    }

    _createClass(SpinBox, [{
        key: '_attachEvent',
        value: function _attachEvent() {
            this._welTextBox.addEventListener("change", this._onChange.bind(this));
            this._welBtnUp.addEventListener("click", this._onClickUp.bind(this));
            this._welBtnDown.addEventListener("click", this._onClickDown.bind(this));
        }
    }, {
        key: '_onChange',
        value: function _onChange(event) {
            var value = event.target.value;
            this.update(value);
        }
    }, {
        key: '_onClickUp',
        value: function _onClickUp(event) {
            var value = this._increase();
            this.update(value);
        }
    }, {
        key: '_onClickDown',
        value: function _onClickDown(event) {
            var value = this._decrease();
            this.update(value);
        }
    }, {
        key: '_increase',
        value: function _increase() {
            var value = this.getValue();
            return ++value;
        }
    }, {
        key: '_decrease',
        value: function _decrease() {
            var value = this.getValue();
            return --value;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return parseInt(this._welTextBox.value, 10);
        }
    }, {
        key: 'update',
        value: function update(value) {
            this._welTextBox.value = this.getValidateValue(value);
        }
    }]);

    return SpinBox;
})(_Valuation3['default']);

exports['default'] = SpinBox;
module.exports = exports['default'];

},{"./Valuation":2}],2:[function(require,module,exports){
/**
 * 유효성 검사
 * 1. 문자열 제거
 * 2. 최소값부터 최대값까지 체크
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Valuation = (function () {
    function Valuation(option) {
        _classCallCheck(this, Valuation);

        this._nMaximum = 200;
        this._nMinimum = 0;
        this._defaultValue = 0;
    }

    _createClass(Valuation, [{
        key: '_removeString',
        value: function _removeString(value) {
            var oRegExp = new RegExp(/[^0-9]/g);

            //빈값 처리
            value = value || '0';
            return value.replace(oRegExp, '');
        }

        /**
         * 최대, 최소값 유효성검사
         */
    }, {
        key: '_validate',
        value: function _validate(value) {
            var nMaximum = this._nMaximum,
                nMinimum = this._nMinimum;

            if (value < nMinimum) {
                value = nMinimum;
            }

            if (value > nMaximum) {
                value = nMaximum;
            }

            return value;
        }
    }, {
        key: 'getValidateValue',
        value: function getValidateValue(value) {
            if (isNaN(value)) {
                value = this._removeString(value);
            }

            return this._validate(value);
        }
    }]);

    return Valuation;
})();

exports['default'] = Valuation;

//module.exports = Valuation;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SpinBox = require('./SpinBox');

var _SpinBox2 = _interopRequireDefault(_SpinBox);

var spinBox = new _SpinBox2['default']('spinbox');

},{"./SpinBox":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9lczYtc3R1ZHkvc3BpbmJveC9zcmMvU3BpbkJveC5qcyIsIkQ6L2VzNi1zdHVkeS9zcGluYm94L3NyYy9WYWx1YXRpb24uanMiLCJEOi9lczYtc3R1ZHkvc3BpbmJveC9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkNBc0IsYUFBYTs7OztJQUU3QixPQUFPO2NBQVAsT0FBTzs7QUFDRSxhQURULE9BQU8sQ0FDRyxRQUFRLEVBQUUsTUFBTSxFQUFFOzhCQUQ1QixPQUFPOztBQUVMLG1DQUZGLE9BQU8sNkNBRUMsUUFBUSxFQUFFLE1BQU0sRUFBRTs7QUFFeEIsWUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxZQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxZQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxZQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFcEUsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtLQUNoQjs7aUJBWEMsT0FBTzs7ZUFhRyx3QkFBRztBQUNYLGdCQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLGdCQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9B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QUFTLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVmFsdWF0aW9uIGZyb20gJy4vVmFsdWF0aW9uJztcclxuXHJcbmNsYXNzIFNwaW5Cb3ggZXh0ZW5kcyBWYWx1YXRpb257XHJcbiAgICBjb25zdHJ1Y3Rvcih3YXBwZXJJZCwgb3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIod2FwcGVySWQsIG9wdGlvbik7XHJcblxyXG4gICAgICAgIHZhciB3ZWxXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2FwcGVySWQpO1xyXG4gICAgICAgIHRoaXMuX3dlbFRleHRCb3ggPSB3ZWxXcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRCb3gnKVswXTtcclxuICAgICAgICB0aGlzLl93ZWxCdG5VcCA9IHdlbFdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuX3VwJylbMF07XHJcbiAgICAgICAgdGhpcy5fd2VsQnRuRG93biA9IHdlbFdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuX2Rvd24nKVswXTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXR0YWNoRXZlbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgX2F0dGFjaEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuX3dlbFRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl93ZWxCdG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGlja1VwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX3dlbEJ0bkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX29uQ2xpY2tEb3duLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2xpY2tVcChldmVudCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2luY3JlYXNlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNsaWNrRG93bihldmVudCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2RlY3JlYXNlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbmNyZWFzZSgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuICsrdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlY3JlYXNlKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICByZXR1cm4gLS12YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fd2VsVGV4dEJveC52YWx1ZSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3dlbFRleHRCb3gudmFsdWUgPSB0aGlzLmdldFZhbGlkYXRlVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGluQm94OyIsIi8qKlxyXG4gKiDsnKDtmqjshLEg6rKA7IKsXHJcbiAqIDEuIOusuOyekOyXtCDsoJzqsbBcclxuICogMi4g7LWc7IaM6rCS67aA7YSwIOy1nOuMgOqwkuq5jOyngCDssrTtgaxcclxuICovXHJcbmNsYXNzIFZhbHVhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9uTWF4aW11bSA9IDIwMDtcclxuICAgICAgICB0aGlzLl9uTWluaW11bSA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVtb3ZlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9SZWdFeHAgPSBuZXcgUmVnRXhwKC9bXjAtOV0vZyk7XHJcblxyXG4gICAgICAgIC8v67mI6rCSIOyymOumrFxyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwgJzAnO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKG9SZWdFeHAsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOy1nOuMgCwg7LWc7IaM6rCSIOycoO2aqOyEseqygOyCrFxyXG4gICAgICovXHJcbiAgICBfdmFsaWRhdGUodmFsdWUpIHtcclxuICAgICAgICB2YXIgbk1heGltdW0gPSB0aGlzLl9uTWF4aW11bSxcclxuICAgICAgICAgICAgbk1pbmltdW0gPSB0aGlzLl9uTWluaW11bTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgbk1pbmltdW0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBuTWluaW11bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA+IG5NYXhpbXVtKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gbk1heGltdW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsaWRhdGVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmKGlzTmFOKHZhbHVlKSl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fcmVtb3ZlU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbHVhdGlvbjtcclxuLy9tb2R1bGUuZXhwb3J0cyA9IFZhbHVhdGlvbjsiLCJpbXBvcnQgU3BpbkJveCBmcm9tICcuL1NwaW5Cb3gnO1xyXG5cclxudmFyIHNwaW5Cb3ggPSBuZXcgU3BpbkJveCgnc3BpbmJveCcpO1xyXG4iXX0=
