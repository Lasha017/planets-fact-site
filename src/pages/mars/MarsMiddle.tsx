import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/planet-mars-internal.svg";
import Planet from "../landing/planet/Planet";

const MarsMiddle = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Mars");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.structure.content}
          firstBtn="/mars"
          secondBtn="/mars-structure"
          thirdBtn="/mars-surface"
        />
      ))}
    </>
  );
};

export default MarsMiddle;
