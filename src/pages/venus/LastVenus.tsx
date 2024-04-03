import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/venusLast.png";
import Planet from "../landing/planet/Planet";


const LastVenus = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Venus");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.geology.content}
          firstBtn="/venus"
          secondBtn="/venus-structure"
          thirdBtn="/venus-surface"
        />
      ))}
    </>
  );
}

export default LastVenus;
