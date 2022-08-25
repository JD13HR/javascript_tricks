const numbers = [1,3,5,13];

// Con la función reduce podemos contar los elementos devolviendo un valor escalar
let result = numbers.reduce(
    ( count, element ) => count + element
    // Incluso se podría iniciar con un valor base y a partir de ahi contar
    // ( count, element ) => count + element + 1
);

console.log(result);
