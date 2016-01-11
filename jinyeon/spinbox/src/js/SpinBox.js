/**
 * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
 * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
 * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
 * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
 * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
 * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
 * written by Jinyeon.Choi
 */
import Model from './SpinBoxModel';

class SpinBox extends Model {
    constructor(id='_spinbox') {
        super(id);
        this._initProp(id);
        this._initEvent();
    }

    _initProp(id) {
        this.el = document.getElementById(id);
    }

    _initEvent() {
        let setTimer = null;

        this.el.addEventListener('mousedown', (event) =>{
            if (event.target && event.target.nodeName == 'BUTTON'){
                if (event.target.dataset['btn'] === 'up'){
                    setTimer = setInterval(() => {
                        this.increase();
                        this.setNum(this.checkVal(this.num));
                    }, 80);
                } else if(event.target.dataset['btn'] === 'down'){
                    setTimer = setInterval(() => {
                        this.decrease();
                        this.setNum(this.checkVal(this.num));
                    }, 80);
                }
            }
        }, false);

        document.addEventListener('mouseup', () =>{
            clearInterval(setTimer);
        }, false);

        this.el.addEventListener('focusout', (event) => {
            if (event.target && event.target.nodeName == 'INPUT'){
                this.setNum(this.checkVal(Number(event.target.value)));
            }
        });
    }

    checkVal(num) {
        if(isNaN(num)){
            return this.defaultVal;
        }
        return this.checkLimit(num);
    }

    checkLimit(num) {
        if (num > this.max) {
            return this.max;
        } else if (num < this.min) {
            return this.min;
        }
        return num;
    }
}


window.Spinbox = SpinBox;
new Spinbox();