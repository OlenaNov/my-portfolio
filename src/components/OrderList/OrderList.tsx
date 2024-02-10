import Order from "../Order/Order";
import { Wrapper as WrapperLi, Date, Name, Total, TotalPrice } from "../Order/Order.styled";
import { List, Wrapper } from "./OrderList.styled";

export const OrderList = ({ orderList }) => {
 console.log(orderList);
 

 return (
    <Wrapper>
        <List>
        <WrapperLi>
            <Name>Name</Name>
            <Date>Date</Date>
            <Total>Total</Total>
            <TotalPrice>Total Price</TotalPrice>
            <Name>Status</Name>
            <Name>Open more</Name>
        </WrapperLi>
            {orderList.map(order => (
              <Order
              key={order.name}
              order={order} 
          />
            ))}
        </List>
    </Wrapper>
  );
};

export default OrderList;