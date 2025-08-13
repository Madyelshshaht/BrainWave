import React from 'react'
import { loading } from "../assets"
const Generating = ({className}) => {
    return (
        <div className={`flex items-center h-[3.5rem] px-6 bg-[#0E0C15]/80 rounded-[1.7rem] ${className || "" } text-base gap-3`}>
            <img src={loading}  alt="Loading..." width={20} height={20} /> 
            AI is generating 
        </div>
    )
}

export default Generating