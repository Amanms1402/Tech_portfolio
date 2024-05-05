"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(prevState => !prevState);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
      <Link href={"/"} className="text-1xl md:text-3xl text-white flex items-center">
  <img src="/9.png" alt="Portfolio Icon" className="mr-2 inline-block align-middle" style={{ width: '64px', height: '64px' }} />
  <span className="italic font-serif">Aman Kumar Singh</span>
</Link>



        <div className="mobile-menu block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <div className={`menu md:flex ${navbarOpen ? 'block' : 'hidden'}`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;

