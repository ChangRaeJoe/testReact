import { useState } from "react";

export function Sub3() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => Math.min(c + 1, 100))}>Up</button>
      <button onClick={() => setCount((c) => Math.max(0, c - 1))}>
        Down
      </button>
    </>
  );
}
