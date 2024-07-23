import { createContext } from "react";
import { useContext } from "react";

export const ThemeContext=createContext();
export const ThemeContextProvider=ThemeContext.Provider;
export const useTheme=()=>{
    return useContext(ThemeContext)
}