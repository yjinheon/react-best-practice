const hobbies = ['Sports', 'Cooking'];

const user = {
  name : "Mike",
  age : 30,
};

const newhobbies = ['Hiking','Reading'];

const merged_hobbies = [...hobbies, ...newhobbies];

console.log(merged_hobbies);


const extended_user = {
  is_admin : true,
  ...user,
};

console.log(extended_user);


