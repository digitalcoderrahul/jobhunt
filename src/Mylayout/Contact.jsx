import React from "react";
import { BsTelephone } from 'react-icons/bs';
import {  RiMailSendLine } from 'react-icons/ri';
import {  GrLocation } from 'react-icons/gr';

const Contact = () =>{
    return (
        <>
        <div className=" flex justify-between items-center py-28 flex-wrap " >
            <div className="px-24 py-8  ">
                <img className="w-24 py-4" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="" />
                <div>
                <h2 className="text-4xl font-semibold py-4" >Get In Touch.</h2>
                <p className="text-xl">Fill in the form to the right to get in touch with<br/> someone on our team, and we will reach out shortly.</p>
                <p className="text-lg py-8">If you are seeking support please  visit our <span className="text-blue-400"> support portal<br/></span>before reaching out directly.</p>
                </div>
                <div className="text-lg flex items-center gap-2">
                <BsTelephone/>
                    <p >+ 0123-456-7890</p>
                </div>
                <div className="text-lg flex items-center gap-2">
                <RiMailSendLine/>
                    <p>hello@geekui.com</p>
                </div>
                <div className="text-lg flex items-center gap-2">
                <GrLocation/>
                <p>2652 Kooter Lane Charlotte, NC 28263</p>
                </div>
                <div>

                </div>
            </div>
            <div className="bg-gray-200 py-32 px-28 ">
                <div className=" flex gap-5 justify-center ">
                <div className="">
                <p>First Name</p>
                <input type="First Name" placeholder="First Name" className="outline-none w-full border rounded-md px-2 py-2"/>
                </div>
                <div className="" >
                <p>Last Name</p>
                <input type="Last Name" placeholder="Last Name" className="outline-none w-full border rounded-md px-2 py-2"/>
            </div>
            </div>
            <div className=" py-4 justify-center flex gap-5">
                    <div>
                <p>First Name</p>
                <input type="First Name" placeholder="First Name" className="outline-none w-full border rounded-md px-2 py-2"/>
                </div>
                <div className="" >
                <p>Last Name</p>
                <input type="Last Name" placeholder="Last Name" className="outline-none w-full border rounded-md px-2 py-2"/>
            </div>
            </div>
            <div className="" >
                <p>Contact Reason:</p>
                <select className="w-full outline-none py-3">
                    <option className="text-gray-400 ">Select</option>
                    <option className="text-gray-400 " >Design</option>
                    <option  className="text-gray-400 ">Development</option>
                    <option className="text-gray-400 " >Other</option>
                </select>
            </div>
            <div className="py-2" >
                <p>Message:</p>
                <textarea className="w-full"></textarea>
            </div>
            <div className="py-4">
                <button className="bg-blue-600 text-white rounded-md py-2 px-4">Submit</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact