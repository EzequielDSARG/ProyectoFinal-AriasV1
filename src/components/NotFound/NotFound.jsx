import { Link } from 'react-router';
import './NotFound.css';
function ItemDetail() {

    return (
        <div className='notfound-container'>
            <p>Te confundiste de ruta. Volvé a tu casa</p>
            <Link to="/"><button>Volvé al inicio</button></Link>
        </div>
    );
};

export default ItemDetail;