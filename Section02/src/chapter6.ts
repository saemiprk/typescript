// any
// 특정 변수의 타입을 확실히 모를경우
let anyVar:any = 10;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {}


