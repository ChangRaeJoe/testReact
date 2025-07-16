import { useEffect, useState } from "react";

export function Sub2() {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleString());
      console.log("222");
    }, 1000);
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []);

  return (
    <>
      <p style={{ fontSize: "2rem" }}>{time}</p>
    </>
  );
}
