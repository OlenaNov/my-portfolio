
import { List, Wrapper } from "./OrderContentList.styled";
import Item from "../Item/Item";
import { Wrapper as WrapperLi, Name, Price, BasketIcon } from "../Item/Item.styled";

export const OrderContentList = ({ itemsList }) => {
 

 return (
    <Wrapper>
        <List>
            <WrapperLi>
              <Name>Name</Name>
              <Price>Price</Price>
              <BasketIcon />
            </WrapperLi>
            {itemsList.map(item => (
              <Item
              key={item.name}
              itemdata={item} 
          />
            ))}
        </List>
    </Wrapper>
  );
};

export default OrderContentList;