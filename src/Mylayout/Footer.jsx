import React from "react";
import {Link} from "react-router-dom";

const Footer = () =>{
    return (
        <>
        <div className=" py-2 ">
        <div className="container mx-auto flex flex-wrap  justify-between px-10">
            <div>
                <h2 className="text-gray-400">© 2022 Geeks. <span className="text-sm">All Rights Reserved</span></h2>
            </div>
            <div className="sm:flex gap-4 ">
                <Link to="/About" className="text-sm text-gray-400">About</Link>
                <Link to="/Terms" className="text-sm text-gray-400">Terms & Conditions</Link>
                <Link to="/Privacy" className="text-sm text-gray-400">Privacy Policy</Link>
                <Link to="/Contact" className="text-sm text-gray-400">Contact</Link>
            </div>

        </div>
        </div>
        </>
    )
}

export default Footer