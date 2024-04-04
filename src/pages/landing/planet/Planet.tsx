import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import Header from "../../../components/header/Header";
import { PlanetProps } from "../../../types/types";

const Planet = ({ name, src, text, firstBtn, secondBtn, thirdBtn }:PlanetProps) => {
  useEffect(() => {
    document.title = "Planets";
  });

  return (
    <>
      <Header />
      <div className="px-[200px] 2xl:pl-[300px] md:max-xl:px-[50px] md:max-xl:pb-[50px]">
        <div className="flex justify-between pt-[60px] md:max-xl:g-[50px] md:max-xl:flex-col md:max-xl:items-center">
          <div className="pl-[200px] pt-[100px] md:max-xl:pl-[0px] md:max-xl:pt-[0px]">
            <img
              src={src}
              alt={`${name} photo`}
              width="250px"
              height="100"
              className="loader"
            />
          </div>
          <div className="flex flex-col gap-5 w-[300px]">
            <div className="flex flex-col" id="gap1">
              <h1 className="text-white text-7xl">{name.toUpperCase()}</h1>
              <p className="text-white font-sans font-spartan font-[400] text-[12px] h-[150px]">
                {text}
              </p>
              <span className="text-[gray] font-normal flex font-sans font-spartan">
                <p className="text-sm"> source :</p>
                <a
                  href={`https://en.wikipedia.org/wiki/${name}`}
                  className="text-[gray] font-[700] underline pl-2 text-sm font-sans font-spartan"
                >
                  Wikipedia
                </a>
                <span className="text-[10px] pl-2 cursor-pointer flex items-center">
                  &#8599;
                </span>
              </span>
            </div>

            <div className="flex flex-col" id="gap2">
              <Link
                to={firstBtn} 
                className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
              >
                <span className="">01</span>
                <span>OVERVIEW</span>{" "}
              </Link>
              <Link
                to={secondBtn} 
                className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
              >
                <span>02</span>
                <span>INTERNAL STRUCTURE</span>{" "}
              </Link>
              <Link
                to={thirdBtn} 
                className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
              >
                <span>03</span>
                <span>SURFACE GEOLOGY</span>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-[100px] justify-center pt-10 h-[170px]">
          <div className="border-[1px] h-[100px] border-slate-500 p-6 w-[255px]">
            <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">
              ROTATION TIME
            </h3>
            <p className="text-white text-[24px]">58.6 Days</p>
          </div>
          <div className="border-[1px] h-[100px] border-slate-500 p-6 w-[255px]">
            <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">
              REVOLUTION TIME
            </h3>
            <p className="text-white text-[24px]">87.97 Days</p>
          </div>
          <div className="border-[1px] h-[100px] border-slate-500 p-6 w-[255px]">
            <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">
              RADIUS
            </h3>
            <p className="text-white text-[24px]">6,051.8 KM</p>
          </div>
          <div className="border-[1px] h-[100px] border-slate-500 p-6 w-[255px]">
            <h3 className="text-[gray] font-[400] text-[10px] font-sans font-spartan">
              AVERAGE TEMP.
            </h3>
            <p className="text-white text-[24px]">471°c</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet;
