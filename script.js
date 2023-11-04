let stack = [];

function renderStack() {
    const stackContainer = document.getElementById("stack-container");
    stackContainer.innerHTML = "";
    stack.forEach((item) => {
        const stackItem = document.createElement("div");      
        stackItem.className = "stack-item";
        stackItem.innerText = item;
        stackContainer.insertBefore(stackItem, stackContainer.firstChild);
        
    });
}

function pushElement() {
    const inputValue = prompt("Enter a value to push onto the stack:");
    if (inputValue !== null) {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
            stack.push(value);
            renderStack();
            
        } else {
            alert("Invalid input. Please enter an integer.");
        }
    }
}

function popElement() {
    if (stack.length > 0) {
        stack.pop();
        renderStack();
    } else {
        alert("Stack is empty. Nothing to pop.");
    }
}

window.onload = function() {
    renderStack();
};
