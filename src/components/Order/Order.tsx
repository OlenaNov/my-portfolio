import { Date, Name, OpenOrderButton, OpenOrderIcon, StatusButton, StatusIconDraft, StatusIconSubmitted, Total, TotalPrice, Wrapper } from "./Order.styled";

export const Order = ({ order }) => {
    console.log("Order");
    
    console.log(order);
    
    return (
        <Wrapper>
            <Name>{order.name}</Name>
            <Date>{order.date}</Date>
            <Total>{order.total}</Total>
            <TotalPrice>{order.totalPrice}</TotalPrice>
            <StatusButton>
                {order.status ? <StatusIconSubmitted /> : <StatusIconDraft /> }
            </StatusButton>
            <OpenOrderButton>
                <OpenOrderIcon />
            </OpenOrderButton>
        </Wrapper>
     );
   };
   
   export default Order;