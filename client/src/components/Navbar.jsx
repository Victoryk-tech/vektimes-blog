import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia";

export const Navbar = () => {
  return (
    <div className="sticky top-0 border-b-black border-b-[1px] bg-white">
      <div className="flex items-center justify-between text-center py-6 px-36">
        <div className="flex items-center justify-center space-x-8">
          <div>Date</div>
          <div>weather</div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">THE VEKS TIMES</h1>
        </div>
        <div className="space-x-8">
          <a href="#">Sign In</a>
          <button className="border-2 p-1 rounded-sm">Subscribe</button>
        </div>
      </div>
      <div className="flex items-start justify-between space-x-8 py-8 px-36">
        <div className="flex items-center justify-center space-x-10">
          <a href="#">News</a>
          <a href="#">Sport</a>
          <a href="#">Business</a>
          <a href="#">Opinion</a>
          <a href="#">Life & style</a>
          <a href="#">Culture</a>
        </div>
        <div className="flex items-center justify-center text-center space-x-4">
          <div className="flex items-center justify-center space-x-2">
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
