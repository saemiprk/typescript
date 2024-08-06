/**
 * 클래스
 */

let studentA = {
 name: '',
 grade: '',
 age: 27,
}

class Student {
    // 필드
    name;
    grade;
    age;


    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
}