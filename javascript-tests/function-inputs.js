window.onload = () => {
    const feetToInchesAction = 
        document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };                                                                                                      /*End of Feet To Inches*/
    const milesToFeetAction = 
    document.getElementById('milesToFeetAction');

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput'); //Tales 'milesToFeet' id from the html page
        const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value); // textContent = "change this element you found to what's in the parameter"
    };                                                                                                      /*End of Miles to Feet*/
    const areaOfTriangleAction = 
    document.getElementById('areaOfTriangleAction');

    areaOfTriangleAction.onclick = () => {
        var baseAndHeight = [];
        baseAndHeight = document.getElementById('baseOfTriangleInput');
        baseAndHeight = document.getElementById('heightOfTriangleInput');
        console.log(baseAndHeight);
        const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay'); //what if i used a .this command!!!!!!!!!!!!!!!!!!!!
        
        areaOfTriangleDisplay.textContent = areaOfTriangle(baseAndHeight.value);
        console.log(baseAndHeight);
        console.log(areaOfTriangle);
    };                                                                                                      /*End of Area of Triangle YOURE NOT DONE DOING THIS ONE*/
    const areaOfCircleAction = 
    document.getElementById('areaOfCircleAction');

    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('areaOfCircleInput');
        const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
};                                                                                                          /*End of Area of Circle*/
};/*End of windows.onload*/
    const feetToInches = (feet) => {
        return feet * 12;
    }
    const milesToFeet = (miles) => {
        return miles * 5280;
    }
    const areaOfTriangle = (base, height) => {
        return base * height;
    }
    const areaOfCircle = (radius) => {
        return Math.PI * raduius^2;
    }
/*End of everything*/



