import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormCep = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputForm = styled.input`
  margin-bottom: 2rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
`;

export const ButtonForm = styled.button`
  font-size: 1.25rem;
  padding: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.btnBackground};
  border: none;
  border-radius: 5px;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.white};
  }
`;
