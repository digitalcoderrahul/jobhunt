import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" flex  justify-between  py-3 px-5 ">
        <div className="flex items-center gap-7">
          <Link to="/">
          <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="" />
          </Link>
          <div className=" lg:flex items-center  gap-8 hidden">
            <Link to="/Error" className="font-medium cursor-pointer">Browse</Link>
            <Link to="/Error" className="font-medium cursor-pointer">Landings</Link>
            <Link to="/Error" className="font-medium cursor-pointer">Pages</Link>
            <Link to="/Error" className="font-medium cursor-pointer">Accounts</Link>
            <div className=" border py-2 px-6 flex items-center gap-2">
              <div className=" text-gray-400">
                <BiSearch />
              </div>
              <input
                type="text"
                placeholder="Search Courses "
                className="w-full outline-none"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex gap-3 items-center  hidden">
          <Link to="/Signin" className="shadow-md font-medium px-4 py-2 rounded-md cursor-pointer ">
            Sign In
          </Link>
          <Link
            to="/Signup"
            className="font-medium bg-[rgb(117,79,254)] px-3 py-2 text-white rounded-md hover:bg-purple-800 cursor-pointer "
          >
            Sign Up
          </Link>
        </div>

        <div className="border-2 py-2 px-2 text-2xl lg:hidden  text-[rgb(117,79,254)] border-[rgb(117,79,254)]">
          <AiOutlineMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
