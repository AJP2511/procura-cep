import styled, { keyframes } from "styled-components";

const SquareWalk = keyframes`
0%{
  top: 0px;
  left:0px;
  transform: rotate(90deg)
}
25%{
  top: 0px;
  left: 300px;
  transform: rotate(180deg)


}
50%{
  top: 300px;
  left:300px;
  transform: rotate(270deg)

}
75%{
  top: 300px;
  left:0px;
  transform: rotate(360deg)

}
100%{
  top:0px;
  left:0px;
  transform: rotate(360deg)

}
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

export const SquareWait = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.warning};
  border-radius: 5px;
  position: absolute;
  animation: ${SquareWalk} 4s infinite;
`;
