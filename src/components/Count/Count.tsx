import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => ++count)}>+</button>
      <button onClick={() => setCount((count) => --count)}>-</button>
    </div>
  );
}
