import { styled } from "styled-components";

export const Wrapper = styled.li`
display: flex;
gap: 48px;

padding: 4px;

&: not(:last-child) {
    margin-bottom: 8px;
}

background: #add8e6;
border-radius: 12px;
`;

export const Name = styled.p`
 padding: 4px;
 padding-left: 8px;
 margin: 0;
`;

export const Price = styled.p`
margin: 0;
margin-left: auto;
margin-right: auto;
padding: 4px;
`;

export const Amount = styled.p`
margin: 0;
margin-left: auto;
margin-right: auto;
padding: 4px;
`;
