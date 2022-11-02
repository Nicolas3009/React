

import { navBarOptions} from "../utilidades/products";
function NavBar() {
  return (
    <>
    <nav>
    <ul class="navbar-nav">
        {navBarOptions.map(navBarOption => <li key={navBarOption.id} className="nav-item">
          <a class=" m-4 active">{navBarOption.category}</a>
        </li>)}
      </ul>
    </nav>
    </>
  );
}
export default NavBar;