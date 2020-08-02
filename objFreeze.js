const obj = {
  firstName: "John",
  lastName: "Doe"
}

console.log(obj)

Object.freeze(obj)

obj.age = "32"
obj.firstName = "John"

console.log(obj)

// but this is a example of shallow freeze, if there is object inside of object - it will not freeze.

// see objFreeze-2