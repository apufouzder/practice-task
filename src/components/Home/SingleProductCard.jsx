/* eslint-disable react/prop-types */

const SingleProductCard = ({ product }) => {
    const {title, price, image, category} = product;
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[300px] w-full object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-secondary">{ category}</div>
                    <div className="card-actions justify-between">
                        <h4 className="text-xl font-semibold">${ price}</h4>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductCard;