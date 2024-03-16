test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList"></ol>
    `;

    require('./todoList');
  
    const newTodoInput = document.getElementById('newTodoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todolist = document.getElementById('todoList');
  
    newTodoInput.value = 'New todolist!';
    addTodoBtn.click();

    console.log( todolist.innerHTML );
  
    expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
});