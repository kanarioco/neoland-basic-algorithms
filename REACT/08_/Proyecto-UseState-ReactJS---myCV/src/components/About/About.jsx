import "./About.css";

export const About = ({ hero }) => {
  return (
     <div className="about">
        {hero.aboutMe.map((el, index) => (
            <p key={index}>{el.info}</p>
        ))}
    </div>
  )
}
