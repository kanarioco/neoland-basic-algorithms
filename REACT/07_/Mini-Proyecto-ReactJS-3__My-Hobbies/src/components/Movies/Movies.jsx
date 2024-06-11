import { HOBBIES } from "../../hobbies/Hobbies"
import { Categoria } from "../Categoria/Categoria"
import "./Movies.css"


export const Movies = ({name, image, type, genre, vote }) => {
  return (
    <div id="movie">
        <figure>
            <img src={image} alt={name} width={550} />
            <ul id="datos">
                <h1>{name}</h1>
                <h3 id="genreM">{genre}</h3>
                <p id="type">{type}</p>
            </ul>
            <h2 id="vote">⭐{vote}⭐</h2>
        </figure>
    </div>
  )
}



export const MoviesGallery = () => {
  return (
    <div>
      <Categoria categoria={"🎬 SERIES 🎬"}></Categoria>
      {HOBBIES.movies.map((el) => (
      <Movies 
        name={el.name}
        image={el.image}
        type={el.type}
        genre={el.genre}
        vote={el.vote}
        key={el.name}>
      </Movies>  
      ))}
      
    </div>
  )
}

