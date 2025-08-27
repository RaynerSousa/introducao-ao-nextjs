"use client";
import { useState } from "react";

export function ListaDeCompras() {
  const itens = [
    { item: "Leite", comprado: false },
    { item: "Pão", comprado: true },
    { item: "Ovos", comprado: false },
  ];
  const [comprar, setComprar] = useState(itens);

  function ButtomBoleano(index: number) {
    const newlist = comprar.map((item, i) => {
      if (i === index) {
        return { ...item, comprado: !item.comprado }; 
      }
      return item; 
    });
    setComprar(newlist); 
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Compras</h2>
      <ul className="list-disc">
        {comprar.map((item, index) => (
          <li key={index} className="flex gap-4 mb-3">
            <p className={`${item.comprado ? "line-through text-gray-500" : ""}`}>
              {item.item}
            </p>
            <button
              onClick={() => ButtomBoleano(index)}
              className="bg-blue-500 h-7 w-24 text-white rounded"
            >
              {item.comprado ? "Comprado" : "Comprar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

