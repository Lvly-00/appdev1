import { useState } from "react";
import "./App.css";

function App() {
  function ButtonCounter() {
    const [count, setCount] = useState(0);
    function handleCounting() {
      setCount(count + 1);
    }

    return <button onClick={handleCounting}> {count} </button>;
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ButtonCounter />
        <p>+</p>
        <ButtonCounter />
        <p>=</p>
        <ButtonCounter />
      </div>
    </>
  );
}

export default App;
