// js/js_ejercicio3.js

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('itemInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('itemList');

  if (!input || !addBtn || !list) { //Buenas prácticas
    console.warn('Elementos #itemInput, #addBtn o #itemList no encontrados en el DOM');
    return;
  }

  function addItem() {
    const text = input.value.trim(); //Evitar espacios vacios
    if (!text) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text; // Evitar innerHTML (XSS)

    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = 'Eliminar';
    del.className = 'delete-btn';
    del.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(del);
    list.appendChild(li);

    input.value = ''; // Borra el texto del campo
    input.focus(); // Vuelta el foco en el campo
  }

  addBtn.addEventListener('click', addItem);

  input.addEventListener('keydown', (e) => { // Utilizar enter para añadir texto
    if (e.key === 'Enter') {
      addItem();
    }
  });
});
