import React from "react";
import {Link} from "react-router-dom"

const Signup = () =>{
    return (
        <>
        <div className="flex justify-center bg-gray-100 py-20">
            <div className="space-y-2 shadow-md bg-white px-10 py-10 rounded-md">
            <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg" alt="" />
            <h2 className="text-4xl font-semibold ">Sign up</h2>
            <p className="text-lg ">Already have an account? <Link to="/Signin" className="text-blue-500 text-lg cursor-pointer"> Sign in</Link></p>
            <div className="space-y-2 py-2">
                <p>First Name</p>
                <input type="text" placeholder="First Name" className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-2">
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-2">
                <p>Username</p>
                <input type="text" placeholder="Username" className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-2">
                <p>Email</p>
                <input type="Email" placeholder="Email" className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-2">
                <p>Password</p>
                <input type="Password" placeholder="Password" className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-2">
                <p>Password confirmation</p>
                <input type="Password" placeholder="Password confirmation  " className=" outline-none w-full border md:px-5 rounded-md py-3" />
            </div>
            <div className="space-y-2 py-3 text-center">
                <button className="bg-[rgb(117,79,254)] text-white py-3 font-semibold px-40 rounded-md" >Register</button>
            </div>

            </div>
        </div>
        </>
    )
}

export default Signup