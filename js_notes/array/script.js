const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 },
  { name: 'Adam', age: 17 },
  { name: 'Zach', age: 25 },
  { name: 'Liz', age: 20 },
  { name: 'Chris', age: 15 },  
  { name: 'Sara', age: 30 },
  { name: 'Jane', age: 20 },
]

const a = Object.groupBy(people, person => person.age < 30 ? 'young' : 'old');

console.log(a);
