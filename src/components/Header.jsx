import NavBar from './NavBar';
import { AiOutlineShoppingCart } from "react-icons/ai";  
const Header = () => {
    return (
        <>
            <header className="header">

                <div>
                    <p>La Isla</p>
                    <div>
                    <AiOutlineShoppingCart/>
                    <p>3</p>
                    </div>
                    <NavBar />
                </div>
            </header>
        </>
    );
}
export default Header;