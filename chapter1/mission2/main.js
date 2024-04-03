function addTodoItem(text) {
    const todoContainer = document.getElementById('todo_items');
    const doneContainer = document.getElementById('done_items');
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo_item');
    
    const todoContent = document.createElement('span');
    todoContent.textContent = text;
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.onclick = function() {
        todoElement.removeChild(completeButton);
        const closeButton = document.createElement('button');
        closeButton.textContent = '삭제';
        closeButton.onclick = function() {
            doneContainer.removeChild(todoElement);
        };
        todoElement.appendChild(closeButton);
        todoContainer.removeChild(todoElement);
        doneContainer.appendChild(todoElement);
    };
    todoElement.appendChild(todoContent);
    todoElement.appendChild(completeButton);
    todoContainer.appendChild(todoElement);
}
document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.getElementById('text_box');
    textBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const todoText = textBox.value.trim();
            if (todoText) {
                addTodoItem(todoText);
                textBox.value = '';
            }
        }
    });
});
