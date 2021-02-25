import React, { useContext, useEffect, useState } from "react";
import {
  MainContainer,
  ButtonForm,
  FormCep,
  InputForm,
} from "../styles/components/LeftSide.styled";
import { GlobalContext } from "../context/GlobalContext";

const LeftSide = () => {
  const [cepValue, setCepValue] = useState("");
  const { getCep } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCep(cepValue);
    window.localStorage.setItem("CEP", cepValue);
    setCepValue("");
  };

  useEffect(() => {
    if (window.localStorage.getItem("CEP"))
      getCep(window.localStorage.getItem("CEP"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <FormCep onSubmit={handleSubmit}>
        <InputForm
          type="text"
          required
          placeholder="Digite seu CEP aqui"
          value={cepValue}
          onChange={({ target }) => setCepValue(target.value)}
        />
        <ButtonForm>Pesquisar</ButtonForm>
      </FormCep>
    </MainContainer>
  );
};

export default LeftSide;
