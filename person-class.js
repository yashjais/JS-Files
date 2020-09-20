// es6 - class
// Person
// firstName, lastName
// fullName()

class Person {
    constructor(data){
        this.firstName = data.fname
        this.lastName = data.lname
    }

    fullName(){
        return `${this.firstName} ${this.lastName}` // we can't do function fullName() coz not part of the syntax
    }
}

const p1 = new Person({fname: 'ms', lname: 'dhoni'})
console.log(p1)
console.log(p1.fullName())