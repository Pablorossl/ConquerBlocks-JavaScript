//Crea una página con un campo de entrada para especificar la 
// longitud de una contraseña y un botón que diga 
// “Generar contraseña”. 

// Al hacer clic en el botón, se debe mostrar una contraseña 
// generada aleatoriamente usando letras, números y caracteres 
// especiales. 

// Si la longitud es menor a 4 o el campo está vacío, 
// muestra un mensaje de error indicando que la longitud 
// debe ser mayor o igual a 4.

//Buenas prácticas
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('password-form');
	const lengthInput = document.getElementById('length');
	const resultEl = document.getElementById('result');
	const errorEl = document.getElementById('error');

	//Todas las letras, digitod y caracteres especiales
	const lower = 'abcdefghijklmnopqrstuvwxyz';
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const digits = '0123456789';
	const specials = '!@#$%^&*()_+[]{}|;:,.<>?/`~-=\\"\\\\';
	const allChars = lower + upper + digits + specials; //Juntamos todo en una variable

		//Seleccion de caracteres aleatorios
	function randInt(max) {
		return Math.floor(Math.random() * max);
	}

	//Mezclamos los elementos del array generado de forma aleatoria e uniforme
	function shuffle(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = randInt(i + 1);
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}


	//Generador de contraseña
	function generatePassword(len) {
		const out = [];
		
		out.push(lower[randInt(lower.length)]);
		out.push(upper[randInt(upper.length)]);
		out.push(digits[randInt(digits.length)]);
		out.push(specials[randInt(specials.length)]);

		for (let i = 4; i < len; i++) {
			out.push(allChars[randInt(allChars.length)]);
		}

		return shuffle(out).join(''); //Mezclamos elementos
	}

	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		errorEl.textContent = '';
		resultEl.textContent = '';

		const n = parseInt(lengthInput.value, 10);
		if (!n || n < 4) {
			errorEl.textContent = 'La longitud debe ser mayor o igual a 4.';
			return;
		}

		const pwd = generatePassword(n);
		resultEl.textContent = pwd;
	});
});

