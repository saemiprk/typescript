/**
 * Keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person){
    return person[key]
}

const person = {
    name: "개미새",
    age: 30
}

getPropertyKey(person, "name");
