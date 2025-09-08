"use client";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  const handleOperatorClick = (operator: string) => {
    const operators = ["+", "-", "*", "/"];

    const disableOperators = operators.filter((op) => op !== operator);

    const hasAnotherOperator = disableOperators.some((op) =>
      display.includes(op)
    );
    if (hasAnotherOperator) return;

    setDisplay(display + operator);
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    if (display.includes("+")) {
      sun();
    } else if (display.includes("-")) {
      subtraction();
    } else if (display.includes("*")) {
      product();
    } else if (display.includes("/")) {
      division();
    }
  };

  const sun = () => {
    const values = display.split("+");

    const result = values.reduce(
      (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
      0
    );
    setDisplay(String(result));
  };

  const subtraction = () => {
    const values = display.split("-");
    const numberValues = values.map((value) => Number(value));

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora - valorAtual
    );
    setDisplay(String(result));
  };
  const product = () => {
    const values = display.split("*");
    const numberValues = values.map((value) => Number(value));

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora * valorAtual
    );
    setDisplay(String(result));
  };

  const division = () => {
    const values = display.split("/");
    const numberValues = values.map((value) => Number(value));

    if (numberValues[0] === 0) {
      setDisplay("0");
      return;
    }

    if (numberValues.includes(0)) {
      setDisplay("Divisão por 0");
      return;
    }

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora / valorAtual
    );

    setDisplay(String(result));
  };

  return (
    <div className="flex flex-col items-center my-10">
      {/* display */}
      <div
        className="flex justify-center overflow-x-auto
                items-center border border-gray-400 rounded 
                p-2 w-40 h-14 text-center text-xl"
      >
        {display}
      </div>

      <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
        <button
          className="bg-blue-500 p-2 rounded"
          onClick={() => {
            setDisplay(display + "0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setDisplay(display + "1");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          1
        </button>
        <button
          onClick={() => {
            setDisplay(display + "2");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          2
        </button>
        <button
          onClick={() => {
            setDisplay(display + "3");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          3
        </button>
        <button
          onClick={() => {
            setDisplay(display + "4");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          4
        </button>
        <button
          onClick={() => {
            setDisplay(display + "5");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          5
        </button>
        <button
          onClick={() => {
            setDisplay(display + "6");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          6
        </button>
        <button
          onClick={() => {
            setDisplay(display + "7");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          7
        </button>
        <button
          onClick={() => {
            setDisplay(display + "8");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          8
        </button>
        <button
          onClick={() => {
            setDisplay(display + "9");
          }}
          className="bg-blue-500 p-2 rounded"
        >
          9
        </button>

        <button
          onClick={() => {
            handleOperatorClick("*");
          }}
          className="bg-indigo-500 p-2 rounded"
        >
          *
        </button>

        {/* Botão Soma */}
        <button
          onClick={() => {
            handleOperatorClick("+");
          }}
          className="bg-indigo-500 p-2 rounded"
        >
          +
        </button>

        <button
          onClick={() => {
            setDisplay("");
          }}
          className="bg-gray-400 p-2 rounded"
        >
          C
        </button>

        <button
          onClick={() => {
            handleOperatorClick("-");
          }}
          className="bg-indigo-500 p-2 rounded"
        >
          -
        </button>

        <button
          onClick={() => {
            handleOperatorClick("/");
          }}
          className="bg-indigo-500 p-2 rounded"
        >
          /
        </button>

        <button
          onClick={() => {
            backspace();
          }}
          className="bg-gray-400 p-2 rounded col-span-1"
        >
          <img src="/backspace.png" alt="" />
        </button>
        <button
          onClick={() => {
            calculate();
          }}
          className="bg-amber-400 p-2 rounded col-span-2    "
        >
          =
        </button>
      </div>
    </div>
  );
}
