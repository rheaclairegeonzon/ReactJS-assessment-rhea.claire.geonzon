import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Cart from "./cart.png";


const ProductDetails = () => {
    const { id } = useParams();
    const { data: prod, error, isPending } = useFetch('http://localhost:3004/products/' + id);


    return (
        <div className="prod-list">
            {isPending && <div> Loading... </div>}
            {error && <div>{error} </div>}
            {prod && (  
                <div className="prod-details">
                    <img src ={Cart} alt="logo" style={{ width: '400px', }}/>
                    <h1>{prod.name}</h1>
                    <h3>₱ {prod.price}</h3>
                    <p>{prod.category}</p>
                    <p>Produce by {prod.brand}</p>
                </div>
            )}

        </div>
    );
}

export default ProductDetails;