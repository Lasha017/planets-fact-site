import Header from "../../components/header/Header";
import jsonData from "../../api/planets.json";
import { useState } from "react";
import image from "../../assets/mercury.svg";

const Mercury = () => {
  const [data] = useState(jsonData);

  return (
    <>
      <Header />
      {data
        .filter((item) => item.name === "Mercury")
        .map((fact) => {
          return (
            <>
              <div className="pr-[200px] pl-[200px]">
                <div className="flex  justify-between pt-[80px] ">
                  <div className="pl-[200px] pt-[100px]">
                    <img
                      src={image}
                      alt="mercury photo"
                      width="300px"
                      height="100"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-[300px]">
                    <h1 className="text-white text-7xl">
                      {fact.name.toUpperCase()}
                    </h1>
                    <p className="text-white font-sans font-spartan font-[100] text-[14px]">
                      {fact.overview.content}
                    </p>
                    <span className="text-[gray] font-normal flex font-sans font-spartan">
                      <p className="text-sm"> source :</p>
                      <a
                        href={fact.overview.source}
                        className="text-[gray] font-[700] underline pl-2 text-sm font-sans font-spartan"
                      >
                        Wikipedia
                      </a>
                      <span className="text-[10px] pl-2 cursor-pointer flex items-center">
                        &#8599;
                      </span>
                    </span>
                    <button
                      className="border-[1px] border-slate-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300"
                    >
                      <span className="">01</span>
                      <span>OVERVIEW</span>
                    </button>

                    <button className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300">
                      <span className="">02</span>
                      <span>INTERNAL STRUCTURE</span>
                    </button>
                    <button className="border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300ƒ">
                      <span className="">03</span>
                      <span>SURFACE GEOLOGY</span>
                    </button>
                  </div>
                </div>
                <div>
                  <h1 className="text-white pt-[100px]">LAST BOTTOM PART!!!!!!!</h1>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Mercury;
