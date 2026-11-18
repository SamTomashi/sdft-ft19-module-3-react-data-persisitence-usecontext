// import { useContext } from "react";
import Card from "./Card";
import { useProducts } from "../contexts/ProductContext";
// import { ProductContext } from "../contexts/ProductContext";

export default function CardList() {
  // const { products } = useContext(ProductContext);
  const {products} = useProducts()
  return (
    <div className="row">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
