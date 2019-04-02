interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "zerobell-lee",
    age: 25,
    gender: "male"
};

const sayHi = (human: Human): string => {
    return `Hello ${human.name}, you are ${human.age} years old, and you are a ${human.gender}`;
};

// 함수 선언에서 ?를 넣어주면 optional 인자로 받아들인다.
// typescript는 컴파일 시에 타입 검사를 실시한다. 그러므로 gender?나 gender를 넣어주지 않고 아래를 실행하면 에러를 뱉는다.
// 변수명 오른쪽에 : 를 삽입하면 타입 지정이 가능하다.

// tsc-watch는 global로 설치한 typescript를 인식하지 못한다. 그래서 typescript를 로컬로 다시 설치해줘야한다.
// interface는 말 그대로 인터페이스. 자바의 그 interface와 약간 유사하다고 보면 되겠다. object의 청사진.

console.log(sayHi(person));

export {};