import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "About",
    "Events & Conferences",
    "Overseas Programmes",
    "Management Education",
    "MAT",
    "Testing & Assessment",
    "Management Development Programmes",
    "Trainings & Workshops",
    "Membership",
    "Knowledge Hub",
  ];

  return (
    <header className="w-full text-white bg-gradient-to-b from-[#0B3C89] via-[#173ABF] to-[#3b50c5] border-none! shadow-none!">
      {/* ===== TOP BAR ===== */}
      <div className="w-full mx-auto ">
        <div className="flex justify-between items-center py-3 px-8 ">
          {/* Logo */}
          <div>
            <img src={logo} alt="AIMA Logo" className="h-[50px]" />
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-5 md:gap-6 uppercase">
            <button className="text-white hover:text-gray-200 cursor-pointer ">
              <Search size={22} />
            </button>

            <a
              href=""
              className="text-xs hover:underline font-normal font-inter"
            >
              FOR MEMBERS
            </a>
            <a
              href=""
              className="text-xs hover:underline font-normal font-inter"
            >
              FOR STUDENTS
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="text-white"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== SECONDARY MENU ===== */}
      <nav className="text-white mx-auto ">
        <div className="overflow-hidden">
          <ul className="hidden lg:flex items-center justify-around text-xs whitespace-nowrap lg:flex-wrap gap-x-1">
            {links.map((link) => (
              <li key={link}>
                <a
                  href=""
                  className="inline-block px-3 py-3 hover:bg-[#0074e4]/30 transition font-dmsans"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {open && (
            <div className="lg:hidden flex flex-col text-center">
              {links.map((link) => (
                <a
                  key={link}
                  href=""
                  className="px-4 py-2 hover:bg-[#0074e4]/30"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
