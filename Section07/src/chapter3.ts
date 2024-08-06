/**
 * 제너릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let KeyPair : KeyPair<string, number> = {
    key: "Key",
    value: 0,
}

let KeyPair2 : KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
}

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string] : number;
}

let numberMap1: NumberMap = {
    key: -12233,
    key2: 1223,
}

interface Map<V> {
    [key: string] : V;
}

let stringMap: Map<string> = {
    key: "value",
}

let booleanMap: Map<boolean> = {
    key: true,
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello",
}

/**
 * 제네릭 인터페이스 활용 예시
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>){
    const school = user.profile.school;
    console.log(`${school} 등교 완료!`);
}

const developerUser: User<Developer> = {
    name: "개미새",
    profile: {
        type: "developer",
        skill: "TypeScript",
    }
}

const studentUser: User<Student> = {
    name: "개미",
    profile: {
        type: "student",
        school: "서울대학교",
    }
}
