import { AddButton, Name, Price, Wrapper } from "./Item.styled";

export const Item = ({ itemdata }) => {

    // console.log(itemdata);

    const addItem = (name) => {
        console.log(name);
        
    };
    
    return (
        <Wrapper>
            <Name>{itemdata.name}</Name>
            <Price>{itemdata.price}</Price>
            <AddButton type="button" onClick={() => addItem(itemdata.name)} />
        </Wrapper>
     );
   };
   
   export default Item;