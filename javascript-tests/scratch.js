const firstNames = ["John", "Jerry", "Jade", "Judy"];

function functionName(currentIndex){
    return firstNames[currentIndex];
}

function getValueFromArray(theArray, index){
    return theArray[index];
}

function add(a, b){
    return a + b;
}

const multiply = function(a, b){ //anon-kun function
    return a * b;
}
const subtract = (a,b) =>{
    return a - b;
}
const firstName = functionName(3);
console.log(firstNames[3]);

const arrayItem = getValueFromArray(firstNames, 2);
console.log(arrayItem);

const sum = add(2, 3);
console.log(sum);

const total = add(12, 33);
console.log(total);

const result = multiply(3, 5);
console.log(result);

const value = subtract(10,5);
console.log(value);