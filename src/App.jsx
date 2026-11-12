import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { ProductContext } from "./contexts/ProductContext";
import NavBar from "./components/NavBar";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  return (
    <ProductContext.Provider value={{products, setProducts}}>
        <NavBar />
        <div className="container mt-4">
          <CardList />
        </div>
    </ProductContext.Provider>
  );
}

export default App;

/**
  * DELETE /products/:id        http://domain.com/products/3
  * PUT    /products/:id        http://domain.com/products/3
  * PATCH  /products/:id        http://domain.com/products/3
  * 
  * 
  * PUT vs PATCH:
  * 
  * PUT: It requires that you provide values for the columns in a table
  * user : {
  *  name: "Moringa",
  *  gender: "F"
  *  YOB: 2000
  * }
  * 
  * PATCH: it only updates specific attruibutes/columns in the table
  *  {
  *   name: "Moringa school"
  *   gender: "M"
  * }
  * 
  * products = [
  * 
  * {
  *   id: 1,
  *   name: "milk",
  *   discount: 10
  * }
  * ,
  *   {
  *   id: 2,
  *   name: "bread",
  *   discount: 10
  * },
  *  {
  *   id: 3,
  *   name: "sugar",
  *   discount: 10
  * }
  * 
  * ]
  * 
  SELECT * FROM products WHERE discount = 10;
  UPDATE products SET discount = '20' where id = 1 and id = 2, and id = 3
 * 
 */
