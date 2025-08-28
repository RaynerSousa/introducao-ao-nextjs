"use client"
import { useState } from "react"
import { ToggleDark } from "../components/ToggleDark"


export default function DarkTheme(){
    const [isDark, setDark] = useState (false)

    const handleToggleTheme=() =>{
        setDark(isDark => !isDark)
    }

    return(
        <div className={`h-screen flex flex-col justify-center items-center transition-all duration-700
        ${isDark? "bg-amber-50 text-black": "bg-black text-white"}`}>
            <h1>Pagina {isDark ? 'Ligth Theme': 'Dart Theme'}</h1>

            {/* <button onClick={()=>{handleToggleTheme()}} className="h-10 w-20 bg-blue-500">Click aqui</button> */}
            <ToggleDark onToggle={handleToggleTheme} isDark={isDark}/>
        </div>
    )
}