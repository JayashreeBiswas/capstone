import {useContext} from 'react';
import {ProductContext} from '../../contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';

const Shop = () => {
	const {products} = useContext(ProductContext);

	return(
		<div className="products-container">
			{
				products.map((product) =>(
					<ProductCard key={product.id} products={product} />
					))
			}
		</div>
	);
}

export default Shop;

// import SHOP_DATA from '../../shop-data.json';

// const Shop = () => {
// 	return(
// 		<div>
// 		<h1>hello</h1>
// 			{
// 				SHOP_DATA.map(({id, name}) =>(
// 					<div key={id}>
// 						<h1>{name}</h1>
// 					</div>
// 				))
// 			}
// 		</div>
// 	);
// }

// export default Shop;