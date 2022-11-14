
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav>
    <ul>
      <li>
        
        <a><Link to='/category/1'>Asador</Link></a>
        <a><Link to='/category/2'>Cocina</Link></a>
        <a><Link to='/category/3'>Decoración</Link></a>
        </li>
      </ul>
    </nav>
    </>
  );
}
export default NavBar;