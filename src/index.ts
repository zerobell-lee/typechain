const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age} years old, and you are a ${gender}`;
};

// 함수 선언에서 ?를 넣어주면 optional 인자로 받아들인다.
// typescript는 컴파일 시에 타입 검사를 실시한다. 그러므로 gender?나 gender를 넣어주지 않고 아래를 실행하면 에러를 뱉는다.
// 변수명 오른쪽에 : 를 삽입하면 타입 지정이 가능하다.

console.log(sayHi("zerobell-lee", 25, "male"));

export {};