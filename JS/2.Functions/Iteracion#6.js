/*
**Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen 
elementos duplicados, en caso que existan los elimina para retornar un array 
sin los elementos duplicados. 
 
Puedes usar este array para probar tu función:

```jsx
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  // insert code
}
```
*/


const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];

 


/*
  function removeDuplicates(param) {
   
    return param.filter((prodA, prodB) => prodA = prodB )

  }
console.log(removeDuplicates(duplicates));
*/


/*
function removeDuplicates(param) {
    let dup = param.map((prodA, prodB) => prodA == prodB )
    if (true) {
        param.splice(param.prodB)  
    }
    return dup
   }

  console.log(removeDuplicates(duplicates));
 */


/*function removeDuplicates(param) {
    let dup = param.map((prodA, prodB) => prodA == prodB )
    if (true) {
        param.splice(param.prodB)  
    }
    return dup
   }

  console.log(removeDuplicates(duplicates));*/

  //function removeDuplicates(param) {
  //const dup = duplicates.map((a , b) => a === b )

  //console.log(dup);
  
 
 /* 
  function removeDuplicates(param) {
    param.forEach(element => {
      if (param.includes(element)) {
     }
      return param.splice(element)
  });
}

console.log(removeDuplicates(duplicates)); 
*/


function removeDuplicates(param) {
  const uniqueElements = {};
  const result = [];

  param.forEach(el => {
      if (!uniqueElements[el]) {
          uniqueElements[el] = true;
          result.push(el);
      }
  });
  return console.log(result);
}

removeDuplicates(duplicates);


// OK ------- revisar