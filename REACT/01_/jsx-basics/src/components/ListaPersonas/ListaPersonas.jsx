import "./ListaPersonas.css"

const personas = [
    {nombre: "Juan",
     edad: 35,
     pelo: "moreno",
    },
    {nombre: "Fran",
     edad: 39,
     pelo: "pelirojo",
    },
    {nombre: "Maria",
     edad: 28,
     pelo: "rubia",
    },
  ]
  
export const ListaPersonas = () => {
  return (
    <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <p>Pelo: {persona.pelo}</p>
          </li>
        ))}
      </ul>
  )
}

