// Selectors

const toDoInput = document.querySelector(".todo-input-box");
const addTodos = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners

addTodos.addEventListener("click", addTodo);
todoList.addEventListener("click", alterTodo);

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

function alterTodo(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "delete-todo") {
    const parent = item.parentElement;
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
