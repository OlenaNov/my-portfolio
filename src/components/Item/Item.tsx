import { v4 as uuidv4 } from 'uuid';
import { AddButton, Name, Price, Wrapper } from "./Item.styled";

export const Item = ({ itemdata, setCurrentOrder, currentOrder }) => {
    // console.log(itemdata);

    const addItem = (name, price, amount) => {
        const newItem = {
            name,
            price,
            amount
        };
    
        if (!currentOrder) {
            const newOrder = {
                name: uuidv4(),
                date: new Date().getTime(),
                status: false,
                items: [newItem],
                total: 1,
                totalPrice: price * amount
            };
    
            setCurrentOrder(newOrder);
            return newOrder;
        }
    
        let updatedItems;
    
        if (!currentOrder.items.some(item => item.name === name)) {
            updatedItems = [...currentOrder.items, newItem];
        } else {
            updatedItems = currentOrder.items.map(item => {
                if (item.name === name) {
                    return {
                        ...item,
                        amount: Number(item.amount) + Number(amount)
                    };
                }
                return item;
            });
        };

        setCurrentOrder(prevOrder => ({
            ...prevOrder,
            items: updatedItems,
            total: updatedItems.reduce((acc, item) => acc + Number(item.amount), 0),
            totalPrice: updatedItems.reduce((acc, item) => acc + Number(item.price) * Number(item.amount), 0)
        }));

    // console.log(currentOrder);
    
    
        return updatedItems;
    };
    
    
    return (
        <Wrapper>
            <Name>{itemdata.name}</Name>
            <Price>{itemdata.price}</Price>
            <AddButton type="button" onClick={() => addItem(itemdata.name, itemdata.price, 1)} />
        </Wrapper>
     );
   };
   
   export default Item;