import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  function appendToDisplay(value) {
    setInput((p) => p + value);
  }

  function clearDisplayScreen() {
    setInput("");
  }

  function evaluate() {
    try {
      const result = eval(input);
      setInput(result);

      if (result !== undefined && isNaN(result)) {
        setInput(result.toString());
      }
    } catch (error) {
      setInput("Error");
    }
  }

  return (
    <div className="calculator__app">
      <input type="text" value={input} readOnly name="displayScreen" />
      <div className="keypads">
        <button onClick={() => appendToDisplay("7")}>7</button>
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button onClick={() => appendToDisplay("*")}>x</button>
        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button onClick={() => appendToDisplay("-")}> - </button>
        <button onClick={() => appendToDisplay("1")}>1</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button onClick={() => appendToDisplay("+")}>+</button>
        <button onClick={() => appendToDisplay("/")}>/</button>
        <button onClick={clearDisplayScreen}>C</button>
        <button onClick={evaluate}>=</button>
        <button onClick={() => appendToDisplay(".")}>.</button>
      </div>
    </div>
  );
}
