import Card from "../../components/Dashboard/Card";
import { useEffect, useState } from "react";

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        setProducts(products.filter(p => p.id !== id));
    }

    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            {products.map(product => <Card key={product.id} product={product} onDelete={handleDelete} />)}
        </div>
    );
};

export default ManageAllProduct;