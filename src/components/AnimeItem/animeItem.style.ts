import styled from 'styled-components';

type props = {
    background:string
}
export const Container = styled.a<props>`
    height: 35rem;
    background: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;
export const Gradient = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    transform: translateY(2.5rem);
    background: linear-gradient(0deg, rgba(20,19,19,1) 0%, rgba(19,19,19,0) 100%);
    transition: 0.5s;
    ${Container}:hover &{
        transform: translateY(0);
    }
`;
export const InfoContent = styled.div`
    position: absolute;
    bottom: 0;
    transition: .5s;
    transform: translateY(2.5rem);
    width: 100%;
    ${Container}:hover &{
        transform: translateY(0);
    }
`;
type InfoProps = {
    textColor?: string
}
export const Info = styled.h4<InfoProps>`
    font-size: 2rem;
    padding-left: 0.5rem;
    width: 80%;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.textColor};
    font-weight: 400;
`;
Info.defaultProps = {
    textColor: "var(--white)"
}
export const trailerButton = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: var(--background);
    border-radius: 50%;
    position: absolute;
    right: 0;
    margin: 0.5rem;
`;
export const trailerText = styled.p`
    white-space: nowrap;
    background-color: var(--background);
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-110%, -50%);
    font-size: 2rem;
    color: var(--white);
    overflow: hidden;
    width: 0;
    height: 80%;
    text-align: left;
    display: flex;
    align-items: center;
    transition: .5s;
    ${trailerButton}:hover &{
        width: 250%;
        padding-left: 1rem;
    }
`;  
export const trailerIcon = styled.img`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    ${trailerButton}:hover &{
        filter: 
            drop-shadow(0 0 0.2rem var(--white))
            drop-shadow(0 0 0.7rem var(--white))
        ;
    }
`;