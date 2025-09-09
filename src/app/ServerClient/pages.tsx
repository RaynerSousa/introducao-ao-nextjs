
'use client'
import React from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function ServerClient() {
  const dates = new Date();
  const date = dates.getDate();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();

  return (
    <div className="font-bold">
      <p>Hoje é dia {date}</p>
      <p>
        Exatamente {hours} horas e {minutes} Minutos 
      </p>

      <ThemeToggle/>
    </div>
  );
}




