'use strict';

class Spinbox {
  constructor(num = 100) {
    this.num = num;
  }

  increaseNum() {
    this.num++;
  }

  decreaseNum() {
    this.num--;
  }

  setNum(num) {
    this.num = parseInt(num, 10);
  }

  getNum() {
    return this.num;
  }
}

export default Spinbox;
