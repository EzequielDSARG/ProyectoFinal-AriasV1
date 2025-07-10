import { Link } from 'react-router';
import { useAppContext } from '../../context/context';
import './Item.css';

function Item({ id, price, title, img }) {

    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={img} className="card-image" width="150" height="150" alt="product img" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div>
                    <p className="card-price">$ {price}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver detalle</button>
                </Link>
                <button className="card-button"
                    onClick={() => agregarAlCarrito({ id, price, title, cantidad: 1 })}
                >Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Item;