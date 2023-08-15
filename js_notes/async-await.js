// event loop에 대한 이해가 선행되어야 한다.
// callback 에 대한 이해가 선행


const fruits = ['apple', 'banana', 'orange'];

const smmothie = fruits.map(async v => {
  const juice = await Promise.resolve(`${v} juice`);
  console.log(juice);
  return juice;
});
