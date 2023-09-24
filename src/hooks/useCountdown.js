import { useState, useEffect } from "react";
import { getCount, setCount } from "../utils";

export default function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(getCount() || -1);

  useEffect(() => {
    setCount(secondsLeft);
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds) {
    setSecondsLeft(seconds);
  }

  return { secondsLeft, start };
}
