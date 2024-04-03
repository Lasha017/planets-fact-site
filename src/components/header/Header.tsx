const Header = () => {
  return (
    <>
      <header className="flex flex-col justify-between pt-6 pr-10 pl-10 pb-4">
        <div
          className="flex justify-between  items-center md:max-xl:flex-col  md:max-xl:g-20"
          id="gap"
        >
          <div>
            <a href="/" className="text-slate-50 text-[28px] cursor-pointer">
              THE PLANETS
            </a>
          </div>
          <div>
            <ul className="flex text-slate-50 gap-16 cursor-pointer">
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/mercury">MERCURY</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/venus">VENUS</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/earth">EARTH</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white transition duration-250 ease-in-out">
                <a href="/mars">MARS</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/jupiter">JUPITER</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/saturn">SATURN</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/uranus">URANUS</a>
              </li>
              <li className="h-full flex items-center border-b-2 border-transparent hover:border-white  transition duration-250 ease-in-out">
                <a href="/neptune">NEPTUNE</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="bg-slate-600 h-[1px] w-scren"></div>
    </>
  );
};

export default Header;
