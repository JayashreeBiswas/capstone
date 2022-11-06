import {useContext, Fragment} from 'react';
import {CategoriesContext} from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';


const CategoriesPreview = () => {
	const {categoriesMap} = useContext(CategoriesContext);
	// const {products} = useContext(CategoriesContext);

	return(
		<>
			{
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return(<CategoryPreview key={title} title={title} products={products} />);
				})

				// Object.keys(categoriesMap).map((title) => (
				// 	<Fragment key={title}>
				// 		<h2>{title}</h2>
				// 		<div className="products-container">
				// 			{
				// 				categoriesMap[title].map((product) =>(
				// 					<ProductCard key={product.id} products={product} />
				// 					))
				// 			}
				// 		</div>
				// 	</Fragment>
				// ))
			}
		</>
	);
}

export default CategoriesPreview;

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