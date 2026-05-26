import { useEffect, useState } from "react";

import WindowTracker from "../../../components/WindowTracker";

export default function EffectPlayground() {
  const [count, setCount] = useState(0);
  
  //This is a Side Effect: Modifying the browser's document title
  useEffect(() => {
    console.log("3. Effect: The effect runs!");
    document.title = `Count is ${count}`;
  });

  console.log("1. Render: The component function runs!");
  

  return (
    <div className="p-8">
      { console.log("2. Paint: The UI is being paint!") }
      <h1 className="text-2xl mb-4">Check your console!</h1>
      <button
        onClick={() => setCount( count+ 1)} 
        className="px-6 py-3 bg-gray-600">
        Trigger FRe-Render
      </button>
      <WindowTracker />
    </div>
  )
}
