import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "HEADER" "CENTER" "FOOTER";
  grid-auto-rows: 60px auto 40px;
`;

export const CenterContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  grid-area: CENTER;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
