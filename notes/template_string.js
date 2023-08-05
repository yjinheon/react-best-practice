let string = 'Hello';
let string2 = 'Jinheon';

// 템플릿 문자열은 백틱(`)을 사용한다.
// 특수기호 $를 사용하여 변수를 문자열 안에 삽입할 수 있다.

let greetings = `${string} ${string2}`;

console.log(greetings);

let product = {
    name : 'Milk',
    price : 1.99,
}

let message = `The price of ${product.name} is ${product.price}`;

let multiline = `This is
a multiline
string`;

console.log(message);

console.log(multiline);

