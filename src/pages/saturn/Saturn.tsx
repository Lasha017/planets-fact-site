import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/saturn.svg";
import Planet from "../landing/planet/Planet";


const Saturn = () => {
  const [data] = useState(jsonData);
  const filteredData = data.filter((planet) => planet.name === "Saturn");

  return (
    <>
      {filteredData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          src={Image}
          text={planet.overview.content}
          firstBtn="/saturn"
          secondBtn="/saturn-structure"
          thirdBtn="/saturn-surface"
        />
      ))}
    </>
  );
}

export default Saturn;
