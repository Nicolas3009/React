import NavBar from './NavBar';
import { AiOutlineShoppingCart } from "react-icons/ai";  
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header className="header">

                <div>
                    <p> <Link to='/' style={{'textDecoration': 'none', 'color': 'white',}}> La Isla</Link> </p>
                    <div>
                    <Link to='/cart'><AiOutlineShoppingCart/></Link> 
                   <span>3</span>
                    </div>
                    <NavBar />
                </div>
            </header>
    );
}
export default Header;