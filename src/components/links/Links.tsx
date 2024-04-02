
const Links = ({ firstBtn,className,number,description }:any) => {
  return (
    <a
      href={firstBtn}
          className={`border-[1px] border-slate-500 hover:bg-sky-blue-500 text-white flex p-2 gap-5 pl-[40px] hover:bg-[#419EBB] transition duration-300 ${className}`}
      >
      <span>{number}</span>
          <span>{description}</span>{" "}
    </a>
  );
};
{/* <Links href={firstBtn} className={linkClassName} number={"02"} description={"OVERVIEW"} /> */ }
export default Links;
