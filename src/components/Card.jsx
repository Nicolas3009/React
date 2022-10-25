const NavBar = () => {
    return (
        <>
            <div class=" container-fluid ">
                <div class="row">
                    <div class=" col m-4 d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <img src="../imagenes/PORTA TABLITA ASADO X1/porta tabla asado x1.jpg"
                                class=" card-img-top " alt="Imagen de un producto"/>
                                <div class="card-body">
                                    <h3 class="card-title">
                                        PORTA TABLITA ASADO X1 CALADO RECTANG</h3>
                                    <p class=" card-text ">DETALLES DEL PRODUCTO:

                                        Material de alta calidad, muy fácil de limpiar y una
                                        excelente terminación.
                                        Para 1 persona.
                                    </p>
                                    <p class="card-precio">$2500</p>
                                    <button id="botonCarrito" class=" btn btn-primary ">
                                        Agregar al carrito</button>




                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;