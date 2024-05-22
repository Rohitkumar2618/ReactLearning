import { useState, useEffect } from "react";
import axios from "../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getproducts = () => {
    // ! hamne instance of axios liya hai utils ke axios se jaha  base url already set hai
    // or get me hum bs particular routs pe se data fetch kr lenge

    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //! Iske help se without clicking the button we can show the api gets products on page
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="w-1/2 m-auto mt-10 flex-shrink">
      <h1 className="text-5xl mb-2">Products List</h1>

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
