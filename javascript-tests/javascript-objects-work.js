var person = {};
person.firstName = 'Marcus';
person.lastName = 'Lazaro';
person.fullName = person.firstName + " " + person.lastName;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

var calculator = {
    operand01: -1,
    operand02: -1,
    add: function() {'use strict';
        return this.operand01 + this.operand02;
    },
    subtract: function() {'use strict';
        return this.operand01 - this.operand02;
    }
};
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.firstName.length;
calculator.multiply = calculator.operand01 * calculator.operand02;

console.log(calculator.operand01);
console.log(calculator.operand02);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply);

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider('Calculator');
console.log('operand01 length of firstName = ', calculator.operand01);
console.log('operand01 length of lastName = ', calculator.operand02);

console.log('Add length of both first and last = ', calculator.add());
console.log('Subtract length of both first and last = ', calculator.subtract());
console.log('Multiply length of first and last = ', calculator.multiply);