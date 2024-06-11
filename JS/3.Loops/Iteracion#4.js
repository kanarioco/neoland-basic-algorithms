/*
**Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. 
Puedes usar este objeto:

```jsx
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```
*/


const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const el in alien) {
  console.log(el+": "+ alien[el]);
}

// OK