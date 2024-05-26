/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ product, onDelete }) => {
    const { id, title, price, image, category } = product;

    const handleDelete = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`http://localhost:3000/products/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(() => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            onDelete(id);
                        })

                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting your file.",
                        icon: "error"
                    });
                }
            }
        });
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