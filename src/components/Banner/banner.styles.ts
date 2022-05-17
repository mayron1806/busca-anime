import styled from "styled-components";


export const Container = styled.div`
    background-color: rgba(0,0,0, 0.2);
    backdrop-filter: blur(0.4rem);
    border: 0.2rem solid var(--background);
    display:flex;
    justify-content: space-between;
    width: 98vw;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    @media (max-width: 500px){
        flex-direction: column-reverse;
        align-items:center;
    }
`;
export const Info = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    @media (max-width: 500px){
        text-align:center;
        align-items:center;
    }
`;
export const Title = styled.h3`
    max-width: 25rem;
    font-size: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight:400;
    color: var(--white);
    margin:0;
    margin-bottom:1rem;
    
    @media (max-width: 500px){
        text-align:center;
    }
`;
export const Synopsis = styled.p`
    font-size: 1.4rem;
    font-family: 'Inter', sans-serif;
    display: -webkit-box;
    width: 70%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--white);
    @media (max-width: 500px){
        width: 100%;
    }
    @media (max-width: 400px){
        font-size:80%;
    }
`;
export const Buttons = styled.div`
    display:inline-flex;
    gap: 3rem;
    @media (max-width: 500px){
        justify-content space-evenly;
    }
`;
const Button = styled.a`
    font-family: 'Inter', sans-serif;
    color: var(--white);
    padding:0.5rem 1rem;
    border-radius:1rem;
    display:flex;
    align-items:center;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor:pointer;
    transition: 0.5s;
    &:hover{
        transform: scale(1.1) translateY(-0.5rem);
    }
`;
export const OutlineButton = styled(Button)`
   border:0.3rem solid var(--white);
    &:hover{
        box-shadow: 
        0 0 1rem var(--white),
        0 0 2rem var(--white),
        0 0 3rem var(--white)
    }
`;  
export const FilledButton = styled(Button)`
    border:0.3rem solid var(--blue);
    background-color: var(--blue);
    &:hover{
        box-shadow: 
        0 0 1rem var(--blue),
        0 0 2rem var(--blue),
        0 0 3rem var(--blue)
    }
`;
export const TrailerIcon = styled.img`
    width:3rem;
`;
export const ImageContainer = styled.div`
    flex-shrink:3;
    background-repeat: no-repeat;
    height: 35vh;
`;
export const Image = styled.img`
    height: 100%;
`;
export const BlockContainer = styled.div`
    height:35vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-itens: center;
    color:var(--white);
`;
export const ImageBlock = styled.img`
    height: 10rem;
`;
export const BannerUndefinedText = styled.p`
    font-family: 'Inter', sans-serif;
    text-align: center;
`;