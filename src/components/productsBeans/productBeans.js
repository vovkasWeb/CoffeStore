
import Product from "../product/product";
import "./productBeans.css";

const ProductBeans = ({data}) => {
	const elements = data.map((item) => {
		const { id, ...itemProps} =item;
		return (
			<Product 
			key={id}
			{...itemProps}
			/>
		);
	});
	return <div className="productBeans__row">{elements}</div>;
};

export default ProductBeans;
