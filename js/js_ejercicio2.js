//Crea una página con un botón que diga "Contar clics" y 
// un texto inicial que muestre "Clics: 0". Cada vez que se haga clic 
// en el botón, el texto debe actualizarse para mostrar el número total 
// de clics realizados.




//Esperar a que el código esté parseado (Buenas práticas)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('countBtn'); 
  const display = document.getElementById('clickCount');
  
//Comprobar si falta algun elemento (buenas prácticas)
  if (!button || !display) { 
    console.warn('Elementos #countBtn o #clickCount no encontrados en el DOM');
    return;
  }

  //Lógica del contador
  let count =  0;
  display.textContent = `Clics: ${count}`; 
  button.addEventListener('click', () => { 
    count += 1; 
    display.textContent = `Clics: ${count}`;
  });
});
