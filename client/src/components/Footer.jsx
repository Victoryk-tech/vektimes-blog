import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" border-black border-t-[1px] py-11">
      <div className="px-36  flex items-start justify-between ">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-2xl font-bold">THE VEKS TIMES</h1>
          <nav className="flex items-start justify-start space-x-3 pt-36">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </nav>
        </div>
        <nav className="flex flex-col space-y-3 font-bold">
          <a href="#">News</a>
          <a href="#">Sport</a>
          <a href="#">Business</a>
          <a href="#">Opinion</a>
          <a href="#">Life & style</a>
          <a href="#">Culture</a>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg">Subscribe</h2>
          <a href="#">Why subscribe?</a>
          <a href="#">Get subcription</a>
          <a href="#">Fast Delivery</a>
        </nav>

        <nav className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg">Product & services</h2>
          <p>eBooks</p>
          <p>ePaper</p>
          <p>Email Alerts and Newsletters</p>
          <p>Article Archives</p>
          <p>Execute Jobs</p>
          <p>Newspaper Archives</p>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg">About Us</h2>
          <p>Advertise</p>
          <p>Contact Us</p>
          <p>Carrers</p>
          <p>Article Archives</p>
          <p>Execute Jobs</p>
          <p>Newspaper Archives</p>
        </nav>
      </div>
    </div>
  );
};
