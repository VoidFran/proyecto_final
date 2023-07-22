import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <p><Link to="inicio">Inicio</Link></p>
            <p><Link to="venta"> Venta </Link></p>
            <p><Link to="contacto"> Contacto </Link></p>
            <p><Link to="sobre_nosotros"> Sobre Nosotros </Link></p>
        </div>
    )
}

export default Menu;
