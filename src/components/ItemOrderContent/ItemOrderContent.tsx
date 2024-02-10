import { Amount, Name, Price, Wrapper } from "./ItemOrderContent.styled";

export const ItemOrderContent = ({ itemContent }) => {

    // console.log(itemContent);
    
    return (
        <Wrapper>
            <Name>{itemContent.name}</Name>
            <Price>{itemContent.price}</Price>
            <Amount>{itemContent.amount}</Amount>
        </Wrapper>
     );
   };
   
   export default ItemOrderContent;