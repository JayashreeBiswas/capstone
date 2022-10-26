import {createContext, useState, useEffect} from 'react';

// helper function.............(to add cartItem)
const addCartItem = (cartItem, productToAdd) => {
	//find if cartItem contain productToAdd
	const existingCartItem = cartItem.find((cartItem) => cartItem.id == productToAdd.id); //if true return cartItem

	//if found increment quantity
	if(existingCartItem){
		return cartItem.map((cartItem) => {
			return cartItem.id == productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem;
		});
	}

	//return new array with modified cartItem/ new cart item
	return [...cartItem, {...productToAdd, quantity:1}];
}

export const CartContext = createContext({
	isCartOpen: 'false',
	setIsCartOpen: () => {},
	cartItem: [], //cartItem will contain the same content as product {id,name,price,imageUrl}, but it'll add 1 more info quantity so it'll be {id,name,price,imageUrl, qauntity}
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0
});

// helper function.............(to remove cartItem)
const removeCartItem = (cartItem, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItem.find((cartItem) => cartItem.id == cartItemToRemove.id);

	//if quantity is equal to 1, if yes then remove that item
	if(existingCartItem.quantity == 1){
		return cartItem.filter((cartItem) => {
			return cartItem.id != cartItemToRemove.id 
		});
	}

	//return back cartitems with matching cart item with reduced quantity
	return cartItem.map((cartItem) => {
		return cartItem.id == cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem;
	});
}

const clearCartItem = (cartItem, cartItemToRemove) => {
	return cartItem.filter((cartItem) => (cartItem.id != cartItemToRemove.id));
}

export const CartProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItem.reduce((total, cartItem) => total + cartItem.quantity, 0)
		setCartCount(newCartCount);
	}, [cartItem]);

	//for total price ----------------
	useEffect(() => {
		const newCartTotal = cartItem.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
		setCartTotal(newCartTotal);
	}, [cartItem]);

	const addItemToCart = (productToAdd) =>{
		setCartItem(addCartItem(cartItem, productToAdd));
	}

	const removeItemFromCart = (cartItemToRemove) =>{
		setCartItem(removeCartItem(cartItem, cartItemToRemove));
	}

	const clearItemFromCart = (cartItemToRemove) => {
		setCartItem(clearCartItem(cartItem, cartItemToRemove));
	}

	const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItem, cartCount, cartTotal};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}