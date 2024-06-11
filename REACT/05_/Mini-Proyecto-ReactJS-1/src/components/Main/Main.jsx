import "./Main.css";
import { dataRicky } from "../../data/ricky.data";
import { CardCharacter } from "../CardCharacter/CardCharacter";



/*export const Main = () => {

  return (
    <div id="Main">
        {dataRicky.results.map((el) => (
            <CardCharacter 
            image={el.image} 
            name={el.name} 
            location={el.location.name} 
            status={el.status}
            key={el.id}/>
        ))}
    </div>
  )
}
*/

export const Main = () => {
    return (
      <div id="Main">
        {dataRicky.results.map((el) => {
          let statusColor;
          if (el.status == "Alive") {
            statusColor = "alive";
          } else if (el.status === "Dead") {
            statusColor = "dead";
          } else {
            statusColor = "unknown";
          }
            return (
              <CardCharacter
                image={el.image}
                name={el.name}
                location={el.location.name}
                status={el.status}
                statusColor={statusColor}
                key={el.id}
              />
            );
        })}
      </div>
    );
  };
