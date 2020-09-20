// (function(){
//       var a = b = 3;
// })();
// console.log(typeof a)
// console.log("a defined?" + (typeof a !== "undefined"));
// console.log("b defined?" + (typeof b !== "undefined"));


// var Output = (function(x){
//     Delete x; 
//     return x;
// })(0);

// console.log(output);

// const arr = [87,4,2,7]

// let smallestElement = Math.pow(10, 1000)
// let smallestElement2 = Math.pow(10, 1000)

// for(let i=0; i< arr.length; i++){
//     if(arr[i] < smallestElement) {
//         smallestElement = arr[i]
//     } else if(arr[i] < smallestElement2 && smallestElement2 < smallestElement ){
//         smallestElement2 = arr[i]
//     }
// }

// console.log(smallestElement)
// console.log(smallestElement2)

// arr.sort()

// console.log(arr)

1. 
console.log("a defined?" + (typeof a !== "undefined")); // false
console.log("b defined?" + (typeof b !== "undefined")); // false

False because a and b is not defined in the main function of file. They are defined(a , b) in a function and var is function scoped. Hence a and b is undefined and typeof a !== "undefined" is alse false.

2.
> console.log((.1 + .2 ) == .3) // .30000....2
> console.log((.1 + .2 ) == .3) // false 

they are false because in js floating numbers can't be precisely added. 

3.
Printing mistake in question.

4. 
Arrow function are used when we have to access the value of 'this' keyword of outside scope. Because Arrow function don't have value of 'this' keyword of their own.

5. 
A closure in js is a concept in which we have access to of the outer scope of the function from inner scope.
Ex.
function first() {
	const greet = 'hello'
	function greeting() {
		alert(greet) // inner function having the scope of outer function variable
	}
	greeting()
}	 


6.
A callback is a function which is given as an argument to another function. Callback will be executed after another fucntion have finished executing. Callback are needed in order to listen to an event, because js is event driven programming language.

7.
Spread syntax allows an iterable such as an array expression or string to be expanded in places.
ex: arr1 = [1,2,2] arr2 = [43,3] 
arr3 = [...arr1, ...arr2]
console.log(arr3) // [1,2,2,43,3] // and it will be pass by reference means any changes in arr1 and arr2 cannot affect arr3

8.
This question is unclear.

9.
This question is also unclear.

10.
slice can take one or two argument. if one argument is given it will slice out the string from that index and if second argument is given it will slice upto that index(not included).
splice was originally made for deleting an element but it can be used for adding an element too. It is a array method. It can take upto three arguments. First argument is index. Second one is how many element you have to delete. Third value can be given for adding an element to given index. Return an array.
split is an string method which will convert an string to array.

11.
map is an array method which calls a callback function for every element in the array. The callback returns the particular element which is given as an argument to the callback function.
filter is an array method which calls a callback function for every element in the array. The elements of array is given as a argument to callback function. And the callback returns true or false based on the particular condition that is given inside the callback.
find is an array method which calls a callback function for every element in the array. The elements of array is given as a argument to callback function. It returns a particular element based on the condition that is written inside the callback function.

12.
Error first callback are regular callback function in which the first argument given is error. If no error was raised in the callback function, then the first argument will be passed as null.

13.
double equals checks for the value only and it will also implicitly converts the value while checking for the value. But triple equal checks for value as well as type and it will not implicitly convert the type while checking.

14.
null is no value in javascript. But undefined is not a value. You can assign a value of null but you cannot assign undefined to something. A value declared but not assigned is undefined.

15.
2 + 5 + "3" = "73"
first 2 + 5 is seven and then 7 plus string of 3 is "73".

16.
Push is an array method that is used to push an element in the array. It returns the length of the array.
Unshift is an array method that is also used to add an element to the array but it will add in the front of the array. It rerturns the full array with the newest element.

17.
undeclared means a varaible is not declared and console logging the undeclared variable give reference error. But undefined will come when the variable is declared but not assigned any value.

