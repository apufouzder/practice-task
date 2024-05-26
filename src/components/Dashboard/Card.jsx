/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ product, onDelete }) => {
    const { id, title, price, image, category } = product;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                onDelete(id);
        })
    }
    
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-full object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between py-2">
                        <div className="badge badge-secondary">{category}</div>
                        <h4 className="text-lg font-semibold">${price}</h4>
                    </div>
                    <div className="card-actions justify-around">
                        <Link to={`/dashboard/manage/${id}`}><button className="btn btn-success">View</button></Link>
                        <Link to={`/dashboard/edit/${id}`}><button className="btn btn-info">Edit</button></Link>
                        <button onClick={handleDelete} className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;