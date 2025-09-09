"use client"
import React from "react";

const products = [
  { nome: "Camiseta", preco: 59.9 },
  { nome: "Caneca", preco: 29.90 },
  { nome: "Adesivo", preco: 9.9 },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {products.map((produto, idx) => (
          <li key={idx}>
            <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}