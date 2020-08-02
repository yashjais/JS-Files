function deepFreeze(object) {
  console.log('invoked')

  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);
  console.log('propNames', propNames)

  // Freeze properties before freezing self
  
  for (let name of propNames) {
    let value = object[name];
    console.log('value', 'name', value, name)

    if(value && typeof value === "object") { 
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

console.log(deepFreeze(obj2));

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
console.log(obj2.internal.a); // null