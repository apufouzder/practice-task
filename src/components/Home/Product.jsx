/* eslint-disable react/prop-types */
import SingleProductCard from "./SingleProductCard";

const Product = ({ data }) => {
    return (
        <div className="w-[1200px] mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-10 text-fuchsia-600">Products</h2>
            <div className="grid grid-cols-3 gap-6">
                {data.map(product => <SingleProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default Product;