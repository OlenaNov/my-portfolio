import { useEffect, useState } from "react";
import { CloseOrderIcon, Date, Name, OpenOrderButton, OpenOrderIcon, StatusButton, StatusIconDraft, StatusIconSubmitted, SubWrapper, Total, TotalPrice, Wrapper } from "./Order.styled";
import { fetchOrder } from "../../utilites/api";
import OrderContent from "../OrderContent";

export const Order = ({ order }) => {
    // console.log("Order");
    
    console.log(order.name, order.status, typeof Boolean(order.status));

    const [orderForRender, setOrderForRender] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    
    const openOrder = async name => {
        try {

            setIsLoading(true);
            const result = await fetchOrder();

            const currentOrder = result.find(order => 
                order.name === name
            );

            // setOrderForRender(s => {
            //     if(s !== currentOrder) {
            //         return currentOrder;
            //     }
            // })
            setOrderForRender(currentOrder);
            setIsOpen(s => !s);

        } catch (err) {

            console.log(err);
        
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {

        if(!orderForRender) {
            return;
        };

        // console.log(orderForRender);
    }, [orderForRender]);
    
    return (
        <Wrapper>
            <SubWrapper>
                <Name>{order.name}</Name>
                <Date>{order.date}</Date>
                <Total>{order.total}</Total>
                <TotalPrice>{order.totalPrice}</TotalPrice>
                <StatusButton>
                    {Boolean(order.status) ? <StatusIconSubmitted /> : <StatusIconDraft /> }
                </StatusButton>
                <OpenOrderButton type="button" onClick={() => openOrder(order.name)}>
                    {!isOpen ? <OpenOrderIcon /> : <CloseOrderIcon />}
                </OpenOrderButton>
            </SubWrapper>
            {orderForRender?.name ===  order.name && isOpen ? <OrderContent orederContent={orderForRender} /> : null}
        </Wrapper>
     );
   };
   
   export default Order;