import React,{useState} from "react";
import { useLocation, } from "react-router-dom";


const ServiceDetails = () => {
  const [count,setCount]=useState(0);
  console.log(count)
  const incrementValue=()=>{
    if(count>10)
    setCount(count+1)
 
  }

  const dcrementValue=()=>{
    if(count>0){
    setCount(count-1)
    }
  }

    return(
        <>
       Count: {count}
     <button className="bg-red-500 py-2 px-8  text-white" onClick={incrementValue}>Increment+</button> 
     <button className="bg-red-500 py-2 px-8  text-white" onClick={dcrementValue}>Decrement-</button>     

        </>
    );    
};

export default ServiceDetails;