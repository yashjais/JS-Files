const obj = {
    person: {
        name: 'dean',
        age: '34'
    },
    animal: {
        name: 'doggo',
        age: '3'
    }
}
console.log('obj', obj)

const copyObj = {
    ...obj, ...obj.person, ...obj.animal
}

console.log('copyObj', copyObj)

obj.person.name = 'sam'


console.log(obj)
console.log(copyObj)

