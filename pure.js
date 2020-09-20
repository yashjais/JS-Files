const person = {
    name: 'yash',
    city: 'bangalore'
}

// pure function - it is not changing the parameters passed to the function 

function print(person){
    return `${person.name} lives in ${person.city}`
}

console.log(print(person))
console.log(print(person))
// should always return the same value whenever called

// impure function - a function which changes the value of the parameters passed to it

function output(person){
    person.city = 'space'
    return `${person.name} lives in ${person.city}`
}