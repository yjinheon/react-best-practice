// object 는 python의 dictionary 와 유사

const person = {
  name : "Pedro",
  age : 20,
  isMarried : false,
};


// 이미 선언한 object 내의 요소들로 variable 선언할때 아래와 같이 사용
const {name , age, isMarried} = person; 


console.log("age:", age)

const names = ["Pedro","Jack","Jessica"]
const names2 = [...names, "Joel"]
