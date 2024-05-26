import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const data = useLoaderData();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const id = form.id.value;
        const title = form.title.value;
        const price = +form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const image = form.image.value;
        const pData = { id, title, price, category, description, image };

        const postData = await axios.patch(`http://localhost:3000/products/${data?.id}`, pData);

        if (postData.status === 200) {
            navigate("/dashboard/manage");
        }

        console.log(postData);
    }

    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                <h2 className="text-2xl text-center ">Update Product</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ID Code</span>
                        </label>
                        <input type="number" name="id" defaultValue={data?.id} placeholder="id code" className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={data?.title} placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={data?.price} placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={data?.category} placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name="description" defaultValue={data?.description} placeholder="Description" className="textarea textarea-bordered" required></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={data?.image} placeholder="image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProduct;