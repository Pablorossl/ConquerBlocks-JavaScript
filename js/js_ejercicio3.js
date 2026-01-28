// Crea una página con un campo de texto, un botón que 
// diga "Agregar", y una lista vacía debajo:

      //Cuando el usuario escriba un texto y haga clic en "Agregar", 
      // el texto debe añadirse como un nuevo elemento de la lista.

      //Añade un botón al lado de cada elemento para eliminarlo de 
      // la lista.


//Esperar a que el código esté parseado (Buenas práticas)
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('itemInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('itemList');

 //Comprobar si falta algun elemento (buenas prácticas)
  if (!input || !addBtn || !list) {
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
