/**
 * const 예제 코드
 * @author jinkwon.lee <master@bdyne.net>
 */

// const는 반드시 초기값이 필요하다
const ASSIGN;

// const에는 js에서 가능한 어떠한 값도 할당할 수 있다
const OBJ = {name: 'JOHN'};
const NUMBER = 123;
const ARRAY = [];
const UNDEFINED = undefined;
const FUNC = () => {};
const PI = 3.1415;

// const는 re-assign 할 수 없다
const PI = 321;

// object일때는 prop의 값을 변경할 수 있다
OBJ.name = 'TOM';
