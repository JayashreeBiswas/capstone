import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './product-card.style.scss';
import Button from '../button/button.component';

const ProductCard = ({products}) => {
	const {name, price, imageUrl} = products;
	const {addItemToCart} = useContext(CartContext);
	// console.log(name);
	const addProductToCart = () => addItemToCart(products);
	return(
		<div className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>ADD TO CART</Button>
			{/*<h1 key={id}>{name}</h1>*/}
		</div>
	);
}

export default ProductCard;