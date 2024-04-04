import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/planet-mercury-internal.svg";
import Planet from "../landing/planet/Planet";

const MiddleMercury= () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Mercury");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.structure.content}
          firstBtn="/mercury"
          secondBtn="/mercury-structure"
          thirdBtn="/mercury-surface"
        />
      ))}
    </>
  );
};

export default MiddleMercury;
