// using plain sorting method

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// There are other good ways to do the task. For instance, there’s a great algorithm called Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it:

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    // link = 'https://javascript.info/task/shuffle'

    [array[i], array[j]] = [array[j], array[i]];
  }
}

const arr = [1,2,3]

shuffle(arr)
console.log(arr)