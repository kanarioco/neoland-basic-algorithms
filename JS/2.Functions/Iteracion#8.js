/*
**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que 
lo conforma. 

Puedes usar este array para probar tu función:

```jsx
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
  // insert code
}
```
*/


const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];


function repeatCounter(param) {
  const wordCount = {};

  param.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
}

console.log(repeatCounter(counterWords));


// OK