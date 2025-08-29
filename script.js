document.addEventListener('DOMContentLoaded', () => {
  const btnStart = document.getElementById('btn-start');
  const startScreen = document.getElementById('start-screen');
  const board = document.getElementById('board');
  const dateEl = document.getElementById('date');

  btnStart.addEventListener('click', () => {
    startScreen.style.display = 'none';
    board.classList.remove('hidden');

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = today.toLocaleDateString('es-ES', options);
  });

  function addTask(ul, text) {
    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed', checkbox.checked);
    });

    const divText = document.createElement('div');
    divText.className = 'text';
    divText.textContent = text;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.textContent = '🗑️';
    btnDelete.addEventListener('click', () => li.remove());

    actions.appendChild(btnDelete);
    li.appendChild(checkbox);
    li.appendChild(divText);
    li.appendChild(actions);

    ul.appendChild(li);
  }

  document.getElementById('btn-work').addEventListener('click', () => {
    const text = prompt('Escribe tu tarea:');
    if (text) addTask(document.getElementById('work'), text);
  });

  document.getElementById('btn-personal').addEventListener('click', () => {
    const text = prompt('Escribe tu tarea:');
    if (text) addTask(document.getElementById('personal'), text);
  });

  document.getElementById('btn-others').addEventListener('click', () => {
    const text = prompt('Escribe tu tarea:');
    if (text) addTask(document.getElementById('others'), text);
  });
});
