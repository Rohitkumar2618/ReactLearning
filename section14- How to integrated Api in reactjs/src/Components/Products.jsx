import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-2">Products List</h1>

      <button
        onClick={getproducts}
        className="px-2 py-3 mt-50 rounded-md bg-red-400 text-white"
      >
        Get Api Data
      </button>
      <div className="flex w-1/2 flex-col mt-5">
        <ul>
          {products.length > 0 ? (
            products.map((p) => (
              <li key={p.id} className="rounded mb-2 p-3 bg-red-300">
                {p.title}
              </li>
            ))
          ) : (
            <h1>Loading.....</h1>
          )}
        </ul>
      </div>

      <hr />
    </div>
  );
};

export default Products;
