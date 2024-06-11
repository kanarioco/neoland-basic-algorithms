import "./Image.css";


export const Image = ({url, alt}) => {
  return (
    <img src={url} alt={alt} width={150} height={150}/>
  )
}

// url = ""
// alt = ""
