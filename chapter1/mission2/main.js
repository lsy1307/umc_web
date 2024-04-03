function addTodoItem(text) {
    const todo = document.getElementById('todo_items');
    const done = document.getElementById('done_items');
    const _object = document.createElement('div');
    _object.classList.add('todo_item');
    
    const contents = document.createElement('span');
    contents.textContent = text;
    const cb = document.createElement('button');
    cb.textContent = '완료';
    cb.onclick = function() {
        _object.removeChild(cb);
        const clb = document.createElement('button');
        clb.textContent = '삭제';
        clb.onclick = function() {
            done.removeChild(_object);
        };
        _object.appendChild(clb);
        todo.removeChild(_object);
        done.appendChild(_object);
    };
    _object.appendChild(contents);
    _object.appendChild(cb);
    todo.appendChild(_object);
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
