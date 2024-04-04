import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex flex-col justify-between pt-6 pr-10 pl-10 pb-4">
      <div
        className="flex justify-between  items-center md:max-xl:flex-col  md:max-xl:g-20"
        id="gap"
      >
        <div>
          <Link to="/" className="text-slate-50 text-[28px] cursor-pointer">
            THE PLANETS
          </Link>
        </div>
        <div>
          <ul className="flex text-slate-50 gap-16 cursor-pointer">
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/mercury" className="text-white">MERCURY</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/venus" className="text-white">VENUS</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/earth" className="text-white">EARTH</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white transition duration-250 ease-in-out">
              <Link to="/mars" className="text-white">MARS</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/jupiter" className="text-white">JUPITER</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/saturn" className="text-white">SATURN</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/uranus" className="text-white">URANUS</Link>
            </li>
            <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
              <Link to="/neptune" className="text-white">NEPTUNE</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
      <div className="bg-gray-600 w-auto h-[1px]"></div>
    </>
  );
};

export default Header;