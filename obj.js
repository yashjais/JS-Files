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