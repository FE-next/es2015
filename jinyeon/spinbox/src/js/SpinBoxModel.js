/**
 * Created by chy58 on 2016-01-04.
 */

class Model{
    constructor(){
        this.num = 200;
        this.max = 300;
        this.min = 100;
        this.add = 1;
        this.minus = -1;
    }
    getNum(){
        return this.num;
    }
    setNum(num){
        this.num = num;
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
    getIncreaseNum(){
        return this.add;
    }
    setIncreaseNum(num){
        this.add = num;
    }
    getDecreaseNum(){
        return this.minus;
    }
    setDecreaseNum(num){
        return this.minus = num;
    }
}
export default Model;