const NavBar = () => {
    return (
        <>
           <nav class=" nav navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class=" m-4 active" aria-current="page" href="">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class=" m-4 active" href="">Asador</a>
                </li>
                <li class="nav-item">
                  <a class=" m-4 active" href="">Cocina</a>
                </li>
                <li class="nav-item">
                  <a class=" m-4 active" href="">Decoración</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
}
export default NavBar;