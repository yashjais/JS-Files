function bubbleSort(a) {
    for (let i = 1; i < a.length; i++) {
        let flag = 0 
        for (let j = 0; j < a.length - 1; j++) { 
            if (a[j] > a[j + 1]) { 
                const temp = a[j + 1]
                a[j + 1] = a[j]
                a[j] = temp
                flag = 1
            }
        }
        if (flag == 0) { 
            break
        }
    }
    return a
}

console.log(bubbleSort([5,3,8,1,0]))