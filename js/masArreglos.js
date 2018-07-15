var calificaciones = [];
cal = "s";
while(cal != 0){
	var cal = prompt("Ingresa una calificación");
	cal = parseFloat(cal);
	calificaciones.push(cal);
}
console.log(calificaciones);
console.log(calificaciones.length -1);

var suma = 0;
for( var i = 0; i < (calificaciones.length - 1); i++){
 	suma += calificaciones[i]; 
 }

 var division = suma / calificaciones.length;
 console.log(division);