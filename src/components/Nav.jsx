import React from "react";

const Nav = () => {
  return (
    <div className=" fixed text-center p-3 text-white w-full flex h-[100px] bg-transparent">
      <nav className="flex relative w-full h-[100px] bg-transparent">
        {/* Sidebar
        <Sidebar /> */}
        <div className="flex items-center justify-around w-full h-16 cursor-pointer bg-transparent">
          <span className="text-2xl">
            <a href="#" className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-70 hover:opacity-100">Kamlesh</a>
          </span>
          <ul className="flex items-center w-xl gap-8 font-sans text-lg cursor-pointer bg-transparent">
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100">
              <a href="#about">About</a>
            </li>           
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100">
              <a href="#skill">Skill</a>
            </li>
            <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100">
              <a href="#Work">Project</a>
            </li>
              <li className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
