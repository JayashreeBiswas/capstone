import {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () =>{
	const {cartItem, cartTotal} = useContext(CartContext);
	return(
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItem.map((cartItem) => {
					// const {id, name, quantity} = cartItem;
					return(
						<CheckoutItem cartItemToCheckout={cartItem} key={cartItem.id}/>
						// <div key={id}>
						// 	<h2>{name}</h2>
						// 	<span>{quantity}</span>
						// 	<br/>
						// 	<span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
						// 	<br/>
						// 	<span onClick={() => addItemToCart(cartItem)}>increment</span>
						// </div>
					);
				})
			}
			<span className="total">Total: ${cartTotal}</span>
		</div>
	);
}

export default CheckOut;