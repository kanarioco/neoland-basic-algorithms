import "./Saludo.css"

export const Saludo = (time) => {
    if (time >= 6 && time <= 12) {
        return "Buenos días 😀"
      } else if (time >= 13 && time <= 19) {
        return "Buenos tardes 😉"
      } else {
        return "Buenos noches 😴"
      } 
}

/*function saludo(time) {
    if (time >= 6 && time <= 12) {
      return "Buenos días 😀"
    } else if (time >= 13 && time <= 19) {
      return "Buenos tardes 😉"
    } else {
      return "Buenos noches 😴"
    } 
  } */