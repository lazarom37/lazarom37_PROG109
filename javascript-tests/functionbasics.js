function start(){
    function simpleFunction(){
        System.out.println("functions should consist of statements designed to perform a single task");
    }
    function functionParameters(){
        System.out.println("many functions take parameters");
    }
    function functionReturn(){
        System.out.println("many functions return values");
    }
}
console.log(start);
window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "simple";
    }
    functionCallsAction.onclick = simple;
}

const addToListAction = document.getElementById("functionCallsAction");
const list = document.getElementById("listDisplay");
const input = document.getElementById("nameDisplay");

elfCode.appendToList;