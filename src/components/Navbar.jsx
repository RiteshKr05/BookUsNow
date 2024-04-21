import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faGreaterThan, faHeart, faLocationDot, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="bg-dark-background mx-auto flex w-full items-center justify-between px-4 lg:px-8 pt-1 lg:py-3">
        <h1 className=" text-red-500 font-bold text-lg lg:text-xl md:text-sm">BookUsNow</h1>
        <div className="flex flex-auto items-center justify-center pl-12">
          <div className="hidden lg:block ">
            <div className="flex items-center border-2 border-gray  rounded-md mr-4 py-2 px-4 text-white bg-black ">
              <FontAwesomeIcon icon={faBars} className="mr-2 " />
              <h2 className="  pr-2">Categories</h2>
            </div> 
          </div>
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              className="hidden lg:block bg-gray-200 rounded-md py-2 px-4 w-full pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
        <FontAwesomeIcon icon={faHeart} className="mr-2"/>
          <h1 className="pr-5 hidden lg:block">Favorite</h1>

          <h1 className="hidden lg:block border-2 border-gray px-2 rounded-md">SignIn</h1>
          <FontAwesomeIcon icon={faUser} className="lg:hidden"/>
        </div>
      </div>
      <div className="pl-3 lg:pl-8 pb-3">
        <FontAwesomeIcon icon={faLocationDot} className="text-sm lg:text-base"/>
        <span className=" text-sm lg:text-base px-2">Mumbai, India</span>
        <FontAwesomeIcon icon={faGreaterThan} className=" items-center"style={{ fontSize: '0.6rem' }} />
        <br className="lg:hidden" />
        <span className="text-xs lg:pl-64 lg:px-6 lg:text-base">Live Shows</span>
        <span className="text-xs px-2 lg:px-6 lg:text-base">Streams</span>
        <span className="text-xs px-1 lg:px-6 lg:text-base">Movies</span>
        <span className="text-xs px-1 lg:px-6 lg:text-base">Plays</span>
        <span className="text-xs px-1 lg:px-6 lg:text-base">Events</span>
        <span className="text-xs px-1 lg:px-6 lg:text-base">Sports</span>
        <span className="text-xs px-1 lg:px-6 lg:text-base">Activities</span>
      </div>
    </>
  );
};

export default Navbar;
