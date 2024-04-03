import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/neptune.svg";
import Planet from "../landing/planet/Planet";


const LastNeptune = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Neptune");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.geology.content}
          firstBtn="/neptune"
          secondBtn="/neptune-structure"
          thirdBtn="/neptune-surface"
        />
      ))}
    </>
  );
}

export default LastNeptune;
