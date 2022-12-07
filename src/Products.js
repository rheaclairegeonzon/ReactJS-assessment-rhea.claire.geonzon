import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Products = () => {
 
    const { data: products, isPending, error } = useFetch('http://localhost:3004/products');

    return (  

        <div className="home">
          {error && <div> {error} </div>}
          {isPending && <div> Loading... </div> }
          {products && <ProductList products={products} title="All products!"  />} 
        </div>
    );
}
 
export default Products;