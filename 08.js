/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
// number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
// la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16



function countDeep(arr) {
  // Tu código aca:
  let num = 0;         //countDeep = contar en profundidad
  let str = 0;
  let bool = 0;
  let und = 0;
  let arrays = 1;
  function segunda(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arrays++;
        segunda(arr[i]);
      }
      if (typeof arr[i] === 'number') num++;
      if (typeof arr[i] === 'string') str++;
      if (typeof arr[i] === 'boolean') bool++;
      if (typeof arr[i] === 'undefined') und++;
    }
  }
  segunda(arr);
  return (((arrays - num) * str) / bool) ** und;

}
// No modifiques nada debajo de esta linea //

module.exports = countDeep