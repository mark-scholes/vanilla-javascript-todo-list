// Selectors

const toDoInput = document.querySelector(".todo-input-box");
const addTodos = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".fiter-todos");

//Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
addTodos.addEventListener("click", addTodo);
todoList.addEventListener("click", alterTodo);
filterOption.addEventListener("click", filterTodo);

//Funcitons
function addTodo(e) {
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Todo Li
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-text");
  let text = toDoInput.value.trim();
  todoItem.innerText = text;
  todoDiv.appendChild(todoItem);
  // Add todo to local storage
  saveToLocalStorage(text);
  //create buttons
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-todo");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-todo");
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  todoDiv.appendChild(completeButton);
  todoDiv.appendChild(deleteButton);

  //   //append created todo to list
  todoList.appendChild(todoDiv);
  toDoInput.value = "";
}

function alterTodo(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "delete-todo") {
    const parent = item.parentElement;
    removeLocalTodos(parent);
    //Animate delete transition
    parent.classList.add("deleting");
    parent.addEventListener("transitionend", () => {
      parent.remove();
    });
  }
  // mark completed.
  if (item.classList[0] === "complete-todo") {
    const parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (i) {
    switch (e.target.value) {
      case "all":
        i.style.display = "flex";
        break;
      case "completed":
        i.style.display = i.classList.contains("completed") ? "flex" : "none";
        break;
      case "incomplete":
        i.style.display = !i.classList.contains("completed") ? "flex" : "none";
    }
  });
}

function checkLocalStorage() {
  //check for existing todos
  let currentTodos;
  if (localStorage.getItem("currentTodos") === null) {
    currentTodos = [];
  } else {
    currentTodos = JSON.parse(localStorage.getItem("currentTodos"));
  }
  return currentTodos;
}

function saveToLocalStorage(todo) {
  let currentTodos = checkLocalStorage();
  // Save to local storage
  currentTodos.push(todo);
  localStorage.setItem("currentTodos", JSON.stringify(currentTodos));
}

function getTodos() {
  let currentTodos = checkLocalStorage();
  currentTodos.forEach((todo) => {
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Todo Li
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-text");
    todoItem.innerText = todo;
    todoDiv.appendChild(todoItem);
    //create buttons
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-todo");
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-todo");
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(deleteButton);

    //append created todo to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let currentTodos = checkLocalStorage();
  let elementToRemove = todo.children[0].innerText;
  currentTodos = currentTodos.filter((item) => item !== elementToRemove);
  localStorage.setItem("currentTodos", JSON.stringify(currentTodos));
}
