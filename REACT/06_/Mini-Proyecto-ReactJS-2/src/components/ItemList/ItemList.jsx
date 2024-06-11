import { Image } from "../Image/Image";
import { Paragraph } from "../Paragraph/Paragraph";
import "./ItemList.css";



export const ItemList = ({name, image, origin, status }) => {
  return (
    <li>
        <Paragraph id="name" Parag={name}/>
        <Image url={image} alt={name}/>
        <Paragraph Parag={origin}/>
        <Paragraph Parag={status}/>
    </li>
  )
};

