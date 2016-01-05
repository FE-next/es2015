import EventEmitter from './util/EventEmitter';

class Model extends EventEmitter{
    constructor() {
        super();
        this.step = null;
        this.num = null;
    }

    set(type, val) {
        this[type] = val;
        this.trigger('change');
        return this;
    }

    get(type) {
        return this[type];
    }

    increase() {
        this.set('num', this.get('num') + this.step);
    }

    decrease() {
        this.set('num', this.get('num') - this.step);
    }
}

export default Model;
