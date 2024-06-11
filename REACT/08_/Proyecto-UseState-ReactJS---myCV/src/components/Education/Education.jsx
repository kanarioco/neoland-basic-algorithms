import "./Education.css";

export const Education = ({ education }) => {
  return (
      <div className="education">
          {education.map((el, index) => (
            <div className="educationCard" key={index}>
                <p className="name">📕 {el.name}</p>
                <p>{el.where}</p>
                <p>{el.date}</p>
            </div>
          ))}
      </div>
  )
}


