import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWIdth] = useState(window.innerWidth);

  // Different parts of useEffect
  useEffect(function calculateWindowWidth () {
    // PART 1. THE ACTION (what useEffect does)
    const handleWindowWidth = () => { 
      console.log("Window resized!");
      setWindowWIdth(window.innerWidth);
    }

    // We reach outside of react to touch the browser's DOM API 
    window.addEventListener("resize", handleWindowWidth);

    // PART 3. THE CLEANING
    // If the component is removed from the screen we must remove the event listener
    // Otherwise we create a massive memory leak
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    }

  }, []); // PART 2. The DEPENDENCY ARRAY(Trigger part)

  return (
    <div className="text-xl font-bold border-2 mt-6 p-4">Window width: {windowWidth} px</div>
  )
}
