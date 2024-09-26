"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the types for the context state and actions
interface StyleContextType {
  mode: string;
  setMode: (string: string) => void;
  toggleDarkMode: () => void;
  textColor: string;
  bgColor: string;
}
export const StyleContext = createContext<StyleContextType | undefined>(
  undefined
);

export const StyleContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);
  const [mode, setMode] = useState("dark");
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  //   ' : ' text-[#FFFFFF]
  useEffect(() => {
    if (mode === "light") {
      setTextColor("text-color-dark");
      setBgColor("bg-color-light");
    } else {
      setTextColor("text-color-light ");

      setBgColor("bg-color-dark");
    }
  }, [mode]);

  return (
    <StyleContext.Provider
      value={{ toggleDarkMode, mode, setMode, textColor, bgColor }}
    >
      {children}
    </StyleContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useCounter = (): StyleContextType => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
