import { useState } from "react";
import "./App.css";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("increase가 클릭 됨");
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log("increase가 클릭 됨");
        }}
      >
        -1
      </button>
    </>
  );
}
export default Count;
