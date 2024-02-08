import { useState } from "react";
import { OrderButton, IconOrder } from "./Button.styled";
import { fetchOrder } from "../../utilites/api";

export const Button = () => {

    const [OrderIsTrue, setOrderIsTrue] = useState(true);

    const openOrder = async () => {
        try {
            console.log("Order is open!");
            const result = await fetchOrder();
            console.log(result);

            setOrderIsTrue(true);
            return result;
        } catch (err) {
            console.log(err);
        }
    };

 return (
    <OrderButton type="button" onClick={openOrder} disabled={!OrderIsTrue}>
        <IconOrder />
    </OrderButton>
  );
};

export default Button;