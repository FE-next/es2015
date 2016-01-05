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
    constructor(id) {
        this._initProp(id);
        this._initEvent();
        this._initSpinBox();
    }

    _initProp(id) {
        this.el = document.getElementById(id);
    }

    _initEvent() {
        let setTimer = null;

        this.el.addEventListener('mousedown', (e) => {
            if(e.target && e.target.nodeName == 'BUTTON'){
                if(setTimer !== null){
                    clearInterval(setTimer);
                }
                if( e.target.dataset['btn'] == 'up'){
                    setTimer = setInterval(()=>{
                        let elInput = e.target.parentElement.querySelector('input');
                        if(Number(elInput.value) < 300){
                            elInput.value = Number(elInput.value) + 1;
                        }
                    }, 80);
                }else{
                    setTimer = setInterval(()=>{
                        let elInput = e.target.parentElement.querySelector('input');
                        if(Number(elInput.value) > 100){
                            elInput.value = Number(elInput.value) - 1;
                        }
                    }, 80);
                }
            }
        }, false);

        this.el.addEventListener('focusout', (e) => {
            if(e.target && e.target.nodeName == 'INPUT'){
                let val = Number(e.target.value);
                if(isNaN(val)){
                    e.target.value =  200;
                }
                if(val >=300){
                    e.target.value = 300;
                }else if(val <=100){
                    e.target.value = 100;
                }
            }
        });
        document.addEventListener('mouseup', (e) => {
            clearInterval(setTimer);
        });
    }

    _initSpinBox() {
        let elInput = this.el.querySelectorAll('input');
        for(let i = 0 ; i < elInput.length; i++){
            elInput[i].value =  200;
        }
    }
}

