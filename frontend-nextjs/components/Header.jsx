"use client";
import React from "react";
import { ImCross } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const openOverlay = () => {
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("overlay").classList.add("block");
  };
  const closeOverlay = () => {
    document.getElementById("overlay").classList.add("hidden");
    document.getElementById("overlay").classList.remove("block");
  };
  return (
    <header className="navbar sticky top-0 z-5 min-h-40px bg-black flex justify-between text-neutral-content p-2 md:p-0 md:px-2">
      <a className="btn btn-ghost text-xl" href="/">Climate Aware</a>
      <ul className="hidden md:flex font-semibold p-4 w-full justify-end gap-3 items-center basis-3/4">
        <a href="/">HOME</a>
        <a href="/about">ABOUT US</a>
        <a href="/news">NEWS</a>
        <a href="/#section4">EDUCATIONS</a>
        <a href="https://forum.skuy.my.id/">FORUM</a>
      </ul>

      <div className="flex rounded-md md:hidden items-center px-3">
        <button className="" onClick={openOverlay}>
          <IoMenuOutline className="text-3xl" />
        </button>
      </div>
      <div
        className="hidden fixed w-full h-full top-0 bottom-0 left-0 right-0 cursor-pointer md:hidden"
        id="overlay"
      >
        <ul className="grid font-semibold p-4 w-full gap-4 text-center items-center">
          <div className="grid justify-end">
            <button className="rounded-md p-4" onClick={closeOverlay}>
              <ImCross />
            </button>
          </div>
          <a href="/" className="py-2">HOME</a>
          <div className="w-full h-2px bg-white"></div>
          <a href="/about" className="py-2" onClick={closeOverlay}>ABOUT US</a>
          <div className="w-full h-2px bg-white"></div>
          <a href="/news" className="py-2" onClick={closeOverlay}>NEWS</a>
          <div className="w-full h-2px bg-white"></div>
          <a href="#section4" className="py-2" onClick={closeOverlay}>EDUCATIONS</a>
          <div className="w-full h-2px bg-white"></div>
          <a href="https://forum.muhammadirfani.dev" className="py-2" onClick={closeOverlay}>FORUM</a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
