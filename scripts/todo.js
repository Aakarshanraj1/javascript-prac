const todoList = [];

function addTodo() {
  const element = document.querySelector('.js-name');
  const name = element.value;
  todoList.push(name);
  console.log(todoList);
  element.value = '';
}
function handleKey(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}