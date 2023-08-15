let names = ['Juan', 'Pedro', 'Maria', 'Jose'];

// map function
// map은 배열의 각 요소에 대해 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

names.map((name) => {
  console.log(name + "is a good person");
});

// react example

//names.map((name) => {
//  return <div>{name} is a good person</div>;
//});

// reduce function
// 기본적으로 배열의 모든 요소들을 체크하고 로직에 따라 누적된 값을 구할때 사용한다.
//

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const result = num.reduce((acc,cur,idx) => {
    if(cur % 2 === 0){
        acc[0] += cur;
    } else {
        acc[1] += cur;
    }
    return acc;
 }
, [0,0]);

console.log(result)
