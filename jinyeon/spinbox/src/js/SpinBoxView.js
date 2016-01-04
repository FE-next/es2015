/**
 * Created by chy58 on 2016-01-04.
 */


class View {
    constructor(core) {
        this.core = core;
        this.el = this.core.el.querySelector('input');
    }

    initInputVal() {
        this.el.value = this.core.model.getNum();
    }

    setInputVal(val){
        this.core.model.setNum(val);
        this.el.value = val;
    }

    plus() {
        let val = this.core.model.getNum() + this.core.model.getIncreaseNum();
        this.setInputVal(this.checkLimit(val));
    }

    minus() {
        let val = this.core.model.getNum() + this.core.model.getDecreaseNum();
        this.setInputVal(this.checkLimit(val));
    }

    checkValue(val){
        if(isNaN(val)){
            return 200;
        }
        return this.checkLimit(val);
    }

    checkLimit(val) {
        let max = this.core.model.getMax();
        let min = this.core.model.getMin();
        if (val > max) {
            return max;
        } else if (val < min) {
            return min;
        }
        return val;
    }
}
export default View;