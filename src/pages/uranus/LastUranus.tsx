import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/uranus.svg";
import Planet from "../landing/planet/Planet";


const LastUranus = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Uranus");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.geology.content}
          firstBtn="/mercury"
          secondBtn="/mercury-structure"
          thirdBtn="/mercury-surface"
        />
      ))}
    </>
  );
}

export default LastUranus;
