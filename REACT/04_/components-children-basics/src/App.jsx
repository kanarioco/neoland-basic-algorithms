
import './App.css'
import { Header, Main, Footer, Image} from './components'
import { datos } from './data/data'


function App() {


  return (
    <>
      <Header>
         <Image url={datos.url2} alt={datos.alt2}/>
      </Header>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
