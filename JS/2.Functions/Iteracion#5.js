/*
**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume. 

Puedes usar este array para probar tu función:

```jsx
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  // insert code
}
```
*/


const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];



function averageWord(param) {
 
  const num = param.filter(el => typeof el == "number") ; // [ 6, 1, 1, 8 ]
      const sum1 = num.reduce((a, b)=> a + b ) ; // 16

  const stri = param.filter(el =>typeof el == "string") ; // [ 'Rayo', 'vallecano', '10', 'upgrade', 'hub' ]
      const eachElLength = stri.map((el)=> el.length) ; // [ 4, 9, 2, 7, 3 ]
      const sum2 = eachElLength.reduce((a, b)=> a + b) ; // 25

    return console.log(sum1 + sum2); // 16 + 25
 }

averageWord(mixedElements)

// OK