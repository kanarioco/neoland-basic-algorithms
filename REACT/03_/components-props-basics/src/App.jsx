
import './App.css'
import { Image } from './components/Image/Image'
import { Paragraph } from './components/Paragraph/Paragraph'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'
import { datos } from './data/data'

function App() {

return (
    <>
      <Title T_Text={datos.T_Text}/>
      <SubTitle S_Text={datos.S_Text}/>
      <Image url={datos.url} alt={datos.alt}/>
      <Paragraph P_Text={datos.P_Text}/>
    </>
  )
}

export default App


