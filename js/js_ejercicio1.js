// js/js_ejercicio1.js
// Ejercicio 1: Crea una página web con un botón que diga 
// "Cambiar color". Cada vez que el usuario haga clic en el 
// botón, el color de fondo de la página debe cambiar a un color aleatorio.

//Funcion para crear colores aleatorios usando RGB
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); //Crear números aleatorios hasta 256
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('changeColor');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  console.log('js_ejercicio1 cargado y listo');
});
