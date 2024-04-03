document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.getElementById('text_box');
    textBox.addEventListener('keypress', function(e) {
        // Enter 키가 눌렸는지 확인
        if (e.key === 'Enter') {
            e.preventDefault(); // form이 실제로 제출되는 것을 방지
            const todoText = textBox.value.trim();
            if (todoText) { // 텍스트가 비어있지 않은 경우에만 실행
                addTodoItem(todoText);
                textBox.value = ''; // 입력 필드 초기화
            }
        }
    });
});

function addTodoItem(text) {
    const todoContainer = document.getElementById('todo-items');
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-item');
    
    const todoContent = document.createElement('span');
    todoContent.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        todoContainer.removeChild(todoElement);
    };

    todoElement.appendChild(todoContent);
    todoElement.appendChild(deleteButton);
    todoContainer.appendChild(todoElement);
}