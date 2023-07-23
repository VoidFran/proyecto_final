import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <p><Link to="">Inicio</Link></p>
            <p><Link to="venta"> Venta </Link></p>
            <p><Link to="sobre_nosotros"> Sobre Nosotros </Link></p>
            <p><Link to="contacto"> Contacto </Link></p>
        </div>
    )
}
