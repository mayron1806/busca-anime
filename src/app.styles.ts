import styled, { keyframes } from "styled-components";
import backgroundImage from "./assets/images/background.png";

const backgroundAnim = keyframes`
  100%{
    background-position:-3000px -3000px ;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  animation: ${backgroundAnim} 90s linear infinite;
`;
export const Main = styled.div`
  height: 100%;
  width:100%;
  margin-top: 1rem;
  padding: 1rem;
`;
