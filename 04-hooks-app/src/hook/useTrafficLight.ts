import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500  animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// type TrafficLightColor = "red" | "yellow" | "green";
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // console.log(countdown);
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      // console.log("setInterval");
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      // console.log("cleanup effect");
      clearInterval(intervalId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
    }
    if (light === "yellow") {
      setLight("red");
    }
    if (light === "green") {
      setLight("yellow");
    }
  }, [countdown, light]);

  return {
    // Props
    countdown,

    // Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "red" ? colors[light] : "bg-gray-500",
    redLight: light === "red" ? colors[light] : "bg-gray-500",
    yellowLight: light === "yellow" ? colors[light] : "bg-gray-500",
    // Methods
  };
};
