window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');
    //simpleObjectDisplay.textContent = 'Boopity Bopity Doo';
    const simpleObject = {
        firstName: 'Marcus',
        lastName: 'Lazaro',
        sayName: function() {
            console.log(this.firstName + " " + this.lastName);
            console.log(this.fullName);
            simpleObjectDisplay.textContent = this.fullName;
        }
    };

    simpleObjectAction.onclick = function() {
        simpleObject.sayName();
    }
    functionObjectAction.onclick = function() {
        functionObject.sayName();
    }
    customClassAction.onclick = function() {
        customClass.sayName();
    }

    
    simpleObject.dynamicMethod = function() {
        console.log('Dynamic Method');
    }
    function FunctionObject() {
        FunctionObject.prototype.sayName = function() {
            console.log("Function Object")
        }
    }
    
    class CustomClass {
        sayName() {
            console.log("Custom Class");
        }
    }
    
    //simpleObject.sayName();
    simpleObject.dynamicMethod();
    
    const functionObject = new FunctionObject();
    functionObject.sayName();
    
    const customClass = new CustomClass();
    customClass.sayName();
}