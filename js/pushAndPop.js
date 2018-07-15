// Push and Pop en arreglos

// var arreglo = [1, 2, "antonio", 3, true];

// console.log(arreglo);
//length tamaño
// console.log("el tamaño del arreglo es " + arreglo.length);

// hacer un arreglo de calificaciones 1,2,3 
//imprimir el arreglo y imprimir el tamaño del arreglo

var calificaciones = [8, 9, 10];
// console.log(calificaciones);
// console.log(calificaciones.length);
var suma = 0;
for(var i = 0; i < calificaciones.length; i++){
	console.log("valor de calificaciones" +calificaciones[i]);
	console.log("valor de suma " + suma);
	suma = suma + calificaciones[i];
}
console.log(suma);

// // calificaciones.push(10);
// calificaciones.push(5);
// calificaciones.push(2);
// console.log(calificaciones);
// console.log(calificaciones.length);
