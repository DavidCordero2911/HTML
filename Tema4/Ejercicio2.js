//Diseña un script que vaya leyendo números y guardándolos en un array. 
//Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. 
//La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.
const numbers = [];
let input;

// Bucle infinito para solicitar números al usuario
while (true) {
    input = prompt("Ingrese un número (0 para salir):");
    
    // Verificar si la entrada es nula, vacía o no es un número
    if (input === null || input.trim() === "" || isNaN(input)) {
        console.log("Entrada no válida. Saliendo...");
        break;
    }
    
    // Convertir la entrada a número
    let num = Number(input);
    
    // Si el usuario ingresa 0, se detiene el bucle
    if (num === 0) break;
    
    // Agregar el número al array
    numbers.push(num);
}

// Mostrar los números ingresados en la consola
console.log("Números ingresados:", numbers);

// Contar la cantidad de números pares e impares
let evenCount = numbers.filter(n => n % 2 === 0).length;
let oddCount = numbers.length - evenCount;

// Mostrar el conteo de números pares e impares
console.log(`Números pares: ${evenCount}`);
console.log(`Números impares: ${oddCount}`);
