import styled from "styled-components";

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    background-color:var(--background);
`;

export const Title = styled.h1`
    font-weight:400;
    margin-left:2rem;
    color: var(--blue);
    font-size: 3rem;
    text-align:center;
`;
export const FormSearch = styled.form`
    position:relative;
`;
export const Input = styled.input`
    width:40vw;
    font-size:2rem;
    font-family: 'Inter', sans-serif;
    padding: 0.5rem;
    padding-left:3.5rem;
    border-radius:0.5rem;
`;
export const Image = styled.img`
    position: absolute;
    width:3rem;
    left:0;
    top:50%;
    transform: Translate(0, -50%);
`;
export const SocialMedia = styled.div`
    margin-right:2rem;
    display:flex;
    gap: 1rem;
`;
export const LinkIcon = styled.img`
    width: 3rem;
`;