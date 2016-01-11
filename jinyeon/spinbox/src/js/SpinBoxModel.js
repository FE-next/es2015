/**
 * Created by chy58 on 2016-01-04.
 */
const defaultVal = 200;
class Model{
    constructor(id){
        this.max = 300;
        this.min = 100;
        this.add = 1;
        this.minus = -1;
        this.elInput = document.getElementById(id).getElementsByTagName('input')[0];
        this.elInput.value = this.defaultVal = this.num = defaultVal;
    }
    getNum(){
        return this.num;
    }
    setNum(num){
        this.num = num;
        this.elInput.value = num;
    }
    getMax(){
        return this.max;
    }
    setMax(max){
        this.max = max;
    }
    getMin(){
        return this.min;
    }
    setMin(min){
        this.min = min;
    }
    increase(){
        this.num += this.add;
    }
    decrease(){
        this.num += this.minus;
    }

}
export default Model;