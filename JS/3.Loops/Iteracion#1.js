/*
**Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que 
incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

```jsx
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
```
*/


const products = [
  'Camiseta de Pokemon', 
  'Pantalón coquinero', 
  'Gorra de gansta', 
  'Camiseta de Basket', 
  'Cinrurón de Orión', 
  'AC/DC Camiseta'
]

products.forEach(el => {
  if (el.includes("Camiseta")) {
    console.log(el);
  }
});


// OK