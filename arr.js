const arr = [1,2,1,7,3,2,1,6,4]
// const arr = [3,4,5,6,1,8,6,5,4]

// [7,3,6,4]
// [[1,1], [2,2]]

const newArr = []

for(let i = 0; i < arr.length - 1; i++) {
  const temp = []
  let count = 0
  const tempNum = arr[i]
  for(let j = i + 1; j<arr.length; j++){
    if(tempNum == arr[j]) {
      if(count == 0) {
        temp.push(arr[i])
        temp.push(arr[j])
        count ++
        arr.splice(j,1)
        arr.splice(i, 1)
        i = i - 1
      } else {
        temp.push(arr[j])
        arr.splice(j,1)
      }
    }
  }
  if(temp.length != 0){
    newArr.push(temp)
  }
}

console.log(newArr, arr)