import React from "react";
import {BsCameraVideo} from 'react-icons/bs';
import {BsPeople} from 'react-icons/bs';
import {MdOutlineWatchLater} from 'react-icons/md';
import { Link } from "react-router-dom";

const Hero =() =>{
    return(
        <>
        <div className="bg-[rgb(117,79,254)] pt-4">
            <div className="container mx-auto 2xl:px-40 px-6 flex space-y-8 flex-wrap  justify-between items-center " >
             <div className="space-y-5">
                <h2 className="text-4xl text-white font-bold">Welcome to Geeks UI <br/> Learning Application</h2>
                <h3 className="text-gray-300 text-xl">Hand-picked Instructor and expertly crafted <br/> courses, designed for the modern students and <br/>entrepreneur.</h3>
                <div className="space-x-1 flex">
                    <Link to="/Multicards" className="bg-[rgb(25,203,152)] py-3 px-4 rounded-sm text-white font-semibold">Browse Courses</Link>
                    <Link to="/About" className="bg-white py-3 px-4 rounded-sm font-semibold">Are You Instuctor?</Link>
                </div>
            </div>
            <div>
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" alt="" />

            </div>
            </div>
        </div>

        <div className="shadow-md">
            <div className="   lg:px-28 px-5 py-6 items-center gap-10 grid md:grid-cols-3">
            <div className="flex items-center gap-2">
            <div className=" bg-pink-200 rounded-full py-4 px-4 text-[rgb(194,129,53)]" >
            <BsCameraVideo/> 
            </div>
            <div className="">
            <p className="font-semibold">30,000 online courses</p>
            <p className="text-gray-400">Enjoy a variety of fresh <br/> topics</p>
            </div> 
            </div>
            <div className="flex items-center gap-2">
                <div className=" bg-pink-200 rounded-full py-4 px-4 text-[rgb(194,129,53)]" >
            <BsPeople/> 
            </div>
            <div className="">
            <p className="font-semibold">
Expert instruction</p>
            <p className="text-gray-400">Find the right instructor for <br/> you</p>
            </div> 
            </div>
            <div className="flex items-center gap-2">
                <div className=" bg-pink-200 rounded-full py-4 px-4 text-[rgb(194,129,53)]" >
            <MdOutlineWatchLater/> 
            </div>
            <div className="">
            <p className="font-semibold">Lifetime access</p>
            <p className="text-gray-400">Learn on your schedule</p>
            </div> 
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Hero