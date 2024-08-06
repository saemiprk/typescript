/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number, c: number): void;
}

const person: Person = {
    name: '개미새',
    sayHi: function () {
        console.log("Hi")
    }
}