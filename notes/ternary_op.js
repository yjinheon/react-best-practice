let age = 10;
let name = age > 10 ? 'Juan' : 'Pedro'; // ternary operator

// same as

if (age > 10) {
  name = 'Juan';
} else {
  name = 'Pedro';
}

// 3항연산자는 conditional rendering에 유용하다.
// react Component의 조건부 렌더링
const Component = () => {
  return age > 10 ? <div>age is greater than 10</div> : <div>age is less than 10</div>;
};
