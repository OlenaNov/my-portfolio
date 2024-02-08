import { useEffect, useState } from "react";
import OrderContentList from "../OrderContentList/OrderContentList";
import { Wrapper } from "./Main.styled";
import { fetchItems } from "../../utilites/api";

export const Main = () => {

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
        console.log("It's useEffect!!!!");
        searchItems();
    }, [])

 return (
    <Wrapper>
        {items.length ? <OrderContentList itemsList={items} /> : null }
    </Wrapper>
  );
};

export default Main;