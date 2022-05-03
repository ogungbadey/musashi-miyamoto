import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: true };

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LIGHTMODE":
        return { darkMode: false };
      case "DARKMODE":
        return { darkMode: true };
      default:
        return state;
    }
  }, initialState);

  return <ThemeContext.Provider value={{state, dispatch}}>{children}</ThemeContext.Provider>
};
