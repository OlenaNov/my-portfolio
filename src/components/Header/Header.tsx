import Button from "../Button/Button";
import { Navigation, SubWrapper, Text, Wrapper } from "./Header.styled"

export const Header = ({ openOrderList, isLoading, currentOrder }) => {

 
 return (
    <Wrapper>
        <Navigation>
            <SubWrapper>
            <p>Welcome to Purchase orders</p>
            <Button openOrderList={openOrderList} isLoading={isLoading} />
            </SubWrapper>
            {currentOrder && <Text>Your order: {currentOrder}</Text>}
        </Navigation>
    </Wrapper>
  );
};

export default Header;