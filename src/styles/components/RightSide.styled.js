import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReqContainer = styled.div`
  border: 1px solid ${(props) => props.theme.warning};
  border-radius: 5px;
  padding: 1rem;
  p {
    margin: 0.5rem;
    font-weight: 600;
  }
`;
