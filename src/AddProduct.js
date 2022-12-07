import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const products = { category, name, brand, price};

        setIsPending(true);

        fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(products)
        }).then(() => {
            alert('A new product was added into your List');
            setIsPending(false);
            navigate('/vendor');
        })


    }

    return (
        <div className="create">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Alcoholic Beverages">Alcoholic Beverages</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Pantry Supplies">Pantry Supplies</option>
                    <option value="Pharmacies">Pharmacies</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Home Care">Home Care</option>
                </select>

                <label>Name:</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} />

                <label>Brand:</label>
                <input required value={brand} onChange={(e) => setBrand(e.target.value)} />

                <label>Price:</label>
                <input required value={price} placeholder="₱ " onChange={(e) => setPrice(e.target.value)} />

                {!isPending && <button>Add Product</button>}
                {isPending && <button disabled>Adding Product...</button>}
            </form>
        </div>
    );
}

export default AddProduct;