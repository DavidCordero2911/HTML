//crea un vector de 100 números y devuelvas el sumatorio de todos los números.
function sumatorioVector() {
    let vector = new Array(100).fill(0).map(() => Math.floor(Math.random));
    let sumatorio = 0;
    for (let i = 0; i < vector.length; i++) {
        sumatorio += vector[i];
        }
    return sumatorio;
    }
