import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/venus.svg";
import Planet from "../landing/planet/Planet";

const Venus = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Venus");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.overview.content}
          firstBtn="/venus"
          secondBtn="/venus-structure"
          thirdBtn="/venus-surface"
        />
      ))}
    </>
  );
};

export default Venus;
