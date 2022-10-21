import {createContext, useState, useEffect} from 'react';

// helper function.............
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
	cartCount: 0
});

export const CartProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItem.reduce((total, cartItem) => total + cartItem.quantity, 0)
		setCartCount(newCartCount);
	}, [cartItem]);

	const addItemToCart = (productToAdd) =>{
		setCartItem(addCartItem(cartItem, productToAdd));
	}

	const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItem, cartCount};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}