import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    useEffect(() => {
        fetch("http://localhost:3004/products/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            categorychange(resp.category);
            namechange(resp.name);
            brandchange(resp.brand);
            pricechange(resp.price);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const [name, namechange] = useState("");
    const [category, categorychange] = useState("");
    const [brand, brandchange] = useState("");
    const [price, pricechange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const products = { id, name, category, brand, price };


        fetch("http://localhost:3000/products/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(products)
        }).then((res) => {
            alert('Product Details Updated Successfully.')
            navigate('/vendor');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>
            <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Category:</label>
                <select value={category} onChange={(e) => categorychange(e.target.value)}>
                    <option value="Alcoholic Beverages">Alcoholic Beverages</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Pantry Supplies">Pantry Supplies</option>
                    <option value="Pharmacies">Pharmacies</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Home Care">Home Care</option>
                </select>

                <label>Name:</label>
                <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)}></input>
                {name.length==0 && validation && <span className="text-danger">Enter the Product Name</span>}

                <label>Brand:</label>
                <input value={brand} onChange={e=>brandchange(e.target.value)}></input>

                <label>Price:</label>
                <input value={price} onChange={e=>pricechange(e.target.value)}></input>

                <button type="Submit">Save Changes</button>

            </form>  
            </div>
        </div>
    );
}

export default ProductEdit;