window.onload = () => {
    const elfCode = {
        appendToList: ListeningStateChangedEvent (list, value) =>{
            const li = document.createElement;("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }

    };
const listButton = document.getElementById("")