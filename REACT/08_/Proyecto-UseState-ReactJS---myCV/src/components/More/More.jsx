import { Divider } from "../Divider/Divider";
import "./More.css";

export const More = ({ languages, habilities, volunteer }) => {
  return (
    <>
    <Divider><h3>Languages</h3></Divider>
      <div className="languages">
        <h4>{languages.language}</h4>
        <p>📜 Writing: {languages.splevel} </p>
        <p>💭 Speaking: {languages.wrlevel} </p>
      </div>
    <Divider><h3>Skills</h3></Divider>
      <div className="skills">
        {habilities.map((el, index) => (
          <p key={index}>🧩 {el}</p>
        ))}
      </div>
    <Divider><h3>Volunteers</h3></Divider>
    <div className="volunteers">
            {volunteer.map((el, index) => (
              <div className="volunteersCard" key={index}>
                  <p className="name">🥽 {el.name}</p>
                  <p>{el.where}</p>
                  <p>{el.description}</p>
              </div>
            ))}
        </div>
    </>
  )
}
