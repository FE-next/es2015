'use strict';

import Spinbox from './spinbox.model.js';
import $ from 'jquery';

class SpinboxComponent {
  constructor(spinboxClass = 'spinbox') {console.log(spinboxClass);
    this.model = new Spinbox();

    this.spinboxClass = spinboxClass;

    this.elements = [];

    this._assignElements();
    this._assignEvents();
    this._initData();
  }

  _assignElements() {
    const wrapperElement = $('.' + this.spinboxClass);

    this.elements.input = wrapperElement.find('input');
    this.elements.upButton = wrapperElement.find('.btn-up');
    this.elements.downButton = wrapperElement.find('.btn-down');
  }

  _assignEvents() {
    this.elements.input.focusout(() => this._onFocusOutInput());
    this.elements.upButton.click(() => this._onClickUp());
    this.elements.downButton.click(() => this._onClickDown());
  }

  _initData() {
    this._updateNumber();
  }

  _onFocusOutInput() {
    var num = this.elements.input.val().replace(/[^0-9]/g, "");

    this.model.setNum(num);
    this._updateNumber();
  }

  _onClickUp() {
    this.model.increaseNum();
    this._updateNumber();
  }

  _onClickDown() {
    this.model.decreaseNum();
    this._updateNumber();
  }

  _updateNumber() {
    this.elements.input.val(this.model.getNum());
  }
}

export default SpinboxComponent;
