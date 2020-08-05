// How to set default values when destructuring with JavaScript

const arr = ['Hermione'];
const obj = {
	name: 'Hermione'
};

// You want to destructure each of them into a few variables. But if there’s no matching item in the array or object, you want to fallback to a default value.

// When defining the variable names, use the equal sign (=) and the desired default value to assign a default

const [best = 'Dumbledore', worst = 'Ron'] = arr;
const {name = 'Hermione Granger', house = 'Gryffindor', ...otherDetails} = obj;

console.log(best, name, house)