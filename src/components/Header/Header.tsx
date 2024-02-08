import Button from "../Button/Button";
import { Wrapper } from "./Header.styled"

export const Header = () => {

 
 return (
    <Wrapper>
        <nav>
            <p>Welcome to Purchase orders</p>
            <Button />
        </nav>
    </Wrapper>
  );
};

export default Header;