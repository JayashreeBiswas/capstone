import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = () => {
	const {cartItem} = useContext(CartContext);
	// console.log(CartItem);
	return(
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItem.map((item) => <CartItem key={item.id} cartItem={item}/>)}
			</div>
			<Button>CheckOut</Button>
		</div>
	);
}

export default CartDropDown;