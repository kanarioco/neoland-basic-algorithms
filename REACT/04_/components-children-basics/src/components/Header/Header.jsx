import "./Header.css";
import { Title } from "../Title/Title";
import { datos } from "../../data/data";



export const Header = ({children}) => {
  return (
    <div className="Header">
        <Title Text={datos.T1}/>
        {children}
    </div>
  )
};
