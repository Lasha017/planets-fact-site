import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/earth.svg";
import Planet from "../landing/planet/Planet";

const LastEarth = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Earth");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.geology.content}
          firstBtn="/earth"
          secondBtn="/earth-structure"
          thirdBtn="/earth-surface"
        />
      ))}
    </>
  );
};

export default LastEarth;
