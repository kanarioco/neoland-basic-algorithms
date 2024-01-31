/*
**Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe 
dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y 
la posición de dicho elemento y por la contra un false. 

Puedes usar este array para probar tu función:

```jsx
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {
  // insert code
}
```
*/


const nameFinder = [
    "Peter",
    "Steve",
    "Tony",
    "Natasha",
    "Clint",
    "Logan",
    "Xabier",
    "Bruce",
    "Peggy",
    "Jessica",
    "Marc",
  ];

  function finderName(param) {
        if (param.includes(nombre)) {
        return [true, param.indexOf(nombre)];
    } else {
        return false;
    }
  }
  nombre = "Bruce" 
  console.log(finderName(nameFinder));

// OK  