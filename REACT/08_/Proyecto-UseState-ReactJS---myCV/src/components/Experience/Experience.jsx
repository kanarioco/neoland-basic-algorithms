import "./Experience.css";

export const Experience = ({ experience }) => {
  return (
        <div className="experience">
            {experience.map((el, index) => (
              <div className="experienceCard" key={index}>
                  <p className="name">📂 {el.name}</p>
                  <p>{el.where}</p>
                  <p>{el.date}</p>
                  <p>{el.description}</p>
              </div>
            ))}
        </div>
  )
}