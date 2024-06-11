import './App.css'
import { MoviesGallery, ReadGallery, SportsGallery} from './components'


function App() {
  return (
    <>
      <h1 id="titulo">- Mini Proyecto ReactJS [3] -</h1>
      <ReadGallery/>
      <MoviesGallery/>
      <SportsGallery/>
    </>
  )
}
export default App