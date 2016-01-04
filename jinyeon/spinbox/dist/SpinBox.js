'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
 * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
 * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
 * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
 * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
 * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
 * written by Jinyeon.Choi
 */

var SpinBox = (function () {
    function SpinBox() {
        _classCallCheck(this, SpinBox);

        this.appendElement();
        this.initProp();
        this.initEvent();
        this.initSpinBox();
    }

    _createClass(SpinBox, [{
        key: 'appendElement',
        value: function appendElement() {
            var elNode = document.createElement('div');
            var elSpinBox = '<input type="text" value="" data-spin-input><button data-up-btn >▲</button><button data-down-btn >▼</button>';
            elNode.innerHTML = elSpinBox;
            document.body.appendChild(elNode);
        }
    }, {
        key: 'initProp',
        value: function initProp() {
            this.elInput = document.querySelector('[data-spin-input]');
            this.elUpButton = document.querySelector('[data-up-btn]');
            this.elDownButton = document.querySelector('[data-down-btn]');
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this = this;

            var setUpTimer = null;
            var setDownTimer = null;
            this.elInput.addEventListener('focusout', function (e) {
                var val = Number(_this.elInput.value);
                if (isNaN(val)) {
                    _this.initSpinBox();
                    return;
                }
                _this.limitSpinBox(val);
            });
            this.elUpButton.addEventListener('mousedown', function (e) {
                setUpTimer = setInterval(_this.plusSpinBox.bind(_this), 80);
            });
            this.elUpButton.addEventListener('mouseup', function (e) {
                clearTimeout(setUpTimer);
            });

            this.elDownButton.addEventListener('mousedown', function (e) {
                setDownTimer = setInterval(_this.minusSpinBox.bind(_this), 80);
            });
            this.elDownButton.addEventListener('mouseup', function (e) {
                clearTimeout(setDownTimer);
            });
        }
    }, {
        key: 'initSpinBox',
        value: function initSpinBox() {
            this.elInput.value = 200;
        }
    }, {
        key: 'plusSpinBox',
        value: function plusSpinBox() {
            var val = Number(this.elInput.value) + 1;
            this.limitSpinBox(val);
        }
    }, {
        key: 'minusSpinBox',
        value: function minusSpinBox() {
            var val = Number(this.elInput.value) - 1;
            this.limitSpinBox(val);
        }
    }, {
        key: 'limitSpinBox',
        value: function limitSpinBox(val) {
            if (val > 300) {
                this.elInput.value = 300;
                return false;
            } else if (val < 100) {
                this.elInput.value = 100;
                return false;
            }
            this.elInput.value = val;
            return true;
        }
    }]);

    return SpinBox;
})();
//# sourceMappingURL=SpinBox.js.map
