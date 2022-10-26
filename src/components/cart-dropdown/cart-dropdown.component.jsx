import {useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'; // for navigating/going to checkout page....
import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = () => {
	const {cartItem} = useContext(CartContext);
	const navigate = useNavigate();
	// console.log(CartItem);
	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}
	return(
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItem.map((item) => <CartItem key={item.id} cartItem={item}/>)}
			</div>
			<Button onClick={goToCheckoutHandler}>CheckOut</Button>
		</div>
	);
}

export default CartDropDown;