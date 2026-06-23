import { useEffect, useState } from "react";

export default function EffectChallenge() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect( function startCounter() {
    let timerHandle = null ;

    timerHandle = setInterval(() => {
      if(isRunning) {
        setSeconds(prev => (
          prev + 1
        ));
      }
    }, 1000);

    return () => {
      if(timerHandle) {
        clearInterval(timerHandle)
      }
    }
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6"> The Stopwatch Challenge</h1>
      <div className="max-w-xs">
        <div className="border-2 border-purple-900 p-6 text-6xl font-bold text-center rounded-lg">{seconds}</div>
        <div className="mt-10 flex items-center justify-evenly gap-4">
          <button
            onClick={() => setIsRunning(true)}
            className="bg-blue-800 px-6 py-2 rounded cursor-pointer"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            className="bg-pink-800 px-6 py-2 rounded cursor-pointer"
          >
            Stop
          </button>

          <button 
            onClick={handleReset} 
            className="bg-purple-800  px-6 py-2 rounded cursor-pointer"
          >
            Rest
          </button>
        </div>
      </div>
    </div>
  )
}
