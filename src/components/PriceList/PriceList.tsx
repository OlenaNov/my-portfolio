
import { List, Wrapper } from "./PriceList.styled";
import Item from "../Item";
import { Wrapper as WrapperLi, Name, Price, BasketIcon } from "../Item/Item.styled";

export const PriceList = ({ itemsList, setCurrentOrder, currentOrder }) => {
 

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
              setCurrentOrder={setCurrentOrder} 
              currentOrder={currentOrder}
          />
            ))}
        </List>
    </Wrapper>
  );
};

export default PriceList;