const todoContainer = document.querySelector(".todo-container");
const btnAddTask = document.querySelector("#add-btn");
const input = document.querySelector("#input");
const count = document.querySelector(".count");
let todos = [
  {
    id: 1,
    task: "Complete CSS checkbox tutorial",
    completed: false,
  },
  {
    id: 2,
    task: "Build todo app with custom checkboxes",
    completed: true,
  },
  {
    id: 3,
    task: "Practice JavaScript array methods",
    completed: false,
  },
];
renderTodos();
//   update count
function updateCount() {
  count.textContent = `${todos.length}`;
}
//   display todos and call updateCount
function renderTodos() {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.className = "list-item";
    todoItem.innerHTML = `<div class="item">
                <input type="checkbox" ${todo.completed ? "checked" : ""} name="" value="" />
                <p style="${todo.completed ? "text-decoration:line-through" : ""}">${todo.task}</p>
              </div>
              <span class="delete-btn"><i class="fa-solid fa-trash"></i></span>`;

    todoContainer.insertAdjacentElement("beforeend", todoItem);

    //   adding event listener on trash icon
    const btn = todoItem.querySelector(".delete-btn");
    btn.addEventListener("click", () => {
      todoItem.remove();
      deleteTodo(todo.id);
    });

    //checbox toggle event
    const checkbox = todoItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", () => toggleComplete(todo));
  });
  updateCount();
}

//   toggle checkbox on change
function toggleComplete(todo) {
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
}

function deleteTodo(id) {
  // using filter to eliminate particular todo on which click occur
  todos = todos.filter((todo) => todo.id !== id);
  updateCount();
}

function createToDoObject(task) {
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  return { id, task, completed: false };
}

//logic to add new todos to todoContainer and update todos array
function addToDos() {
  const task = input.value.trim();
  input.value = "";
  if (!task) {
    alert("Please enter a todo.");
    return;
  }
  // update the todos array
  const todo = createToDoObject(task);
  todos.push(todo);
  renderTodos();
}

//   logic to implement clear all
function clearAllTodos() {
  if (todos.length > 0) {
    if (confirm("Are you sure want to clear all todos?")) {
      todos = [];
      renderTodos();
    }
  }
}

//   add new task on button click
btnAddTask.addEventListener("click", addToDos);
//   add new task on enter press
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addToDos();
});

//   clear all todos
document.querySelector(".clear").addEventListener("click", clearAllTodos);
