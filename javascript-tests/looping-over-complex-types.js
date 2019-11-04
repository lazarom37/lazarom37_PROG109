function divider(){
    console.log('----------------');
    console.log('----------------');
}
const myArray = [];
const numbers = [1, 2, 3, 5, 7]

console.log(myArray);
console.log('Fourth item in the array:', numbers[3]);
console.log('The first number:', numbers[0]);
console.log('Length:', numbers.length);
console.log('The number 3:', numbers[numbers.length - 3]);
numbers.push(25);
console.log('Current list of numbers', numbers);
numbers.pop();
console.log('Current list of numbers after using pop command', numbers);

divider();

const cloudy = true;
const items = [1, 'two', [3, 4], false, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    //console.log('Value of i:', [i]);
    console.log('Item', items[i])
}
divider();

for (let item of items){
    console.log('Item', items);
}

divider();

console.log('Uh');

divider();

const myObject = {};

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}

console.log('Objects', myObject, smallNumbers);
console.log('Values in our object:', smallNumbers.one, smallNumbers.two, smallNumbers.three, smallNumbers['one']);

divider();

const myObjectA = {
    five: 5,
    six: 'six'
};            

myObjectA.newItem = 'This is a new item in my object.'

console.log('Object with new item: ', myObjectA);
console.log(myObjectA.five);
console.log(myObjectA.six);
console.log(myObjectA.newItem);

divider();
items.push(myObjectA);
console.log(items);