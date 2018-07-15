var calificaciones = [];

calificaciones.push(9);
calificaciones.push(6);
calificaciones.push(8);
calificaciones.push(6);
calificaciones.push(7);

var suma = 0;
for( var i = 0; i < calificaciones.length; i++){
	suma += calificaciones[i]; 
}

console.log(calificaciones);
console.log(calificaciones.length);

console.log(suma);

var division = suma / calificaciones.length;

console.log(division);