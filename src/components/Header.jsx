import NavBar from './NavBar';
import { AiOutlineShoppingCart } from "react-icons/ai";  
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Header = () => {
    const { contadorDelCarrito} = useContext(CartContext)

    return (
            <header className="header">

                <div>
                    <p> <Link to='/' style={{'textDecoration': 'none', 'color': 'white',}}> La Isla</Link> </p>
                    <div>
                    <Link to='/cart'><AiOutlineShoppingCart/></Link> 
                   <span>{contadorDelCarrito()}</span>
                    </div>
                    <NavBar />
                </div>
            </header>
    );
}
export default Header;