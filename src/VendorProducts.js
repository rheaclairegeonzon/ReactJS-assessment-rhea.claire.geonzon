import useFetch from "./useFetch";
import VendorProductList from "./VendorProductList";

const VendorProducts = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:3004/products');

    return (  

        <div className="home">
          {error && <div> {error} </div>}
          {isPending && <div> Loading... </div> }
          {products && <VendorProductList products={products} title="All products!"  />} 
        </div>
    );

}
 
export default VendorProducts;