18.
Export and imports in javacript are essential as we cannot write while code in a single file. So for writing code in different files(modules) we have to import and export some code through another file. That's where import and export comes into the picture.
we are importing several packages and function in our react and node code
like- import axios from 'axios'
const express = require('express')

19.
so for the smallest and second smallest array -
const arr = [3,2,1] 
let smallestElement = Math.pow(10, 1000)
for(let i=0; i<arr.length; i++){
	if(a[i] < smallestElement) {
		smallestElement = a[i]
	}
	
}
console.log(smallestElement)

for second smallest element

arr.sort()
const secondElement = arr[1]

20.
db.record.aggregate( [
   {
     $group: {
        _id: "George"
     }
   }
] 

// mongoose

Model.find()

21.
db.content.update({'field.key':'user_id'},{$set:{'field.$.key':'new_value'}},false,true);

22.
// mongoose

Model.find({name: "George"})

23.
Advantages of mongoDB :- 
Flexible Data Model : We can use dynamic Schema that means there is no predefined schema, and the document can hold any value based on the key.

Performance: Query performance is one of the strong points of MongoSB. 

Scalable: MongoDB is highly scalable, using shards. Horizontal Scaling is a big plus in NoSQL database.

Javascript way: MongoDB is saving documents in JSON form. It is Javascript way of doing things.

24.
When an index is too huge to fit into RAM, then MongoDB reads the index, which is faster than reading RAM because the indexes easily fit into RAM if the server has got RAM for indexes, along with the remaining set.

25.
MongoDB is consistent by default: reads and writes are issued to the primary member of a replica set. Applications can optionally read from secondary replicas, where data is eventually consistent by default. Reads from secondaries can be useful in scenarios where it is acceptable for data to be slightly out of date, such as some reporting applications. Applications can also read from the closest copy of the data (as measured by ping distance) when latency is more important than consistency.

26.
A replica set is a group of mongod instances that host the same data set. In a replica, one node is primary node that receives all write operations. All other instances, such as secondaries, apply operations from the primary so that they have the same data set.

27.
Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth. As the size of the data increases, a single machine may not be sufficient  to store the data. Sharding solves the problem with horizontal scaling.

28.
To create a collection in MongoDB using mongoose - 
const Model = mongoose.model('ModelName', schemaName)

39.
db. collection. drop()

40.
Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability with multiple copies of data on different database servers. Replication protects a database from the loss of a single server. Replication also allows you to recover from hardware failure and service interruptions. With additional copies of the data, you can dedicate one to disaster recovery, reporting, or backup.

41.
An index in MongoDB is a special data structure that holds the data of few fields of documents on which the index is created. Indexes improve the speed of search operations in database because instead of searching the whole document, the search is performed on the indexes that holds only few fields.

42.
I have used mongoose.
so via mongoose we first intanciate a new object of the model
ex: const student = new Student(body)
student.save()

43.
MongoDB Profiler is a built-in tool which gives you the actual query level insights. It allows you to analyze all the queries which are being run by the database system.

44.
MongoDB save the data in JSON format.

45.
Vertcal Scaling refers to adding more resources to our server like adding more RAM or disk or computing power.

46.
In MongoDB, projection means selecting only the necessary data rather than selecting whole of the data of a document. If a document has 5 fields and you need to show only 3, then select only 3 fields from them.

47.
the limit function in MongoDB is used to specify the maximum number of results to be returned.
db.userdetails.find().limit(2) // fetch first two documents from the collection "userdetails"

48.
To create backup of database in MongoDB, we should use mongodump command. This command will dump the entire data of our server into the dump directory. There are many options available by which we can limit the amount of data or create backup of our remote serve.

49.
The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.
ex:- db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])
so there are two stages : 
first is the match stage where the documents having status a will be returned 
and the second stage where the documents having same customer id will have their amount totaled.
