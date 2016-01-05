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
    function SpinBox(id) {
        _classCallCheck(this, SpinBox);

        this.initProp(id);
        this.initEvent();
        this.initSpinBox();
    }

    _createClass(SpinBox, [{
        key: 'initProp',
        value: function initProp(id) {
            this.el = document.getElementById(id);
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var setTimer = null;

            this.el.addEventListener('mousedown', function (e) {
                if (e.target && e.target.nodeName == 'BUTTON') {
                    if (setTimer !== null) {
                        clearInterval(setTimer);
                    }
                    if (e.target.dataset['btn'] == 'up') {
                        setTimer = setInterval(function () {
                            var elInput = e.target.parentElement.querySelector('input');
                            if (Number(elInput.value) < 300) {
                                elInput.value = Number(elInput.value) + 1;
                            }
                        }, 80);
                    } else {
                        setTimer = setInterval(function () {
                            var elInput = e.target.parentElement.querySelector('input');
                            if (Number(elInput.value) > 100) {
                                elInput.value = Number(elInput.value) - 1;
                            }
                        }, 80);
                    }
                }
            }, false);
            this.el.addEventListener('focusout', function (e) {
                if (e.target && e.target.nodeName == 'INPUT') {
                    var val = Number(e.target.value);
                    if (isNaN(val)) {
                        e.target.value = 200;
                    }
                    if (val >= 300) {
                        e.target.value = 300;
                    } else if (val <= 100) {
                        e.target.value = 100;
                    }
                }
            });
            document.addEventListener('mouseup', function (e) {
                clearInterval(setTimer);
            });
        }
    }, {
        key: 'initSpinBox',
        value: function initSpinBox() {
            var elInput = this.el.querySelectorAll('input');
            for (var i = 0; i < elInput.length; i++) {
                elInput[i].value = 200;
            }
        }
    }]);

    return SpinBox;
})();
//# sourceMappingURL=SpinBox.js.map
