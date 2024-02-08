import { Item, List, Wrapper } from "./ItemsList.styled";

interface ItemsProps {
  items: Array<{ _id: object; name: string; price: number }>;
}

export const ItemsList = ({ items }: ItemsProps) => {
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </List>
    </Wrapper>
  );
};

export default ItemsList;
