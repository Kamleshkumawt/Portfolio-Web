import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed text-center p-3 text-white w-full flex h-[70px] bg-transparent z-50">
      <nav className="flex relative w-full h-[70px] bg-transparent">
        {/* Sidebar
        <Sidebar /> */}
        <div className="flex items-center justify-between w-full h-16 cursor-pointer bg-transparent px-4">
          <span className="text-2xl">
            <a href="#" className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-70 hover:opacity-100">Kamlesh</a>
          </span>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
          {/* Nav links */}
          <ul className={`flex-col md:flex-row md:flex items-center gap-8 font-sans text-lg cursor-pointer absolute md:static top-[70px] left-0 w-full md:w-auto ${open ? "flex bg-gray-800/90" : "hidden md:flex md:bg-transparent"} transition-all duration-300 z-40`}>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center">
              <a href="#about">About</a>
            </li>           
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center">
              <a href="#skill">Skill</a>
            </li>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center">
              <a href="#Work">Project</a>
            </li>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
