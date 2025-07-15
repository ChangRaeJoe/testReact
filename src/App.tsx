import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

async function setItem() {
  const db = await Deno.openKv("test.db");
  const data = {
    name: "001010",
    theme: "dark",
  };
  await db.set(["bab"], data);
  db.close();
}

async function getItem(keyName: string[]) {
  const db = await Deno.openKv("test.db");
  const result = await db.get(keyName);
  console.log(result.value, result.versionstamp);
}

setItem();

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getItem(["bab"]);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
