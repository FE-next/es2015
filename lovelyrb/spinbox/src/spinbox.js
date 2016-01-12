import Model from './spinbox.model.js';

class Spinbox {
    constructor(config) {

        this.model = new Model(config);
        this.el = config.el;

        this._assignElements();
        this._attachEvents();
        this._updateInputValue();
    }

    _assignElements() {
        this._input = this.el.querySelector('#_textArea');
        this._btnUp = this.el.querySelector('#_up');
        this._btnDown = this.el.querySelector('#_down');
    }

    _attachEvents() {
        this._input.addEventListener('change', this._onChange.bind(this));
        this._btnUp.addEventListener('click', this._onClickUp.bind(this));
        this._btnDown.addEventListener('click', this._onClickDown.bind(this));
    }

    _onChange(e) {
        var val = e.target.value;

        this.model.set(parseInt(val, 10));
        this._updateInputValue();
    }

    _onClickUp(e) {
        this.model.increase();
        this._updateInputValue();
    }

    _onClickDown(e) {
        this.model.decrease();
        this._updateInputValue();
    }

    _updateInputValue() {
        this._input.value = this.model.get();
    }
}

window.Spinbox = Spinbox;
