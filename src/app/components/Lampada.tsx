'use client'; 

import { useState } from 'react';

export default function Lampada() {
  const [ligada, setLigada] = useState(false);

  const alternarLampada = () => {
    setLigada(!ligada);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src={ligada ? '/lampada_ligada.jpg' : '/lampada_desligada.jpg'}
        alt={ligada ? 'Lâmpada acesa' : 'Lâmpada apagada'}
        className="w-52 mb-4 transition-opacity duration-300"
      />

      {/* Interruptor */}
      <button onClick={alternarLampada} className="focus:outline-none">
        <img
          src={ligada ? '/interruptor-ligado.jpg' : '/interruptor-desligado.jpg'}
          alt={ligada ? 'Interruptor ligado' : 'Interruptor desligado'}
          className="w-24 transition-transform duration-200 hover:scale-105"
        />
      </button>
    </div>
  );
}
