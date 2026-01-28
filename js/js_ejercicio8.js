//Crea una página con un campo de texto donde el usuario pueda 
// escribir un párrafo. Muestra en tiempo real el número de 
// caracteres y palabras ingresados debajo del campo. 

//Palabras deben ser separadas por espacios, y los caracteres no 
// deben incluir espacios ni saltos de línea.


//Buenas prácticas
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('input-text');
  const wordsEl = document.getElementById('words-count');
  const charsEl = document.getElementById('chars-count');

  function computeStats(text) {
    // Juntamos lineas, contamos palabras por cada espacio
    const rawWords = text.length === 0 ? [] : text.split(' ');
    const words = rawWords.filter(w => w.trim().length > 0).length;

    // Excluimos espacios y nuevas lineas
    const chars = text.replace(/\r?\n/g, '').replace(/ /g, '').length;

    return { words, chars };
  }

  function update() {
    const text = textarea.value;
    const { words, chars } = computeStats(text);
    wordsEl.textContent = `Palabras: ${words}`;
    charsEl.textContent = `Caracteres: ${chars}`;
  }

  // Actualizar update
  textarea.addEventListener('input', update);

  // Inicializar contador
  update();
});

