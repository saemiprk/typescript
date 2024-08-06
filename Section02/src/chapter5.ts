// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// TypeSrcipt에서만 제공 되는 타입임.

enum Role {
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    Korean = "ko",
    english = "en"
}

const user1 = {
    name: "개미새",
    role: Role.ADMIN,
    language: Language.Korean
}

const user2 = {
    name: "개미",
    role: Role.USER
}

const user3 = {
    name: "미새",
    role: Role.GUEST
}

console.log(user1, user2, user3);