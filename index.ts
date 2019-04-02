const name = "zerobell-lee",
age = 25,
gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age} years old, and you are a ${gender}`);
};

// 함수 선언에서 ?를 넣어주면 optional 인자로 받아들인다.
// typescript는 컴파일 시에 타입 검사를 실시한다. 그러므로 gender?나 gender를 넣어주지 않고 아래를 실행하면 에러를 뱉는다.

sayHi(name, age);

export {};