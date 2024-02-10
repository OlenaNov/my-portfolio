import Order from "../Order/Order";
import { Date, Name, Total, TotalPrice, TitleWrapper } from "../Order/Order.styled";
import { Wrapper, List } from "./OrderList.styled";

export const OrderList = ({ orderList }) => {
//  console.log(orderList);
 

 return (
    <Wrapper>
        <List>
        <TitleWrapper>
            <Name>Name</Name>
            <Date>Date</Date>
            <Total>Total</Total>
            <TotalPrice>Total Price</TotalPrice>
            <Name>Status</Name>
            <Name>Open more</Name>
        </TitleWrapper>
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