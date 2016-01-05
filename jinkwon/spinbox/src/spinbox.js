import Model from './model';

class SpinBox {
    constructor(options) {
        this.model = new Model();
        this._setOptions(options);
        this._assignElements();
        this._setEvents();
        this._setModelEvents();
    }

    _setOptions(options) {
        var defaultOptions = {
            el: null,
            step: 1,
            initNum: 200
        };

        options = Object.assign(defaultOptions, options);

        this._el = options.el;

        this.model
            .set('step', options.step)
            .set('num', options.initNum);
    }

    _assignElements() {
        this._elInput = this._el.querySelector('[data-input]');
        this._elUpBtn = this._el.querySelector('[data-up-btn]');
        this._elDownBtn = this._el.querySelector('[data-down-btn]');
    }

    _createInterval(cb) {
        this._timer = setTimeout(() => {
            this._intervalTimer = setInterval(() => {
                cb.apply(this);
            }, 100);
        }, 300);
    }

    _setEvents() {
        this._elUpBtn.addEventListener('mousedown', () => {
            this.model.increase();
            this._createInterval(() => {
                this.model.increase();
            });
        });

        this._elDownBtn.addEventListener('mousedown', () => {
            this.model.decrease();
            this._createInterval(() => {
                this.model.decrease();
            });
        });

        document.addEventListener('mouseup', () => {
            clearTimeout(this._timer);
            clearInterval(this._intervalTimer);
        });
    }

    _setModelEvents() {
        this.model.on('change', () => {
            this._elInput.value = this.model.get('num');
        }).trigger('change');
    }
}

window.SpinBox = SpinBox;
