function Person(obj){
    this.name = obj.name
    this.age = obj.age
    this.details = function(){
        return `${this.name} is of ${this.age}`
    }
}

const p1 = new Person({name: 'yash', age: 23})
const p2 = new Person({name: 'anjali', age: 28})

Person.prototype.nationality = "Indian" // added to every instance of constuctor Person
p1.gender = 'male' // only added property to the p1 object/instance

console.log(p1)
console.log(p1.details()) // 'yash is of 23'
console.log(p1.nationality) // 'Indian'
console.log(p2.nationality) // 'Indian'
//if we forgot to add nationality property in main constructor function, we have added through prototype. 
console.log(p1.gender) // 'male'
console.log(p2.gender) // undefined