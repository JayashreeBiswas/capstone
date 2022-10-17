import {createContext, useState, useEffect} from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductContext = createContext({ //with createContext pass the initial json.....
	products: [],
	setCurrentProduct: () =>{}
});

export const ProductProvider = ({children}) => {
	const [products, setCurrentProduct] = useState(SHOP_DATA);
	const value ={products};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}