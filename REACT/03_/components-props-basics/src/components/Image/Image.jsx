import "./Image.css";
  

export const Image = ({url, alt}) => {
  return (
    <img src={url} alt={alt}/>
  )
};

