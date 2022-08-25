const numbers = [1,3,5,13];

// Con la función reduce podemos contar los elementos devolviendo un valor escalar
let result = numbers.reduce(
    ( count, element ) => count + element
);

console.log(result);