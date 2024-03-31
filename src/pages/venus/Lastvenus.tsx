import Header from "../../components/header/Header";
import jsonData from "../../api/planets.json";
import { useState } from "react";
import Image from "../../assets/venusLast.png";


const Lastvenus = () => {
  const [data] = useState(jsonData);

  return (
    <>
      <Header />
      {data
        .filter((item) => item.name === "Venus")
        .map((fact) => {
          return (
            <>
              <div className="pr-[200px] pl-[200px]">
                <div className="flex  justify-between pt-[60px] ">
                  <div className="pl-[200px] pt-[100px]">
                    <img
                      src={Image}
                      alt="mercury photo"
                      width="300px"
                      height="100"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-[300px]">
                    <h1 className="text-white text-7xl">
                      {fact.name.toUpperCase()}
                    </h1>
                    <p className="text-white font-sans font-spartan font-[400] text-[14px]">
                      {fact.geology.content}
                    </p>
                    <span className="text-[gray] font-normal flex font-sans font-spartan">
                      <p className="text-sm"> source :</p>
                      <a
                        href={fact.geology.source}
                        className="text-[gray] font-[700] underline pl-2 text-sm font-sans font-spartan"
                      >
                        Wikipedia
                      </a>
                      <span className="text-[10px] pl-2 cursor-pointer flex items-center">
                        &#8599;
                      </span>
                    </span>
                    <a
                      href="/venus"
                      className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
                    >
                      <span className="">01</span>
                      <span>OVERVIEW</span>{" "}
                    </a>

                    <a
                      href="/venus-structure"
                      className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
                    >
                      <span className="">02</span>
                      <span>INTERNAL STRUCTURE</span>{" "}
                    </a>
                    <a
                      href="/venus-surface"
                      className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
                    >
                      <span className="">03</span>
                      <span>SURFACE GEOLOGY</span>{" "}
                    </a>
                  </div>
                </div>
                <div className="flex gap-[100px] justify-center pt-14">
                  <div className="border-[1px] border-slate-500 p-6 w-[255px]">
                    <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">ROTATION TIME</h3>
                    <p className="text-white text-[30px]">{fact.rotation}</p>
                  </div>
                  <div className="border-[1px] border-slate-500 p-6 w-[255px]">
                    <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">REVOLUTION TIME</h3>
                    <p className="text-white text-[30px]">{fact.revolution}</p>
                  </div>
                  <div className="border-[1px] border-slate-500 p-6 w-[255px]">
                    <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">RADIUS</h3>
                    <p className="text-white text-[30px]">{fact.radius}</p>
                  </div>
                  <div className="border-[1px] border-slate-500 p-6 w-[255px]">
                    <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">AVERAGE TEMP.</h3>
                    <p className="text-white text-[30px]">{fact.temperature}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Lastvenus;
