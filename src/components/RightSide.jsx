import React, { useContext } from "react";
import {
  MainContainer,
  ReqContainer,
  SquareWait,
} from "../styles/components/RightSide.styled";
import { GlobalContext } from "../context/GlobalContext";

const RightSide = () => {
  const { cep } = useContext(GlobalContext);

  return (
    <MainContainer>
      {cep.status ? (
        <ReqContainer>
          <p>Cep: {cep.data.cep}</p>
          <p>Logradouro: {cep.data.logradouro}</p>
          <p>Complemento: {cep.data.complemento}</p>
          <p>Bairro: {cep.data.bairro}</p>
          <p>Localidade: {cep.data.localidade}</p>
          <p>Uf: {cep.data.uf}</p>
          <p>ibge: {cep.data.ibge}</p>
          <p>Gia: {cep.data.gia}</p>
          <p>DDD: {cep.data.ddd}</p>
          <p>Siafi: {cep.data.siafi}</p>
        </ReqContainer>
      ) : (
        <SquareWait largura={event.}></SquareWait>
      )}
    </MainContainer>
  );
};

export default RightSide;
