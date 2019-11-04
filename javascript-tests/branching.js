let height = 5;
if (height >= 5) {
    console.log('We have a big one');
}

height = 5;
if (height >= 5) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}

height = 25;
if (height >= 5) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('Bigger than 0');
} else {
    console.log('We have a negative number or invalid number')
}

height = '25';

switch(height) {
    case 'little':
        console.log('Switch: a little one is smaller than five');
        break;

    case ('big'):
        console.log('Switch: a big one is five or greater');
        break;

    case ('25'):
        console.log("It's 25 baybee!!!!!!!!!!!!!!!!!!!!!");
        break;

    default:
        console.log('We do not know about this one.')
}

window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');
    
    simpleBranchAction.onclick = (event) => {
        let height = 25;
        if (height >= 5) {
            simpleBranchDisplay.textContent = 'We have 25 baybee!!!!';
        } else {
            simpleBranchDisplay.textContent = 'We DON"T have 25??';
        }   
    }
}