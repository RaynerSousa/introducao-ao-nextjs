'use client'
import { FaHeart } from "react-icons/fa6"
import { FaRegHand } from "react-icons/fa6"
import { FaRegHeart } from "react-icons/fa"
import { useState } from "react"

export default function LikeButton(){

    const [isLiked, setisLiked] = useState(false);

    return(

        <button 
        onClick={()=>{setisLiked(!isLiked)}}

        className={`flex items-center space-x-2 p-2 text-gray-400 hover:text-red-400 bg-gray-50 hover:bg-gray-100 rounded
        ${isLiked? "text-red-500 bg-red-300 hover:bg-red-300" :
        "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100" }`}>


            <span>{isLiked? <FaHeart/> : <FaRegHeart/>}</span>
            <span>{isLiked? "Curtido" : "Curtir"}</span>
        </button>
    )
}