import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category-component';
import './shop.style.scss';

const Shop = () => {

	return(
		<Routes>
			<Route index element={<CategoriesPreview />}/>
			<Route path=':category' element={<Category />}/>  {/* In path used variable which can be access from a component */}
		</Routes>
	);
}

export default Shop;

// const Shop = () => {
// 	const {categoriesMap} = useContext(CategoriesContext);
// 	// const {products} = useContext(CategoriesContext);

// 	return(
// 		<div className="shop-container">
// 			{
// 				Object.keys(categoriesMap).map((title) => {
// 					const products = categoriesMap[title];
// 					return(<CategoryPreview key={title} title={title} products={products} />);
// 				})

// 				// Object.keys(categoriesMap).map((title) => (
// 				// 	<Fragment key={title}>
// 				// 		<h2>{title}</h2>
// 				// 		<div className="products-container">
// 				// 			{
// 				// 				categoriesMap[title].map((product) =>(
// 				// 					<ProductCard key={product.id} products={product} />
// 				// 					))
// 				// 			}
// 				// 		</div>
// 				// 	</Fragment>
// 				// ))
// 			}
// 		</div>
// 	);
// }

// export default Shop;

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