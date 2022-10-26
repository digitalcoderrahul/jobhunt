import React, { useState } from "react";
import {Link} from "react-router-dom"

const Signin = () =>{
    const [Username,setUsename]=useState();
    const [Password,setpassword]=useState() 

    const handleChange=(e)=>{
        console.log(e.target.value)
        setUsename(e.target.value)

    }

    const passwordChange=(e)=>{
           console.log(e.target.value) 
           setpassword(e.target.value)
    }
    const signIn=()=>{
        alert(Username,Password)
        
    }
    return (
        <>
        <div className="flex justify-center bg-gray-100 py-20">
            <div className="space-y-2 shadow-md bg-white px-10 py-10 rounded-md">
            <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg" alt="" />
            <h2 className="text-4xl font-semibold ">Sign up</h2>
            <p className="text-lg ">Already have an account? <Link to="/Signup" className="text-blue-500 text-lg cursor-pointer"> Sign Up</Link></p>
            
            <div className="space-y-2 py-2">
                <p>Username</p>
                <input type="Email" placeholder="Username or Email Address" className=" outline-none w-full border px-5 rounded-md py-3" onChange={handleChange}/>
            </div>
            <div className="space-y-2 py-2">
                <p>Password</p>
                <input type="Password" placeholder="Password" className=" outline-none w-full border px-5 rounded-md py-3"onChange={passwordChange} />
            </div>
           
            <div className="space-y-2 py-3 text-center">
                <button className="bg-[rgb(117,79,254)] text-white py-3 font-semibold px-40 rounded-md" onClick={signIn} >Sign In</button>
            </div>

            </div>
            {/* Username:{Username}
            Password:{Password} */}
        </div>
        </>
    )
}

export default Signin