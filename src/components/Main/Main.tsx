import { useEffect, useState } from "react";
import PriceList from "../PriceList/PriceList";
import { Wrapper } from "./Main.styled";
import { fetchItems } from "../../utilites/api";

export const Main = ({ setCurrentOrder, currentOrder }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
 
    const searchItems = async () => {
        try {
            setIsLoading(true);
            const result = await fetchItems();
            // console.log(result);
            
            if(!result) {
                console.log("Sorry, we don't have items..");
                return;
            };

            setItems(result);
            // console.log(items, isLoading);
                
        } catch(err) {
        console.log(err);
        
    } finally {
        setIsLoading(false);
    }
};

    useEffect(() => {
        // console.log("It's useEffect!!!!");
        searchItems();
    }, [])

 return (
    <Wrapper>
        {items.length ? <PriceList 
        itemsList={items} 
        setCurrentOrder={setCurrentOrder} 
        currentOrder={currentOrder} 
        /> : null }
    </Wrapper>
  );
};

export default Main;