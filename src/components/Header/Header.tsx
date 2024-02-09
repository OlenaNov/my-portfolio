import Button from "../Button/Button";
import { Navigation, Wrapper } from "./Header.styled"

export const Header = ({ openOrder, isLoading }) => {

 
 return (
    <Wrapper>
        <Navigation>
            <p>Welcome to Purchase orders</p>
            <Button openOrder={openOrder} isLoading={isLoading} />
        </Navigation>
    </Wrapper>
  );
};

export default Header;