/**
 * Unknown 타입
 */

function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // 업캐스팅 가능
    // 자식 클래스의 객체가 부모 클래스 타입으로 형변환 되는 것을 말함.
    let unknownVar: unknown;

    // 다운캐스팅 불가능
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam(){
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 불가능
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidFunc(){
    function voidFunc(): void{
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyEaxm(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // Never Type 다운캐스팅 불가능
    // neverVar = anyVar;

}