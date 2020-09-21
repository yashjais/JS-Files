// function fib(n) {
//     if(n==0) return [0]
//     if(n==1) return [0,1]
//     else {
//         const s = fib(n-1)
//         s.push(s[s.length -1] + s[s.length - 2])
//         return s
//     }
// }

// // console.log(fib(0))
// // console.log(fib(1))
// // console.log(fib(2))
// // console.log(fib(3))
// fib(4)
// // console.log(fib(5))


// function recursive(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return recursive(n - 1) + recursive(n - 2);
//     }
// };

// console.log(recursive(5))

function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }

  console.log(fib(6))