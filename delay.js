// // will call the callback function just once after the settted time
// setTimeout(function (){
//     console.log(Math.round(Math.random() * 10))
// }, 1000)

// will call the callback function everytime after the setted time
// setInterval(function(){
//     console.log(Math.round(Math.random() * 10))
// }, 1000)

// homeExp Material

function delay(){
    let num = 1
    let plus_num = setInterval(function(){
        if(num <= 10 ){
            console.log(num)
            num++
        }else{
            clearInterval(plus_num)
        }
    })
}
delay()

/*
Note: To be able to use the clearInterval() method, you must use a variable when creating the interval method:
myVar = setInterval("javascript function", milliseconds);

Then you will be able to stop the execution by calling the clearInterval() method.
clearInterval(myVar);
*/

// can also use setTimeout this way.