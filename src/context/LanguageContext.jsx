import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
