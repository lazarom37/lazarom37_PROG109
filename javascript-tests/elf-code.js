const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}
const someAction = document.getElementById('someAction');
someAction.onclick = function() {
    // Handle the onclick event in here.
}