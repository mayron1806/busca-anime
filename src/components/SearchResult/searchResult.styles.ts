import styled, { keyframes }  from "styled-components";

export const Container = styled.div`
  position:relative;
  width:100%;
  height: 100%;
`;
const dotsAnim = keyframes`
  0%{
    content: "";
  }
  25%{
    content: ".";
  }
  50%{
    content: "..";
  }
  75%{
    content: "...";
  }
`;
export const Loading = styled.h4`
  
  color: var(--white);
  font-weight: 400;
  font-size: 4rem;
  &::after{
    content: "";
    animation: ${dotsAnim} 1s linear infinite;
  }
`;
export const AnimeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 26rem));
  grid-gap: 1.5rem;
  justify-content:center;
`;