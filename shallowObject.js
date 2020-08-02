const arr = []
const obj = {};
obj.firstName = 'John';
obj.lastName = 'Doe';
obj.age = 26;


if(true) {
  obj.hobby = 'table tennis';
  arr.push(obj);
}

if(true) {
  obj.hobby = 'marshal arts';
  arr.push(obj);
}

console.log(arr)