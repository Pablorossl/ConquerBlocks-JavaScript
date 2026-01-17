// js/js_ejercicio5.js

document.addEventListener('DOMContentLoaded', () => {
  const aInput = document.getElementById('numA');
  const bInput = document.getElementById('numB');
  const addBtn = document.getElementById('addBtn');
  const subBtn = document.getElementById('subBtn');
  const mulBtn = document.getElementById('mulBtn');
  const divBtn = document.getElementById('divBtn');
  const resultEl = document.getElementById('result');

  if (!aInput || !bInput || !addBtn || !subBtn || !mulBtn || !divBtn || !resultEl) {
    console.warn('Elementos del DOM para ejercicio 5 no encontrados');
    return;
  }

  function show(msg, isError = false) {
    resultEl.textContent = msg;
  }

  function getNumbers() {
    const aStr = aInput.value.trim();
    const bStr = bInput.value.trim();
    if (aStr === '' || bStr === '') return { ok: false, reason: 'Introduce ambos números' };
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);
    if (Number.isNaN(a) || Number.isNaN(b)) return { ok: false, reason: 'Entradas no válidas' };
    return { ok: true, a, b };
  }

  function compute(op) { //Funcion de operaciones
    const res = getNumbers();
    if (!res.ok) {
      show(res.reason, true);
      return;
    }
    const { a, b } = res;
    let out;
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

  addBtn.addEventListener('click', () => compute('add'));
  subBtn.addEventListener('click', () => compute('sub'));
  mulBtn.addEventListener('click', () => compute('mul'));
  divBtn.addEventListener('click', () => compute('div'));
});
