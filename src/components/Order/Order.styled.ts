import { styled } from "styled-components";
import { GoIssueClosed } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export const TitleWrapper = styled.li`
display: flex;
gap: 48px;
align-items: center;

padding: 4px;

&: not(:last-child) {
    margin-bottom: 8px;
}

background: #add8e6;
border-radius: 12px;
`;

export const Wrapper = styled.li`
display: flex;
flex-direction: column;
align-items: center;

padding: 4px;

&: not(:last-child) {
    margin-bottom: 8px;
}

background: #add8e6;
border-radius: 12px;
`;


export const SubWrapper = styled.div`
display: flex;
align-items: center;
gap: 48px;

width: 100%;
`;

export const Name = styled.p`
 padding: 4px;
 padding-left: 8px;
 margin: 0;
`;

export const TotalPrice = styled.p`
margin: 0;
margin-left: auto;
margin-right: auto;
padding: 4px;
`;


export const Date = styled.span`
 
`;


export const Total = styled.span`
 
`;


export const StatusButton = styled.button`
 
`;

export const StatusIconDraft = styled(GoPencil)`
 fill: yellow;
`;

export const StatusIconSubmitted = styled(GoIssueClosed)`
fill: green;
`;

export const OpenOrderButton = styled.button`
 
`;

export const OpenOrderIcon = styled(FaChevronDown)`
 fill: blue;
`;

export const CloseOrderIcon = styled(FaChevronUp)`
 fill: blue;
`;