const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const savedTodos = localStorage.getItem("todos");

if (savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(todoItem) {
    const li = document.createElement("li");
    li.id = todoItem.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", removeTodo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = todoItem.data;
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = {
        id: todos.length,
        data: todoInput.value,
    };
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

function removeTodo(event) {
    const parent = event.target.parentElement;
    parent.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(parent.id));
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
