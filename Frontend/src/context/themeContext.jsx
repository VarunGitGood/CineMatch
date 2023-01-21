import { createContext, useEffect, useState } from "react";
export const themeProvider = createContext();
const ThemeContextProvide = (props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <themeProvider.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeProvider.Provider>
  );
};
export default ThemeContextProvide;
