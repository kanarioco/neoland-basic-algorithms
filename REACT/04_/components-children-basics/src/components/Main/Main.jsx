import "./Main.css"; 
import { SubTitle } from "../SubTitle/SubTitle";
import { Image } from "../Image/Image";
import { datos } from "../../data/data";



export const Main = () => {
  return (
    <div>
      <SubTitle Text={datos.T2}/>
      <Image url={datos.url1} alt={datos.alt1}/>
    </div>
  )
};

