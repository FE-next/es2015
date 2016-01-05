import Valuation from './Valuation';

class SpinBox extends Valuation{
    constructor(wapperId, option) {
        super(wapperId, option);

        var welWrapper = document.getElementById(wapperId);
        this._welTextBox = welWrapper.getElementsByClassName('textBox')[0];
        this._welBtnUp = welWrapper.getElementsByClassName('btn_up')[0];
        this._welBtnDown = welWrapper.getElementsByClassName('btn_down')[0];

        this._attachEvent();
        this.update()
    }

    _attachEvent() {
        this._welTextBox.addEventListener("change", this._onChange.bind(this));
        this._welBtnUp.addEventListener("click", this._onClickUp.bind(this));
        this._welBtnDown.addEventListener("click", this._onClickDown.bind(this));
    }

    _onChange(event) {
        var value = event.target.value;
        this.update(value);
    }

    _onClickUp(event) {
        var value = this._increase();
        this.update(value);
    }

    _onClickDown(event) {
        var value = this._decrease();
        this.update(value);
    }

    _increase() {
        var value = this.getValue();
        return ++value;
    }

    _decrease() {
        var value = this.getValue();
        return --value;
    }

    getValue() {
        return parseInt(this._welTextBox.value, 10);
    }

    update(value) {
        this._welTextBox.value = this.getValidateValue(value);
    }
}

export default SpinBox;