import React from "react";
import { MdOutlineWatchLater } from 'react-icons/md';
import {GiNetworkBars} from 'react-icons/gi';
import {AiFillStar} from 'react-icons/ai';
import {CiSaveDown2} from 'react-icons/ci';


const Trend = () =>{
    return (
        <>
        <div className="bg-gray-100 py-20 ">
        <div className="container mx-auto lg:px-32 px-5">
        <div>
            <h2 className="text-2xl">Trending</h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 py-6 gap-4">
            {ServiceData.map ((item, index, )=>{
                return(
                   
            <div 
            key={index}
            className={`shadow-md rounded-md bg-white ${item .class}`}>
            <img className="rounded-t-md " src={item.img} alt="" />
            <h2 className="px-5 py-4 font-semibold text-lg hover:text-blue-600 ">{item. title}</h2>
            <div className="px-5 flex items-center gap-2 text-gray-500  ">
                <MdOutlineWatchLater/>
                <p className="text-gray-500">{item.dec}</p>
            </div>
            <div className="text-gray-500 px-5 flex gap-3 items-center py-3">
            <GiNetworkBars/>
                <p className="text-gray-500">{item.desc }</p>
            </div>
            <div className="flex px-5 text-orange-300 items-center ">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <p className="pl-2">{item.num}</p>
            <p className="text-gray-300 pl-3 py-3">{item.number}</p>
            </div>
            <hr/>
            <div className="py-4 px-5 flex items-center justify-between">
                <img className=" w-10 rounded-full" src={item.pic} alt="" />
                <p className="text-gray-500">{item.text}</p>
            <div className="text-gray-500">
            <CiSaveDown2/>
            </div>
            </div>
            
            </div>
            )
            })}
        </div>
        </div>
        </div>
        </>
    )
}

export default Trend



const ServiceData =[
{
    img:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg",
    title: "How to easily create a website with React",
    dec: "3 hours 56 minutes",
    desc: "Biginner",
    num: "4.7",
    number:"(26)",
    pic:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg",
    text:"Morris Mccoy ",

},

{
    img:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg",
    title: "GraphQL: introduction to graphQL for beginners",
    dec: "2 hours 46 minutes",
    desc: "Expert",
    num: "4.2",
    number:"(17)",
    pic:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg",
    text:"Ted Hawkins",
    
},
{
    img:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg",
    title: "Angular – the complete guide for beginner",
    dec: "1 hours 30 minutes",
    desc: "Biginner",
    num: "4.5",
    number:"(8)",
    pic:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg",
    text:"Juanita Bell",
    
    
},
{
    img:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
    title: "The Python Course: build web application",
    dec: "2 hours 30 minutes",
    desc: "Inetermediate",
    num: "4.6",
    number:"(7)",
    pic:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg",
    text:"Claire Robertson",
    
}   
]