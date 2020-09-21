function reArrangeArray(a) {
    const answer = []
    const negativeNumber = []
    const positiveNumber = []
    // for (let i = 0; i < a.length; i++) {
    //     if(a[i]<0)
    // }
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            negativeNumber.push(a[i])
        } else {
            positiveNumber.push(a[i])
        }
    }
    console.log(a)
    console.log(negativeNumber)
    console.log(positiveNumber)
   
    for (let i = 0; i < a.length ; i++){
        if (i % 2 == 0 && negativeNumber.length != 0) {
            answer.push(negativeNumber.shift())
        } else if (i % 2 != 0 && positiveNumber.length != 0) {
            answer.push(positiveNumber.shift())
        } else if (i % 2 == 0 && negativeNumber.length == 0) { 
            answer.push(positiveNumber.shift())
        } else {
            answer.push(negativeNumber.shift())
        }
    }
    return answer
}

console.log(reArrangeArray([1, 2, 3, -4, -1, 4]))

// Input: [1, 2, 3, -4, -1, 4]

// Output: [-4, 1, -1, 2, 3, 4]

