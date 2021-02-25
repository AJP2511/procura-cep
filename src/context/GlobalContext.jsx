import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [cep, setCep] = useState({});

  const getCep = async (cep) => {
    const request = await axios({
      baseURL: `https://viacep.com.br/ws/${cep}/json/`,
      method: "GET",
    });

    setCep({
      data: request.data,
      status: request.status,
    });
  };

  return (
    <GlobalContext.Provider value={{ theme, setTheme, getCep, cep }}>
      {children}
    </GlobalContext.Provider>
  );
};
