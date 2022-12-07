import { useParams, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";


const VendorProductList = () => {
    const [products, prodChange] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/product/edit/" + id);
    }

    const Removefunction = (id) =>{
        if (window.confirm('Do you want to remove the product?')) {
            fetch("http://localhost:3004/products/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Product was removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3004/products/").then((res) => {
            return res.json();
        }).then((resp) => {
           prodChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    


    return (
        <div className="prod-list">
            <h2>RHEA'S LIST OF PRODUCTS</h2>
            <div className="prod-list-header">
                <h4>Do you want to update your stocks?</h4>
                <Link to="/AddProduct"> Add Product (+)</Link>
            </div>
            {products &&
             products.map((prod) => (
                <div className="cartListings" key={prod.id}>
                    <p>{prod.name}</p>
                    <p>{prod.brand}</p>
                    <p>{prod.category}</p>
                    <p>₱{prod.price}</p>
                    <Link to={`/product/${prod.id}`}><button className="btn-primary">View Details</button></Link>
                    <button onClick={() => {LoadEdit(prod.id)}}  className="btn-success">EDIT</button>
                    <button  onClick={() => {Removefunction(prod.id)}} className="btn-danger">DELETE</button>
                </div>
            ))}
        </div>
    );
}

export default VendorProductList;