const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  var arr = [];
  if (this.right) {
    if (this.right.right === null) {
      arr.push(this.right.value);
      arr.push(this.value);
      return arr
    }
    this.value = this.right;

    return this.value.searchMaxTwo()
  }; var node = this.root;
  var traverse = function (node) {
    return !node.right ? node.value : traverse(node.right);
  };
  return traverse(node);
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
