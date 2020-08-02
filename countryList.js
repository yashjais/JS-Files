// will require react select country list package

const  countryList = require('react-select-country-list');

const countries = countryList().getValues()
console.log(countries)

// console.log()
// console.log(countryList().getLabel())
// console.log(countryList().getValues())
// console.log(countryList().getLabels())

// etValue(label)
// Expects the English country name. Returns the code for that country. If not found, it returns undefined.

// getLabel(value)
// Expects a two-digit country code. Returns the name for that country. If not found, it returns undefined.

// getValues()
// Returns an array of all country codes.

// getLabels()
// Returns an array of all country names.

// getValueList()
// Returns a key-value object of all countries using the code as key.

// getLabelList()
// Returns a key-value object of all countries using the name as key.

// getData()
// Returns an array of all country information, in the same format as it gets imported.

// setLabel(value, label)