import { useAppContext } from '../../context/context';
import './CartWidget.css';

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <p onClick={() => console.log("ESTE ES TU CARRITO", carrito)}>🛒 ({carrito.reduce((acc,value) => acc += value.cantidad, 0)})</p>
    );
};

export default CartWidget;
