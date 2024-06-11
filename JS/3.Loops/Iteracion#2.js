/*
**Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. 
Una vez lo tengas compruébalo con un ***console.log***. 

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función:

```jsx
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
```
*/


const alumns = [
  {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
  {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
  {name: 'Juan Miranda', T1: false, T2: true, T3: true},
  {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
  {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

/*
for (const el of alumns) {
  if(true >= 2) {
    el["isApproved"] = true;
  } else {
    el["isApproved"] = false;
  }
  }
  
console.log(alumns);
*/ 

/*
alumns.forEach(el => {
  if (el.includes(2*true)) {
    el.push(isApproved: true)
  } else {
    el.push(isApproved: false)
  }
 }
)
*/

/*
alumns.forEach(el => {
  if (true >= 2) {
    el.push(isApproved: true)
  } else {
    el.push(isApproved: false)
  }
  console.log(alumns);
 }
)
*/
/*
alumns.forEach(el => {
  if (true >= 2) {
    el["isApproved"] = true;
  } else {
    el["isApproved"] = false;
  }
  console.log(alumns);
 }
)
*/

mal X

