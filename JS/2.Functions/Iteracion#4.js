/*
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. 

Puedes usar este array para probar tu función:

```jsx
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
```
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  const suma = param.reduce((a, b) => a + b);
    return suma / param.length ; 
  }

console.log(average(numbers));

// OK