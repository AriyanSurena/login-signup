"use client";
import { useEffect, useState } from "react";

export default function useModeChecker(): 0 | 1 | undefined {
  const [modeResult, setModeResult] = useState<0 | 1>();
  let mediaQuery: MediaQueryList;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateMode = () => {
      if (mediaQuery.matches) {
        setModeResult(0); // Dark Mode is On
      } else {
        setModeResult(1); // Light Mode is On
      }
    };
    mediaQuery.addEventListener("change", updateMode);

    // Initial check
    updateMode();

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, []);
  return modeResult;
}