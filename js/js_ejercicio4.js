
// Crea una página con un campo de texto y una lista predefinida de 
// elementos.Mientras el usuario escribe en el campo, 
// la lista debe actualizarse en tiempo real para mostrar 
// solo los elementos que contienen el texto escrito.




// Buenas prácticas
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
    if (coches.length === 0) { // Si no hay coches
      const li = document.createElement('li'); // Creamos una lista
      li.textContent = 'No hay resultados'; // Que diga "No hay resultados"
      list.appendChild(li); // La añadimos a la lista
      return;
    }
    coches.forEach(coche => {  //Recorremos todas los coches
      const li = document.createElement('li');
      li.textContent = coche;
      list.appendChild(li);
    });
  }

  render(brands); // Mostrar lista completa al inicio

  // q representa cada letra y b representa cada coche
  input.addEventListener('input', () => {   // Filtrar en tiempo real
    const q = input.value.trim().toLowerCase();
    if (!q) {
      render(brands);
      return;
    }
    const filtered = brands.filter(b => b.toLowerCase().includes(q));
    render(filtered);
  });
});
