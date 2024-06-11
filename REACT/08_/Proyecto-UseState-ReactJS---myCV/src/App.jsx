import { useState } from 'react'
import './App.css'
import { Hero, About, Education, Experience, More, Divider  } from './components'
import { CV } from './cv/Cv'


const { hero, education, experience, languages, habilities, volunteer } = CV


function App() {
  const [showEducation, setEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <Divider> <h3>About me</h3> </Divider>
      <About hero={hero} />
      <Divider>
        <button className={showEducation ? 'active' : ''} onClick={() => setEducation(true)}>Education</button>
        <button className={!showEducation ? 'active' : ''} onClick={() => setEducation(false)}>Experience</button>
      </Divider>
      <div>
        {showEducation ? (
        <Education education={education} />
        ) : (
        <Experience experience={experience} />
        )}
      </div>
      <More
      languages={languages}
      habilities={habilities}
      volunteer={volunteer}
      />
    </div>
  )
}

export default App
