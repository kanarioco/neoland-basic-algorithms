/*
Iteración #6: Bucles

1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/


//! sintaxis for --->
/* 
for (inicialización; condición; actualización) {
    código a ejecutar
}
*/


for (let ejer1 = 0; ejer1 <= 9; ejer1++) {
    console.log(ejer1);
  }



for (let ejer2 = 0; ejer2 <= 9; ejer2++) {
  if(ejer2 % 2 == 0) {
		console.log(ejer2)
	}
}



for (let ejer3 = 1; ejer3 <= 10; ejer3++) {
  if (ejer3 < 10) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!');
  }
}
  
// OK 