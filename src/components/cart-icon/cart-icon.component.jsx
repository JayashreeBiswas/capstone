import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';

const Cart = () =>{
	const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen); // it'll set the opposite state of cartOpen..... 
	}

	return(
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<ShoppingBag className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
}

export default Cart;