class Model {
    constructor(config) {
        this._num = config.num || 200;
    }

    set(num) {
        this._num = num;
    }

    get() {
        return this._num;
    }

    increase() {
        this._num++;
    }

    decrease() {
        this._num--;
    }

}

export default Model;
