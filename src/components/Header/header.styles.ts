import styled from "styled-components";

export const Container = styled.header`
    display:grid;
    grid-template-areas: "title search-bar links";
    background-color:var(--background);
    @media (max-width: 400px){
        grid-template-areas: "title . links" 
        "search-bar search-bar search-bar";
    }
`;

export const Title = styled.h1`
    grid-area: title;
    font-weight:400;
    margin-left:2rem;
    color: var(--blue);
    font-size: 3rem;
    @media(max-width:500px){
        font-size: 2.5rem;
    }
`;
export const FormSearch = styled.form`
    position:relative;
    grid-area:search-bar;
    align-self: center;
    margin: 0 auto;
    @media (max-width: 400px){
        margin: 0.5rem 2rem;
    }
`;
export const Input = styled.input`
    width:40vw;
    font-size:2rem;
    font-family: 'Inter', sans-serif;
    padding: 0.5rem;
    padding-left:3.5rem;
    border-radius:0.5rem;
    @media (max-width: 400px){
        width:100%;
    }
`;
export const Image = styled.img`
    position: absolute;
    width:3rem;
    left:0;
    top:50%;
    transform: Translate(0, -50%);
`;
export const SocialMedia = styled.div`
    margin-right:1rem;
    grid-area: links;
    height:100%;
    display:flex;
    justify-content: flex-end;
    align-items:center;
    gap: 1rem;
`;
export const Link = styled.a`
    height:100%;
    display:flex;
`;
export const LinkIcon = styled.img`
    width: 3rem;
`;