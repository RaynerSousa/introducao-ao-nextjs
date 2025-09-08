"use client";
import { useState } from "react";

type Props = {
  initial: number;
};

export default function Counter(props: Props) {
  const [contador, setContador] = useState(props.initial);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="bg-blue-950 text-amber-200 text-center p-4 m-3">
        Contagem: ❤️{contador}
      </h1>

      <div className="flex gap-3 justify-center mt-2 mb-4">
        <button
          onClick={() => setContador(contador - 1)}
          className="bg-blue-400 p-3 self-center cursor-pointer hover:bg-blue-500 transition"
        >
          Like -
        </button>
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-blue-400 p-3 self-center cursor-pointer hover:bg-blue-500 transition"
        >
          Like +
        </button>
      </div>
    </div>
  );
}

// 'use client'; // se estiver usando app router

// import { useState } from 'react';

// export default function LikeButton() {
//   const [likes, setLikes] = useState(0);

//   const handleClick = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="flex items-center gap-2 bg-white border border-pink-500 text-pink-500 px-4 py-2 rounded-lg text-lg hover:bg-pink-500 hover:text-white transition duration-300"
//     >
//       ❤️ {likes}
//     </button>
//   );
// }

