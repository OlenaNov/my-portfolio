import { styled } from "styled-components";


export const Backdrop = styled.div`
position: fixed;
z-index: 100;

top: 0;
left: 0;
width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

background-color: rgba(0, 0, 0, 0.8);
`;

export const Wrapper = styled.div`

padding: 24px;

max-width: calc(100vw - 80px);
max-height: calc(100vh - 80px);

border-radius: 16px;
background-color: white;
`;


export const List = styled.ul`
 
`;


export const Item = styled.li`
 
`;


export const Name = styled.p`
 
`;


export const Date = styled.span`
 
`;

export const OpenMore = styled.button`
 
`;