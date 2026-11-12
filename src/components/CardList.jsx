import { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../contexts/ProductContext";

export default function CardList() {
  const {products} = useContext(ProductContext);
  return (
    <div className="row">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
