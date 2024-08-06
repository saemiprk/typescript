// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "ant"];

// 배열 제네릭
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 튜플
// 길이와 타입이 고정된 배열 (TypeScript에서만 존재)
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];