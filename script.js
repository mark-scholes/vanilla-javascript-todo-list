// Selectors

const toDoInput = document.querySelector(".todo-input-box");
const addTodos = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners

addTodos.addEventListener("click", addTodo);

//Funcitons
function addTodo(e) {
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Todo Li
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-text");
  todoItem.innerText = toDoInput.value;
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
  toDoInput.value = "";
}
