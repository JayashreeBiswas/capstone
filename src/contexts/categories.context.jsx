import {createContext, useState, useEffect} from 'react';
import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({ //with createContext pass the initial json.....
	categoriesMap: {},
	setCategoriesMap: () =>{}
});

export const CategoriesProvider = ({children}) => {
	// const [products, setCurrentProduct] = useState(SHOP_DATA); //when we were using static data(with single category)
	const [categoriesMap, setCategoriesMap] = useState({});
	// for storing the data in our database(firestrom) but it's one time job!!
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, [])

	useEffect(() => {
		const getCategoriesMap = async () =>{
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
			setCategoriesMap(categoryMap);
		}
		getCategoriesMap();
	}, [])
	const value ={categoriesMap};
	console.log(value);
	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}