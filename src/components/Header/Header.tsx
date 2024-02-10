import Button from "../Button/Button";
import { Navigation, Wrapper } from "./Header.styled"

export const Header = ({ openOrderList, isLoading }) => {

 
 return (
    <Wrapper>
        <Navigation>
            <p>Welcome to Purchase orders</p>
            <Button openOrderList={openOrderList} isLoading={isLoading} />
        </Navigation>
    </Wrapper>
  );
};

export default Header;