import CategoryItem from '../category-item/category-item.component';

const Categories = ({categories}) => {
	return(
		<div className="categories-container">
	      	{categories.map((category) => {
	              // const {id, title, imageUrl} = category;
	              return (
	                <CategoryItem key={category.id} category={category} />
	              );
	      
	            })}
	      

	    </div>
	);
}
export default Categories