// Sugar sintax

// let numero = 1;

// numero = numero + 1;
// numero += 1;
// numero++;

// for(let i = 0; i < 5; i++){

// }

// function suma(numeroA, numeroB){
//     return numeroA + numeroB;
// };

// suma(1,2) // 3

// ...Spread operator

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const otroArray = ["a", "b"];
// const nuevoArray = [...otroArray, ...array];

// console.log(nuevoArray);

// const producto = {
//     id: 1,
//     precio: 100,
//     nombre: "Alta compu",
//     categoria: "PC",
// };

// console.log({ ...producto, cantidad: 2 });

// Desestructuración / Destructuring

// let objetoDePrueba = {
//     nombre: "Lucas (17 años)",
//     edad: 17,
//     mayorDeEdad: false
// };


// Los dos bloques de abajo representan lo mismo;

// const { nombre, edad, mayorDeEdad } = props;

// const nombre = props.nombre;
// const edad = props.edad;
// const mayorDeEdad = props.mayorDeEdad;


// const array = ["Hola", "Ciao", "Hello", "Egun on"];

// // const castellano = array[0];
// // const italiano = array[1];
// // const ingles = array[2];
// // const euskera = array[3];

// const [castellano, italiano, ingles, euskera] = array;

// console.log(castellano)
// console.log(italiano)
// console.log(ingles)
// console.log(euskera)


// const [castellano, italiano, ingles, euskera] = dato1; // Como es un array, no importa el nombre, importa el orden.
// const { nombre, edad, mayorDeEdad } = dato2; // Como es un objeto, no importa el orden, importa el nombre.