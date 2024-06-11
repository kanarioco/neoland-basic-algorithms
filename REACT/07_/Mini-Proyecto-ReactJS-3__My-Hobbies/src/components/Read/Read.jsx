import { HOBBIES } from "../../hobbies/Hobbies"
import { Categoria } from "../Categoria/Categoria"
import "./Read.css"


export const MoreBooks = ({ otherBooks }) => {
  return (
    <div>
      {otherBooks.map((el, index) => (
        <a href="" key={index}>*{el.info}*</a>
    ))}
    </div>
  )
}



export const Read = ({ title, authorName, genre, dateOfPublication, authorBirthDate, bookImage, otherBooks }) => {
  return (
    <div className="Read">
      <figure id="book">
        <img src={bookImage} 
           alt={title} 
           height={300}
           width={150}/>
        <ul>
          <h1>{title} <span id="fechaPub">({dateOfPublication})</span></h1> 
          <h3>{authorName} <span id="datosAut">({authorBirthDate})</span></h3>
           <br />
          <p id="genre">{genre}</p>
        </ul>
      </figure>
      <p id="more">Otros del autor: </p>
      <MoreBooks otherBooks={otherBooks}></MoreBooks>
    </div>
  )
}





export const ReadGallery = () => {
  return (
    <div>
      <Categoria categoria={"📚 LIBROS 📚"}></Categoria>
      {HOBBIES.read.map((el) => (
        <Read title={el.title}
              authorName={el.authorName}
              genre={el.genre}
              dateOfPublication={el.dateOfPublication}
              authorBirthDate={el.authorBirthDate}
              bookImage={el.bookImage}
              otherBooks={el.otherBooks}
              key={el.title}>
        </Read>

      ))}
        
    </div>
  )
}
