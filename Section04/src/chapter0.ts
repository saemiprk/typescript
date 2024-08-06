/**
 * 함수 타입 정의
 */

// 어떤 매개변수를 받고, 어떤 결과 값을 반환하는지
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
    return a + b; 
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 선택적 매개변수는 필수 매개변수의 맨 뒤에 배치
function introduce(name = "개미새", tall?: number){
    console.log(`name: ${name}`);

    if(typeof tall === "number"){
        console.log(`tall: ${tall} + 10`);
    }else{
        console.log(`tall: ${tall}`);
    }
}


function getSum(...rest : number[]){
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}