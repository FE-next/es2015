"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * - spinbox Class
 * - 스펙을 잘 몰라서 임의로 구현
 * - 버튼 누르면 일정시간 이후 숫자가 증가/감소
 * - 최대값(200)/최소값(0) 을 벗어나지 않음
 *
 * @author jungmyung.seo
 * @version 1.0
 * @since 2016-01-05
 */

var SpinBox = (function () {
    function SpinBox(oSpinboxData) {
        _classCallCheck(this, SpinBox);

        this._assignElement(oSpinboxData);
        this._setEvent();
    }

    _createClass(SpinBox, [{
        key: "_assignElement",
        value: function _assignElement(oSpinboxData) {
            this._oData = oSpinboxData;

            this._oTimer = null;

            this._elSpinbox = document.getElementById(oSpinboxData.elDivSpinbox);
            this._elTextArea = document.getElementById("_textArea");
            this._elButton = document.getElementsByTagName("button");
        }
    }, {
        key: "_setEvent",
        value: function _setEvent() {
            var oSelf = this;

            this._elSpinbox.addEventListener("mousedown", function (e) {
                if (e.target.nodeName === "BUTTON") {
                    oSelf._mousedownBtn(e);
                }
            });

            this._elSpinbox.addEventListener("mouseup", function (e) {
                if (e.target.nodeName === "BUTTON") {
                    oSelf._mouseupBtn(e);
                }
            });
        }
    }, {
        key: "_mousedownBtn",
        value: function _mousedownBtn(e) {
            var _this = this;

            this._oTimer = setInterval(function () {
                _this._getInputboxValue(e);
            }, this._oData.nInterval);
        }
    }, {
        key: "_mouseupBtn",
        value: function _mouseupBtn(e) {
            clearInterval(this._oTimer);
            this._oTimer = null;
        }
    }, {
        key: "_getInputboxValue",
        value: function _getInputboxValue(e) {
            var nValue = this._calcNumber(e);

            this._setValue(nValue);
        }
    }, {
        key: "_calcNumber",
        value: function _calcNumber(e) {
            var nValue = this._elTextArea.value;
            var sType = e.target.dataset.type;

            if (sType === "up" && nValue < this._oData.maxValue) {
                nValue++;
            } else if (sType === "down" && nValue > 0) {
                nValue--;
            }

            return nValue;
        }
    }, {
        key: "_setValue",
        value: function _setValue(nValue) {
            this._elTextArea.value = nValue;
        }
    }]);

    return SpinBox;
})();