import React from "react";
import "./App.css";

const elements = [
  { element: "Anemo", id: 1 },
  { element: "Geo", id: 2 },
  { element: "Electro", id: 3 },
  { element: "Dendro", id: 4 },
  { element: "Pyro", id: 5 },
  { element: "Cryo", id: 6 },
];

function App() {
  const listElements = elements.map((elements) => (
    <li key={elements.id}>{elements.element}</li>
  ));
  return (
    <>
      <ul>{listElements}</ul>
    </>
  );
}

export default App;
