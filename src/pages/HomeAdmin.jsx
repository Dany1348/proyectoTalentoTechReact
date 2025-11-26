import { Link } from 'react-router-dom';

function HomeAdmin() {
    return (
        <div>
            <h1>CRUD Administrador</h1>
            <ul>
                
                <li ><Link style={{color:"yellowgreen"}} to="/gestionproductos">Gestionar Productos</Link></li>
                <li><Link style={{color:"yellowgreen"}} to="/productos">Ver Todos los Productos</Link></li>
                <li><Link style={{color:"yellowgreen"}} to="/productos/find">Buscar Producto</Link></li>
                
            </ul>
        </div>
    );
}

export default HomeAdmin;
