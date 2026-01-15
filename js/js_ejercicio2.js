// js/js_ejercicio2.js

// Ejercicio 2: contador de clics

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('countBtn'); //Seleccionar contador
  const display = document.getElementById('clickCount'); //Seleccionar boton de click
  
  if (!btn || !display) { // Comprobar si falta algun elemento (buenas prácticas)
    console.warn('Elementos #countBtn o #clickCount no encontrados en el DOM');
    return;
  }

  // SessionStorage
  const KEY = 'ej2_clicks';
  const stored = sessionStorage.getItem(KEY);
  let count = stored ? parseInt(stored, 10) : 0; // Contador inicial desde sessionStorage

  // Mostrar valor inicial
  display.textContent = `Clics: ${count}`;

  btn.addEventListener('click', () => {
    count += 1;
    display.textContent = `Clics: ${count}`;

    try {
      sessionStorage.setItem(KEY, String(count));
    } catch (e) {
      console.warn('No se pudo escribir en sessionStorage:', e);
    }
  });
});

// GUARDO LOS CLICKS EN EL SESION STORAGE DE EXTRA
