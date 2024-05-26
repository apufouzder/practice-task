import axios from "axios";

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

        const postData = await axios.post("http://localhost:3000/products", pData);

        console.log(postData);
    }
    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100">
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