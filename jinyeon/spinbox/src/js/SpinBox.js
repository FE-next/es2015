/**
 * - 웹 페이지에 하나 이상의 스핀박스 HTML를 넣을 수 있다.
 * - 스핀박스 기본 값은 사용자가 지정할 수 있다.
 * - 사용자가 숫자가 아닌 값을 집어넣어주었을때 200으로 설정한다.
 * - 사용자가 기본 값을 지정하지 않으면 자동으로 200으로 설정한다.
 * - ▲ 버튼을 누르면 값이 1 증가, ▼ 버튼을 누르면 값이 1 감소한다.
 * - 스핀박스가 가질 수 있는 값의 범위는 100~300 사이다.
 * written by Jinyeon.Choi
 */
import View from './SpinBoxView';
import Model from './SpinBoxModel';

class SpinBox {
    constructor(id='_spinbox') {
        this._initProp(id);
        this._initEvent();
    }

    _initProp(id=null) {
        this.el = document.getElementById(id);
        this.model = new Model();
        this.view = new View(this);
        this.view.initInputVal();
    }

    _initEvent() {
        let setTimer = null;

        this.el.addEventListener('mousedown', (event) =>{
            if (event.target && event.target.nodeName == 'BUTTON'){
                if (event.target.dataset['btn'] === 'up'){
                    setTimer = setInterval(() => this.view.plus(), 80);
                } else if(event.target.dataset['btn'] === 'down'){
                    setTimer = setInterval(() => this.view.minus(), 80);
                }
            }
        }, false);

        document.addEventListener('mouseup', () =>{
            clearInterval(setTimer);
        }, false);

        this.el.addEventListener('focusout', (event) => {
            if (event.target && event.target.nodeName == 'INPUT'){
                let inputVal = this.view.checkValue(Number(event.target.value));
                this.view.setInputVal(inputVal);
            }
        });
    }
    setMax(max){
        this.model.setMax(max);
    }
    setMin(min){
        this.model.setMin(min);
    }
    setAdd(num){
        this.model.setAdd(num);
    }
    setMinus(num){
        this.model.setMinus(num);
    }
    setInit(num){
        this.model.setNum(num);
    }
}


new SpinBox();