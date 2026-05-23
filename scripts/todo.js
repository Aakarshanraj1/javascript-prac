const todoList = [];

function rendertodo() {

  let name1 = '';

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i];

    const name = todoObject.name;
    const date = todoObject.date;

    name1 += `
      <div class="todo-row">

        <div class="js-cls">${name}</div>

        <div class="js-cls">${date}</div>

        <button onclick="
          todoList.splice(${i}, 1);
          rendertodo();
        " class="js-dlbt">
          Delete
        </button>

      </div>
    `;
  }

  document.querySelector('.js-name-show').innerHTML = name1;
}

function addTodo() {

  const element = document.querySelector('.js-newin');
  const element1 = document.querySelector('.js-date');

  const name = element.value;
  const date = element1.value;

  todoList.push({
    name: name,
    date: date
  });

  element.value = '';
  element1.value = '';

  rendertodo();
}