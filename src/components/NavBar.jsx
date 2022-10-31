

import { data } from "../utilidades/data";
function NavBar() {
  return (
    <>
      <ul class="navbar-nav">
        {navBarOptions.map(navBarOptions => <li key={navBarOptions.id} className="nav-item">
          <a class=" m-4 active">{navBarOptions.category}</a>
        </li>)}
      </ul>
    </>
  );
}
export default NavBar;