import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { TbBasketPlus } from "react-icons/tb";

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

export const AddButton = styled(FaPlus)`
margin: 4px;
padding: 4px;

background: #add8e6;
fill: #007FFF;
border: solid #009FFF 1px;
border-radius: 8px;

&:hover, 
&:focus {
background: #acc8e6;
border: solid #007FFF 1px;
}
`;


export const BasketIcon = styled(TbBasketPlus)`
margin: 4px;
padding: 4px;

background: #add8e6;
fill: #007FFF;
`;