// will require papa parse package

const Papa = require('papaparse')
// trasform header not working

const obj = [
    {
        "name" : "john",
        "age" : 32
    },
     {
         "name": "papa",
         "age" : 56
     }
]

const config = {
    delimiter: ",",
    header: true,
    dynamicTyping: true,
    transformHeader:function(h) {
      console.log(h)
    }
  };

const result = Papa.unparse(JSON.stringify(obj), config)

console.log(result)