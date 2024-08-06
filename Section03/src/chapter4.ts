/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입, 교집합
 */

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

/**
 * 1. 합집합 - Union 타입
 */

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: ""
}

let union2: Union1 = {
    name: "",
    language: "",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let interscrion1: Intersection = {
    name: "",
    color: "",
    language: "",
}