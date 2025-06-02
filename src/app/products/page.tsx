import React from "react";

const products = [
  { nome: "Camiseta NextJS", preco: 59.9 },
  { nome: "Caneca React", preco: 29.9 },
  { nome: "Adesivo JavaScript", preco: 9.9 },
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