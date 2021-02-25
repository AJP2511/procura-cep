import styled from "styled-components";

export const MainContainer = styled.header`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  @media (max-width: 720px) {
    margin-top: 0.5rem;
  }
`;

export const InternalSwitchContainer = styled.div`
  margin: 0 0.5rem;
`;

export const TextContainer = styled.div`
  text-align: center;
  text-align: center;
  flex: 1;
`;
