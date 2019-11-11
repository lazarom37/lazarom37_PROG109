window.onload = () => {
    let simpleFunction = "functions should consist of statements designed to perform a single task.";
    let functionParameters = "Many functions take parameters.";
    let functionReturn = "Many functions return values";

    console.log(simpleFunction);
    console.log(functionParameters);
    console.log(functionReturn);
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    
    function something() {
        console.log('something');
        simpleFunctionDisplay.textContent = "something";
    }

    functionCallsAction.onclick = something;
    const data = nameDisplay.value;
}