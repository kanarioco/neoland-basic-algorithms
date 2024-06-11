import "./Image.css";

export const Image = ({url, alt}) => {
  return (
    <img src={url} alt={alt} width={400} height={200}/>
  )
};

