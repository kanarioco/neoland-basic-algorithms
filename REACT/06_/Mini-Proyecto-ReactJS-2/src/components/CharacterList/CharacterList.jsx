import { dataRicky } from "../../data/ricky.data";
import { ItemList } from "../ItemList/ItemList";
import "./CharacterList.css";


export const CharacterList = () => {
  
  return (
    <ul>
        {dataRicky.results.map((el) => (
            <ItemList
            name={el.name}
            image={el.image}
            origin={el.origin.name}
            status={el.status}
            key={el.id}
            />
         ))} 
    </ul>
  )
}

