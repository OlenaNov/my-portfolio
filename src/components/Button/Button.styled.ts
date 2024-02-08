import { styled } from "styled-components";
import { CiViewList } from "react-icons/ci";


export const OrderButton = styled.button`
margin: 4px;

background: #add8e6;

border: solid #009FFF 1px;
border-radius: 8px;

&:hover, 
&:focus {
background: #acc8e6;
border: solid #007FFF 1px;
}
`;


export const IconOrder = styled(CiViewList)`
width: 20px;
haight: 20px;

fill: #007FFF;
`;