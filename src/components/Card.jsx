import { useContext, useState } from "react";
import Badge from "./Badge";
import { ProductContext } from "../contexts/ProductContext";

export default function Card({ product }) {

  const {products, setProducts} = useContext(ProductContext);
  
  function deleteProduct(id) {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
      headers: {
        "accept": "application/json"
      }
    }).then((response) => response.json())
      .then(data => {

        const filteredProducts = products.filter((product) => product.id !== data.id)
        setProducts([...filteredProducts]);

    })
    }

  const [price, setPrice] = useState(product.price)

  function updateProduct(id, data) {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PATCH",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
   

        const updatedProducts = products.map((product) => {
          if (product.id === data.id) {
            product.price = data.price
          }
          return product
        })

        setProducts([...updatedProducts])
      });
  }
    

    return (
      <div key={product.id} className="card col-3 m-1 p-0">
        <img src={product.imageUrl} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {product.name}
            <Badge price={product.price} />
          </h5>

          <p className="card-text">{product.description}</p>
          {/* <a href="#" className="btn btn-primary">
            view
          </a> */}

          <div>
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <button
            onClick={() => {
              deleteProduct(product.id);
            }}
            className="btn btn-sm btn-danger m-1"
          >
            DELETE
          </button>
          <button
            onClick={() => {
              updateProduct(product.id, {price: price});
            }}
            className="btn btn-sm btn-success m-1"
          >
            UPDATE
          </button>
        </div>
      </div>
    );
}


/***
 *  DELETE /products/:id        http://domain.com/products/3

 */