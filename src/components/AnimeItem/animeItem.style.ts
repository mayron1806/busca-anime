import styled from 'styled-components';

type props = {
    background:string
}
export const Container = styled.div<props>`
    height: 35rem;
    background: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    &:hover: :first-child{
        height: 40%;
    }
`;
export const Gradient = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(0deg, rgba(20,19,19,1) 0%, rgba(19,19,19,0) 100%);
`;
export const Name = styled.h4`
    position: absolute;
    bottom: 0;
    font-size: 2rem;
    padding: 0.5rem;
    width: 80%;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:var(--white);
    font-weight: 400;
`;