import { useEffect, useState } from "react";
import { OrderButton, IconOrder } from "./Button.styled";
// import { fetchOrderList } from "../../utilites/api";

export const Button = ({ openOrderList, isLoading }) => {

    // const [isLoading, setIsLoading] = useState(false);
    // const [order, setOrder] = useState([]);

    // const openOrderList = async () => {
    //     try {
    //         console.log("Order is open!");
    //         setIsLoading(true);
    //         const result = await fetchOrderList();
    //         console.log(result);

    //         setOrder(result);
    //         console.log(order);

    //     } catch (err) {
    //         console.log(err);
        
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     if (order.length > 0) {
    //         console.log("UseEffect order");

    //     }
    // }, [order]);

    return (
        <OrderButton type="button" onClick={openOrderList} disabled={isLoading}>
            <IconOrder />
        </OrderButton>
    );
};

export default Button;
