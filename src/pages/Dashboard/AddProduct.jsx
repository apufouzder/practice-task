import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {

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


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, added it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.post("http://localhost:3000/products", pData);
                    Swal.fire({
                        title: "Added Product",
                        text: "Your product has been Added.",
                        icon: "success"
                    });

                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem add new product!",
                        icon: "error"
                    });
                }
            }
        });
    }
    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                <h2 className="text-2xl text-center ">Add New Product</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ID Code</span>
                        </label>
                        <input type="number" name="id" placeholder="id code" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;