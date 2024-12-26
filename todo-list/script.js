document.getElementById('addButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('todoList').appendChild(li);
        todoInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
});