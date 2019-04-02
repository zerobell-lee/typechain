class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
};

// 인터페이스는 js에 없으므로 컴파일에 직접 삽입되진 않는다. 좀 더 강력한 기능을 원한다면 어쩔 수 없이 class를 써야한다.
// ts에서 class가 제공하는 것들은 생각보다 강하다. modifier도 지원하고, type 검사는 당연히 들어가있다.

// interface를 사용하는게 ts 입장에선 더 안전하다. 그러나 react, express 등과 같이 사용하기 위해선 class를 써야하는 상황이 올 것이다.

const oliviaHye = new Human("Son Hye Joo", 18, "female");

const sayHi = (human: Human): string => {
    return `Hello ${human.name}, you are ${human.age} years old, and you are a ${human.gender}`;
};

// 함수 선언에서 ?를 넣어주면 optional 인자로 받아들인다.
// typescript는 컴파일 시에 타입 검사를 실시한다. 그러므로 gender?나 gender를 넣어주지 않고 아래를 실행하면 에러를 뱉는다.
// 변수명 오른쪽에 : 를 삽입하면 타입 지정이 가능하다.

// tsc-watch는 global로 설치한 typescript를 인식하지 못한다. 그래서 typescript를 로컬로 다시 설치해줘야한다.
// interface는 말 그대로 인터페이스. 자바의 그 interface와 약간 유사하다고 보면 되겠다. object의 청사진.

console.log(sayHi(oliviaHye));

export {};