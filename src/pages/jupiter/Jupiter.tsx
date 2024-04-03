import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/jupiter.svg";
import Planet from "../landing/planet/Planet";

const Jupiter = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Jupiter");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.overview.content}
          firstBtn="/jupiter"
          secondBtn="/jupiter-structure"
          thirdBtn="/jupiter-surface"
        />
      ))}
    </>
  );
};

export default Jupiter;
