'use client'

import { useState } from "react"

export default function LikButton(){

    const [isLiked, setisLiked] = useState(true)

    return(

        <div>
            <button
            onClick={()=>{setisLiked(!isLiked)}}
             className={`h-10 w-20 bg-blue-500 text-white rounded flex justify-center items-center
            ${isLiked ? "bg-red-500 hover:bg-red-400":"bg-green-600 hover:bg-green-500"}`}>
                <span>{isLiked?"pause":"Play"}</span>
            </button>
        </div>
    )
}