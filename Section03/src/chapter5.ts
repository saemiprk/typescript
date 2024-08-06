/**
 * 타입 추론
 */

// 모든 상황에서 추론 해주지는 않음
// 매개변수일 경우 주의
// 초기 값을 기준으로 타입 추론

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "개미새",
    profile: {
        nickname: "개미"
    },
    urls: ["https://velog.io/@saemmi/posts"],
}

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello"){
    return "hello";
}

let d;
d = 10;
d.toFixed();

d = "string";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];