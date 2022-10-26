import React from "react";
import { FaGraduationCap } from 'react-icons/fa';
import {  MdPeople } from 'react-icons/md';
import {  BiLineChart } from 'react-icons/bi';

const About = () =>{
    return(
        <>
        <div className="lg:px-96 px-5 space-y-6 py-14"  >
            <h2 className=" text-5xl font-bold">Hi there, we’re <span className="text-blue-500"> Geeks</span></h2>
            <p className="text-2xl">We’re building the best next-generation interactive bootstrap<br/> based UI Kit design tool for developers, engineers, Full-Stack <br/> developer, and digital agency.</p>
            <p className="font-semibold text-gray-500">Geeks provide clean and consistent page designs to help you to create beautiful looking<br/> contents. Geek is feature-rich components and beautifully designed pages that help you create <br/> the best possible website and web application projects.</p>
        </div>
        <div className="container mx-auto">
    <div className="grid-cols-3 px-72 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-1.jpg"
                alt="image"/>
        </div>
        <div className="w-full col-span-2 row-span-2 ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-3.jpg"
                alt="image"/>
        </div>
        <div className="w-full ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-6.jpg"
                alt="image"/>
        </div>
        <div className="w-full ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-5.jpg"
                alt="image"/>
        </div>
        <div className="w-full ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-2.jpg"
                alt="image"/>
        </div>
        <div className="w-full ">
            <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-4.jpg"
                alt="image"/>
        </div>
    </div>
    </div>
    <div className="lg:px-72 px-5 space-y-4 py-9 ">
        <h2 className="text-4xl font-bold">Our global reach</h2>
        <p className="text-xl">Geeks is the leading global marketplace for teaching and <br/> learning, connecting millions of students to the skills they <br/> need to succeed.</p>
        <hr/> 
    </div>
    <div className="lg:px-72 px-5    flex flex-wrap gap-40 py-10">
        <div>
        <h2 className="text-5xl font-semibold">20M</h2>
        <p className="text-gray-400">LEARNERS</p>
        </div>
        <div>
        <h2 className="text-5xl font-semibold">57K</h2>
        <p className="text-gray-400">INSTRUCTORS</p> 
        </div>
        <div>
        <h2 className="text-5xl font-semibold">21K</h2>
        <p className="text-gray-400">COURSES</p> 
        </div>
        <div>
        <h2 className="text-5xl font-semibold">380M</h2>
        <p className="text-gray-400">COURSE ENROLLMENTS</p> 
        </div>
    </div>
    <div className="bg-gray-100 lg:px-72 px-5 space-y-4 py-36">
    <h2 className="text-4xl font-semibold">Our core values</h2>
        <p className="text-xl py-11 ">Our core values are the fundamental beliefs of a person or <br/> organization geeks academy. We help people understand <br/>the difference between right and wrong.</p>
        <div className="grid lg:grid-cols-3  gap-12">
            <div className="bg-white space-y-4 px-10 py-5 rounded-md" >
                <div className="text-5xl text-blue-500">
                 <FaGraduationCap/>
                 </div>
                <h2 className="text-2xl">Make Education Accessible</h2>
                <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
            </div>
            <div className="bg-white space-y-4 px-10 py-5 rounded-md" >
                <div className="text-5xl text-blue-500">
            <MdPeople/>
            </div>
                <h2 className="text-2xl">Make Education Accessible</h2>
                <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
            </div>
            <div className="bg-white space-y-4 px-10 py-5 rounded-md" >
                <div className="text-5xl text-blue-500">
            <BiLineChart/>
            </div>
                <h2 className="text-2xl">Make Education Accessible</h2>
                <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
            </div>
        </div>
    </div>

    <div className="py-28 px-5 lg:px-60">
    <h2 className="text-4xl font-semibold">Our Team</h2>
        <p className="text-xl py-5 ">Want to work with some of the best global talent and build a <br/> tool used by all the companies you know and love? Join the<br/> Geeks team and help shape the future of design.</p>
        <button className="bg-blue-500 py-3 px-4 rounded-md text-white font-semibold">Opening</button>

        <div className="py-28 flex flex-wrap gap-20">
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-4.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-6.jpg" alt="" />
            
        </div>
        <div className=" flex flex-wrap gap-20">
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-8.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-9.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-10.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-11.jpg" alt="" />
            <img className=" w-28 rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-12.jpg    " alt="" />
            
        </div>
    </div>
    <div className="bg-[rgb(117,79,254)] pt-4">
            <div className="container mx-auto 2xl:px-40 px-6 flex space-y-8 flex-wrap  justify-between items-center " >
             <div className="space-y-5">
                <h2 className="text-4xl text-white font-bold">Join the Geeks team &<br/> shape the future of design</h2>
                <h3 className="text-gray-300 text-xl">If you’re passionate and ready to dive in, we’d love to meet <br/> you. We’re committed to supporting our employee <br/>professional development and well-being.</h3>
                <div className="space-x-1 flex">
                    <button className="bg-[  rgb(24,17,60)] py-3 px-4 rounded-sm text-white font-semibold">View opportunities</button>
                   
                </div>
            </div>
            <div>
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" alt="" />

            </div>
            </div>
        </div>

        </>
    )
}

export default About