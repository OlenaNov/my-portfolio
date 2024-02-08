import { AddButton, Name, Price, Wrapper } from "./Item.styled";

export const Item = ({ itemdata }) => {

    // console.log(itemdata);
    
    return (
        <Wrapper>
            <Name>{itemdata.name}</Name>
            <Price>{itemdata.price}</Price>
            <AddButton type="button" />
        </Wrapper>
     );
   };
   
   export default Item;