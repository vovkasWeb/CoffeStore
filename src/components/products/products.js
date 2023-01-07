/** @format */

import Product from "../product/product";
import "./products.css";
const Produts = ({data}) => {
const elements = data.map((item) => {
	const { id, ...itemProps} =item;
	return (
		<Product 
		key={id}
		{...itemProps}
		/>
	);
});
return <div className="product__row">{elements}</div>
};
export default Produts;
