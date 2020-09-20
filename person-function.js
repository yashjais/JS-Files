// es 5 - constuctor function
// Person
// firstName, lastName
// fullName()

function Person(data){
    this.firstName = data.fname
    this.lastName = data.lname
    this.fullName = function(){
    return `${this.firstName} ${this.lastName}`
    }
}

const p1 = new Person({ fname: 'ms', lname: 'dhoni'})
console.log(p1)
console.log(p1.fullName())