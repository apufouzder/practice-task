import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 my-6 mx-8">
            <figure><img className="h-[400px]" src={product?.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl mb-3">{product?.title}</h2>
                <div className="badge badge-secondary">{product?.category}</div>
                <h4 className="text-2xl font-semibold">${product?.price}</h4>
                <p className="text-lg">{product?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;