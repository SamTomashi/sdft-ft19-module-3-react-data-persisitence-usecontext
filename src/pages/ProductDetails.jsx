import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ProductDetails() {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    useEffect(() => {
            
    fetch(`http://localhost:4000/products/${id}`)
      .then((reponse) => reponse.json())
      .then((data) => {
        setProduct(data);
      });
    }, [])
    
    return (
        <>
            {id}
            <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.description}</li>
            </ul>
        </>
    )
}