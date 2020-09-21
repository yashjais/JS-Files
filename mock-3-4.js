// question number 3 and 4 were sorting and finding the second largest element in the array

// sorting I will see later, first second largest element in an array

arr = [3,7,5,6,4,2,7,7,6,6,8,7,19,18,0] // 6

function secLargest(arr){
    let max = 0
    let max1 = 0
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
        if(max1<max && max1<arr[i] && arr[i]!=max){
            max1 = arr[i]
        }
    }
    return max1
}

console.log(secLargest(arr))