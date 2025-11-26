import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

function BuscarProducto() {
    const [id, setId] = useState('1');
    const [producto , setProducto] = useState(null);

    useEffect(() =>{
            //fetch(`https://fakestoreapi.com/products/${id}`)
            fetch(`https://691ce990d58e64bf0d34613a.mockapi.io/productos/${id}`)
            //'https://691ce990d58e64bf0d34613a.mockapi.io/productos'
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato));
        },[id]);

    const handleSearch = async () => {
        const response = await fetch(`https://691ce990d58e64bf0d34613a.mockapi.io/productos/${id}`)
        const data = await response.json();
        setProducto(data);
    };

    return (
        <div>
            <h2>Buscar Producto</h2>
            <input type="text" placeholder="Id" onChange={(e) => setId(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            <br/><br/><br/>
            <h2> Detalles del producto Nro {id}</h2>
            {producto && <>
            <img src={producto.image} alt={producto.title} height={80} width={80} />
            <h3> {producto.title}</h3>
            <p> {producto.description} </p>
            </>}
        <br/><br/>
            {/*{product && <div>{product.nombre} {product.precio} - {product.descripcion}</div>} */}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default BuscarProducto;
