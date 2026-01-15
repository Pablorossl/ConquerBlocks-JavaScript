// js/js_ejercicio4.js

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('filterInput'); // Selecionamos el filtro
  const list = document.getElementById('brandList'); //Selecionamos la lista

  if (!input || !list) { //Buenas practicas
    console.warn('Elementos #filterInput o #brandList no encontrados en el DOM');
    return;
  }

  const brands = [
    'Toyota', 'Ford', 'Chevrolet', 'Honda', 'BMW',
    'Mercedes', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai'
  ];

  function render(coches) {
    list.textContent = '';
    if (coches.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No hay resultados';
      list.appendChild(li);
      return;
    }
    coches.forEach(coche => { 
      const li = document.createElement('li');
      li.textContent = coche;
      list.appendChild(li);
    });
  }

  render(brands); // Mostrar lista completa al inicio

  input.addEventListener('input', () => {   // Filtrar en tiempo real
    const q = input.value.trim().toLowerCase(); // q cada letra y b cada coche
    if (!q) {
      render(brands);
      return;
    }
    const filtered = brands.filter(b => b.toLowerCase().includes(q));
    render(filtered);
  });
});
