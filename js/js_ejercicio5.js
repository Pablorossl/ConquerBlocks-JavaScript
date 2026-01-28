
// Crea una página con dos campos de entrada de números y cuatro botones:
//  "Sumar", "Restar", "Multiplicar", y "Dividir".

// Al hacer clic en cualquiera de los botones, debe mostrarse el 
// resultado de la operación en un área de texto o debajo de los botones.
//Asegúrate de validar los datos para evitar errores 
// (como división por cero o entradas vacías).



//Seleccionamos todos los botones e imputs
document.addEventListener('DOMContentLoaded', () => {
  const aInput = document.getElementById('numA');
  const bInput = document.getElementById('numB');
  const addBtn = document.getElementById('addBtn');
  const subBtn = document.getElementById('subBtn');
  const mulBtn = document.getElementById('mulBtn');
  const divBtn = document.getElementById('divBtn');
  const resultEl = document.getElementById('result');

  //Buenas prácticas
  if (!aInput || !bInput || !addBtn || !subBtn || !mulBtn || !divBtn || !resultEl) {
    console.warn('Elementos del DOM para ejercicio 5 no encontrados');
    return;
  }

  function getNumbers() {
    //Recortamos valores de los campos
    const aStr = aInput.value.trim(); 
    const bStr = bInput.value.trim();
    //Si el imput está vacío devolvemos un aviso
    if (aStr === '' || bStr === '') return { ok: false, reason: 'Introduce ambos números' };
    //Convertir cadenas a números
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);
    //Si no es un número decimos entradas no validas
    if (Number.isNaN(a) || Number.isNaN(b)) return { ok: false, reason: 'Entradas no válidas' };
    return { ok: true, a, b };
  }

  function compute(op) { //Funcion de operaciones
    const res = getNumbers();
    //Validamos de nuevo
    if (!res.ok) {
      show(res.reason, true);
      return;
    }

    const { a, b } = res; // Extraemos números
    let out; //Variable donde se guardará e resultado

    switch (op) { //Elegir la operación
      case 'add': out = a + b; break;
      case 'sub': out = a - b; break;
      case 'mul': out = a * b; break;
      case 'div':
        if (b === 0) { show('Error: división por cero', true); return; }
        out = (a / b).toFixed(2); break;
      default: return;
    }
    show(`Resultado: ${out}`);
  }

  //Calculamos la operación segun el boton clickeado
  addBtn.addEventListener('click', () => compute('add'));
  subBtn.addEventListener('click', () => compute('sub'));
  mulBtn.addEventListener('click', () => compute('mul'));
  divBtn.addEventListener('click', () => compute('div'));
});
