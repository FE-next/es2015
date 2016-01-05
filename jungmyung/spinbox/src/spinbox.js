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

class SpinBox {
    constructor(oSpinboxData) {
        this._assignElement(oSpinboxData);
        this._setEvent();
    }

    _assignElement(oSpinboxData) {
        this._oData = oSpinboxData;

        this._oTimer = null;

        this._elSpinbox = document.getElementById(oSpinboxData.elDivSpinbox);
        this._elTextArea = document.getElementById("_textArea");
        this._elButton = document.getElementsByTagName("button");
    }

    _setEvent() {
        let oSelf = this;

        this._elSpinbox.addEventListener("mousedown", (e) => {
            if(e.target.nodeName === "BUTTON"){
                oSelf._mousedownBtn(e);
            }
        });

        this._elSpinbox.addEventListener("mouseup", (e) => {
            if(e.target.nodeName === "BUTTON"){
                oSelf._mouseupBtn(e);
            }
        });
    }

    _mousedownBtn(e) {
        this._oTimer = setInterval(() => {
                this._getInputboxValue(e);
            }, this._oData.nInterval);
    }

    _mouseupBtn(e){
        clearInterval(this._oTimer);
        this._oTimer = null;
    }

    _getInputboxValue(e){
        let nValue = this._calcNumber(e);

        this._setValue(nValue);
    }

    _calcNumber(e){
        let nValue = this._elTextArea.value;
        let sType = e.target.dataset.type;

        if(sType === "up" && nValue < this._oData.maxValue){
            nValue++;
        } else if(sType === "down" && nValue > 0){
            nValue--;
        }

        return nValue;
    }

    _setValue(nValue){
        this._elTextArea.value = nValue;
    }
}