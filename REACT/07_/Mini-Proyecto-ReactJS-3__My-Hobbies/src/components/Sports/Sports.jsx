import { HOBBIES } from "../../hobbies/Hobbies"
import { Categoria } from "../Categoria/Categoria"
import "./Sports.css"


export const Sports = ({ name, team, image}) => {
  return (
    <div id="sport">
      <h1 id="deporte">{name} </h1>
      <figure id="team">
        <ul>            
            <h3 id="favorite">💗 Mi equipo:</h3>
            <br />
            <h2>{team}</h2>
        </ul>
        <img src={image} alt={name} width={200}/>
      </figure>
    </div>
  )
}



export const SportsGallery = () => {
  return (
    <div>
      <Categoria categoria={"🏆 DEPORTES 🏆"}></Categoria>
      {HOBBIES.sports.map((el) => (
      <Sports 
        name={el.name}
        image={el.image}
        team={el.favoriteTeam}
        key={el.name}>
      </Sports>  
      ))}
      
    </div>
  )
}

