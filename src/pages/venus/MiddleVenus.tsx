import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/planet-venus-internal.svg";
import Planet from "../landing/planet/Planet";

const MiddleVenus = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Venus");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.structure.content}
          firstBtn="/venus"
          secondBtn="/venus-structure"
          thirdBtn="/venus-surface"
        />
      ))}
    </>
  );
};

export default MiddleVenus;
