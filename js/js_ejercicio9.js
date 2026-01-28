//Crea una aplicación de lista de tareas. Cada tarea debe incluir
// un texto y un checkbox para marcarla como completada. 

// Las tareas se deben guardar en localStorage para que persistan 
// incluso si la página se recarga. Debe incluir un botón para 
// limpiar todas las tareas completadas y actualizar el localStorage.

//Buenas prácticas
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'ej9_tasks_v1';

  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('tasks-list');
  const clearCompletedBtn = document.getElementById('clear-completed');
  const clearAllBtn = document.getElementById('clear-all');

  let tasks = []; //Variable para las tareas

  //Restauramos estado previo de la lista de tareas al cargar la página
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      tasks = raw ? JSON.parse(raw) : [];
    } catch (e) {
      tasks = [];
    }
  }

  //Guardamos la tarea en el LocalStorage
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  //Evitamos mostras una lsta vacía
  function render() {
    list.textContent = '';
    if (tasks.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No hay tareas todavía.';
      li.className = 'small';
      list.appendChild(li);
      return;
    }

    //Renderizamos cada tarea para marcarla completada y eliminarla
    tasks.forEach(task => {
      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!task.completed;
      checkbox.dataset.id = task.id;

      const span = document.createElement('span');
      span.textContent = task.text;
      span.className = 'task-text' + (task.completed ? ' completed' : '');

      const del = document.createElement('button');
      del.textContent = 'Eliminar';
      del.dataset.id = task.id;
      del.style.background = '#f3f4f6';
      del.style.border = '1px solid #e5e7eb';
      del.style.borderRadius = '6px';
      del.style.cursor = 'pointer';

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(del);

      list.appendChild(li);
    });
  }

  //Funcion para Añadir tarea
  function addTask(text) {
    const task = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), text, completed: false };
    tasks.push(task);
    save();
    render();
  }

    //Añadimos la tarea
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const txt = input.value.trim();
    if (!txt) return;
    addTask(txt);
    form.reset();
    input.focus(); 
  });

  list.addEventListener('click', (e) => {
    const id = e.target.dataset && e.target.dataset.id;
    if (!id) return;

    //Eliminamos tarea del ID si el boton es BUTTON
    if (e.target.tagName === 'BUTTON') {
      tasks = tasks.filter(t => t.id !== id);
      save();
      render();
    }
  });

  //Detectamos cambios en checkboxes y buscamos tarea por ID
  list.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      const id = e.target.dataset.id;
      const t = tasks.find(x => x.id === id);
      if (t) {
        t.completed = e.target.checked;
        save();
        render();
      }
    }
  });

  //Eliminamos tareas completadas
  clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    save();
    render();
  });

  //Confirmación para el usuario
  clearAllBtn.addEventListener('click', () => {
    if (!confirm('¿Borrar todas las tareas?')) return;
    tasks = [];
    save();
    render();
  });

  load();
  render();
});

