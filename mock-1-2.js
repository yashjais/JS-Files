// 4 programmes were asked - 2 of which were arr reversing and arr reversing without making new arr, which I have solved below with all the variation possible:

// reverse the array without anybuilt method

// const arr = [1,5,5,6,7]

// function rever(arr){
//     let rev_arr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         rev_arr.push(arr[i])
//     }
//     return rev_arr
// }

// console.log(rever(arr))

// without push

// const arr = [6,5,4,3,2,1]

// function rev(arr){
//     let rev_arr = new Array(arr.length)
//     for(let i=0; i<arr.length; i++){
//         rev_arr[i] = arr[arr.length - 1 - i]
//     }
//     return rev_arr
// }

// console.log(rev(arr))

// without making a new array

const arr = [1,2,3]

function rev(arr){
    for(let i = 0; i<arr.length/2; i++){  // will work with odd numbers of element too, coz in odd no of arr the middle value gets in the loop too, use debugger. No need of applying if else for odd or even number of element
        // console.log(arr.length/2)
        // console.log(arr[arr.length/2])
        const ele = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = ele
    }
    return arr
}

console.log(rev(arr))