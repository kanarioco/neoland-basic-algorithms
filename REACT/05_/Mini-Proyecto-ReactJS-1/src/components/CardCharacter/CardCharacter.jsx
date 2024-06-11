import "./CardCharacter.css";


export const CardCharacter = ({image, name, location, status, statusColor }) => {
  return (
    <figure className={`CharCard ${statusColor}`}>
        <img src={image} alt={name} width={150} height={150}/>
        <h3>{name} </h3>
        <h4>{location} </h4>
        <h4>{status} </h4>
    </figure>
  )
};

