/**
 * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
 * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
 * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
 * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
 * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
 * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
 * written by Jinyeon.Choi
 */
class SpinBox {
    constructor() {
        this.appendElement();
        this.initProp();
        this.initEvent();
        this.initSpinBox();
    }

    appendElement(){
        var elNode = document.createElement('div');
        var elSpinBox = '<input type="text" value="" data-spin-input><button data-up-btn >▲</button><button data-down-btn >▼</button>';
        elNode.innerHTML = elSpinBox;
        document.body.appendChild(elNode);
    }

    initProp() {
        this.elInput = document.querySelector('[data-spin-input]');
        this.elUpButton = document.querySelector('[data-up-btn]');
        this.elDownButton = document.querySelector('[data-down-btn]');
    }

    initEvent() {
        var setUpTimer = null;
        var setDownTimer = null;
        this.elInput.addEventListener('focusout', (e) => {
            var val = Number(this.elInput.value);
            if (isNaN(val)) {
                this.initSpinBox();
                return;
            }
            this.limitSpinBox(val);
        });
        this.elUpButton.addEventListener('mousedown', (e) => {
            setUpTimer = setInterval(this.plusSpinBox.bind(this), 80);
        });
        this.elUpButton.addEventListener('mouseup', (e) => {
            clearTimeout(setUpTimer);
        });

        this.elDownButton.addEventListener('mousedown', (e) => {
            setDownTimer = setInterval(this.minusSpinBox.bind(this), 80);
        });
        this.elDownButton.addEventListener('mouseup', (e) => {
            clearTimeout(setDownTimer);
        });
    }

    initSpinBox() {
        this.elInput.value = 200;
    }

    plusSpinBox() {
        var val = Number(this.elInput.value) + 1;
        this.limitSpinBox(val)
    }

    minusSpinBox() {
        var val = Number(this.elInput.value) - 1;
        this.limitSpinBox(val);
    }

    limitSpinBox(val) {
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
}

