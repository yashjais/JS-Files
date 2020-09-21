const obj = {
    name: 'yash',
    address: 'Indore'
}

const obj1 = {
    address: 'bangalore',
    proffesion: 'developer'
}

Object.assign(obj,obj1)

console.log(obj)  // { name: 'yash', address: 'bangalore' } // updating/overridding the value

// new obj file merged

// const obj = {
//     name: 'yash',
//     age(){
//         return `${this.name} is of 23 years`
//     }
// }

// console.log(obj.age())

const obj = {

    age() {
        return `${this.name} is of 23 years`
    },
    name: 'yash',
    _this: this, // here its empty object but inside terminal its global object
}

console.log(obj.age())
console.log(obj._this)

// // console.log(this)

// inside IIFE

// (function add(){
//     console.log(this) // global object
// })()


// function Person(fn, ln, rn) {
// 	this.first_name = fn;
//     this.last_name = ln;
//     this.runs = rn

// 	this.displayName = function() {
// 		return `Name: ${this.first_name} ${this.last_name}`
//     }
//     this.total = this.runs.reduce(function(acc, val){
//         return acc+val
//     })
//     this.avg = this.total / this.runs.length
//     this.highest = function(){
//         this.runs.map(function(run){
//             console.log(run) // here the value of this will be global oject
//         })
//     }

// }

// let person = new Person("John", "Reed", [45,54,45]);
// console.log(person.highest())
// console.log(person.highest())
// person.avg()
//person.displayName(); // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName(); // Prints Name: Paul Adams

// function Student() {
//     this.name = 'John'
//     this.gender = 'M'
// }

// const studObj = new Student()
// const studObj1 = new Student()
// studObj.age = 23

// // console.log(Student.prototype)
// // console.log(studObj.prototype)
// // console.log(studObj.__proto__)

// console.log(studObj.name) // john
// console.log(studObj.age) // 23
// console.log(studObj1.age) // undefined

// Student.prototype.ht = 5.5

// console.log(studObj.ht)
// console.log(studObj1.ht)

// console.log(studObj)

