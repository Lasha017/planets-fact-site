import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/uranus.svg";
import Planet from "../landing/planet/Planet";


const MiddleUranus = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Uranus");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.structure.content}
          firstBtn="/uranus"
          secondBtn="/uranus-structure"
          thirdBtn="/uranus-surface"
        />
      ))}
    </>
  );
}

export default MiddleUranus;
