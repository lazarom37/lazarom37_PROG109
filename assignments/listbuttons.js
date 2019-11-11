const listButton = document.getElementById('add-to-list');    
const setTextButton = document.getElementById('set-text');
const userInput = document.getElementById('list-data');

window.onload = () => {
    //Part 1
    const setTextButton = document.getElementById('set-text');
    const userInput = document.getElementById('list-data');
    const listButton = document.getElementById('add-to-list');
    //Part 2
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
     }
 }

 listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}
