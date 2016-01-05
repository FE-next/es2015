/**
 * 유효성 검사
 * 1. 문자열 제거
 * 2. 최소값부터 최대값까지 체크
 */
class Valuation {
    constructor(option) {
        this._nMaximum = 200;
        this._nMinimum = 0;
    }

    _removeString(value) {
        var oRegExp = new RegExp(/[^0-9]/g);

        //빈값 처리
        value = value || '0';
        return value.replace(oRegExp, '');
    }

    /**
     * 최대, 최소값 유효성검사
     */
    _validate(value) {
        var nMaximum = this._nMaximum,
            nMinimum = this._nMinimum;

        if (value < nMinimum) {
            value = nMinimum;
        }

        if (value > nMaximum) {
            value = nMaximum;
        }

        return value;
    }

    getValidateValue(value) {
        if(isNaN(value)){
            value = this._removeString(value);
        }

        return this._validate(value);
    }
}

export default Valuation;
//module.exports = Valuation;