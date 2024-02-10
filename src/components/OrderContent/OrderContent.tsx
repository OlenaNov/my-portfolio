import ItemOrderContent from "../ItemOrderContent/ItemOrderContent";
import { List, Wrapper } from "./OrderContent.styled";

export const OrderContent = ({ orederContent }) => {
//  console.log(orederContent.items);
 
 return (
    <Wrapper>
        <List>
        {orederContent.items.map(item => (
              <ItemOrderContent
              key={item.name}
              itemContent={item}
          />
            ))}
        </List>
    </Wrapper>
  );
};

export default OrderContent;