// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              {/* Background accent */}
              <rect x="2" y="8" width="116" height="24" rx="12" fill="#16f2b3" fillOpacity="0.1"/>

              {/* Letter 'a' */}
              <path
                d="M12 28V16c0-2.2 1.8-4 4-4s4 1.8 4 4v12M12 22h8"
                stroke="#16f2b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Letter 'r' */}
              <path
                d="M28 28V12M28 16h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4M28 24l4 4"
                stroke="#16f2b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Letter 'b' */}
              <path
                d="M44 28V10M44 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4M44 20c0 2.2 1.8 4 4 4s4-1.8 4-4"
                stroke="#16f2b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Letter 'a' */}
              <path
                d="M60 28V16c0-2.2 1.8-4 4-4s4 1.8 4 4v12M60 22h8"
                stroke="#16f2b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Letter 'z' */}
              <path
                d="M76 16h8l-8 8h8M76 28l8-8"
                stroke="#16f2b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Decorative dots */}
              <circle cx="92" cy="18" r="1.5" fill="#16f2b3"/>
              <circle cx="96" cy="22" r="1.5" fill="#16f2b3" fillOpacity="0.7"/>
              <circle cx="100" cy="18" r="1.5" fill="#16f2b3" fillOpacity="0.5"/>
            </svg>
          </Link>
          {/* <MdCodeOff className="w-7 h-7 fill-[#16f2b3] rotate-90"/> */}
            {/* <img width="48" height="48" src="https://img.icons8.com/color/48/000000/source-code.png" alt="source-code"/> */}
        </div>

        <ul className="flex flex-col items-start w-full h-screen mt-4 text-sm opacity-0 max-h-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;