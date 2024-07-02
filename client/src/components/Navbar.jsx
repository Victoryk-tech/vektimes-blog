import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia";
import Sport from "./Sport";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky top-0 border-b-black border-b-[1px] bg-white overflow-hidden">
      <div className="flex items-start justify-between px-4 py-10 md:hidden">
        <h1 className="font-bold text-lg">VekTimes</h1>

        <div className="">
          <div onClick={handleBar} className="text-2xl">
            <CgMenuRightAlt />
          </div>
          {isOpen && (
            <div className=" fixed right-0 top-0 w-full bg-white flex flex-col items-start justify-start space-y-8 px-10 py-6 h-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center justify-center space-x-2">
                  <div>Date</div>
                  <div>weather</div>
                </div>
                <div
                  onClick={handleBar}
                  className="w-full flex items-end justify-end text-2xl"
                >
                  <IoCloseCircleSharp />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start text-center space-y-4 ">
                <div className="flex items-center justify-center space-x-2">
                  <IoSearchOutline className="text-xl" />
                  <input
                    type="text"
                    name="text"
                    placeholder="Searching"
                    className="outline-none p-2 rounded-md"
                  />
                </div>
                <div className="flex items-start justify-between space-x-4">
                  <div className="flex items-center justify-center space-x-2">
                    <PiApplePodcastsLogoLight className="text-xl" />
                    <h1>Podcast</h1>
                  </div>
                  <div className="flex items-center justify-center text-center space-x-2">
                    <LiaVideoSolid className="text-xl" />
                    <h1>videos</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-start justify-center space-y-6 w-full">
                <div className="flex items-start justify-start space-x-4">
                  <a href="#">News</a>
                  <Link to="/">
                    {" "}
                    <a href="#">Sport</a>
                  </Link>
                  <a href="#">Business</a>
                </div>
                <div className="flex items-start justify-start space-x-4">
                  <a href="#">Opinion</a>
                  <a href="#">Life & style</a>
                  <a href="#">Culture</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between text-center px-4 md:py-6 lg:px-36">
        <div className="flex items-center justify-center space-x-8">
          <div>Date</div>
          <div>weather</div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">THE VEKS TIMES</h1>
        </div>
        <div className="space-x-8">
          <a href="#">Sign In</a>
          <Link to={"create"}>
            <a className="border-2 p-1 rounded-sm">Create Blog</a>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-start justify-between space-x-4 py-8 px-4 lg:px-36">
        <div className="flex items-center justify-center space-x-8">
          <a href="#">News</a>
          <Link to="/">
            {" "}
            <a href="#">Sport</a>
          </Link>
          <a href="#">Business</a>
          <a href="#">Opinion</a>
          <a href="#">Life & style</a>
          <a href="#">Culture</a>
        </div>
        <div className="flex items-center justify-center text-center space-x-2">
          <div className="hidden lg:flex items-center justify-center space-x-2">
            <IoSearchOutline className="text-xl" />
            <input
              type="text"
              name="text"
              placeholder="Searching"
              className="outline-none "
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <PiApplePodcastsLogoLight className="text-xl" />
            <h1>Podcast</h1>
          </div>
          <div className="flex items-center justify-center text-center space-x-2">
            <LiaVideoSolid className="text-xl" />
            <h1>videos</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
