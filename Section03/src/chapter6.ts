/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person: Person = {} as Person;
person.name = "개미새";
person.age = 3;

type Dog = {
    name: string;
    color: string;
}

let dog: Dog = {
    name: "알맹이",
    color: "black",
    breed: "진돗개"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "black",
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글",
    author: "개미새",
}

const len: number = post.author!.length;
