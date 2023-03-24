import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export function useLoading() {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cleanup = () => {
    if (!message) return;

    const timeout = setTimeout(() => {
      setMessage(null);
    }, 3000);

    return () => clearTimeout(timeout);
  };

  return { message, setMessage, isLoading, setIsLoading, cleanup };
}
