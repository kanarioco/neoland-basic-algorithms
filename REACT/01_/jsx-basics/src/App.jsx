import './App.css'
import { ListaPersonas, Saludo } from './components'



function App() {
  
  return (
    <>
    <h1>1. JSX. BASICS</h1>
    <h4>2. {Saludo(9)} </h4>
    <div className='persona'>
      <h4>4.</h4> 
      {ListaPersonas()} 
    </div>
    <h4>5. 
      <button onClick={estado()}>Pincha si no te gustan los perros 😂</button>
    </h4>
    </>
  )
}
//onClick={}
export default App


const estado = () => {
  return (
    estado ? <h3>PERRO</h3> : <h3>GATO</h3>
  )
}




