let nombre; // undefined // Esta declarada pero no inicializada

console.log(nombre);
nombre = "Isabel" // inferencia de tipo : Al darle un valor a la variable javascript asocia un tipo a un funciono del valor que se le asigna.
console.log(typeof nombre); // me devuelve tipo de dato: string
nombre = ['Juan', 'Pepe'];
console.log(typeof nombre);

nombre = nombre.toLowerCase();
console.log(nombre);

nombre = nombre.pop();
console.log(nombre);