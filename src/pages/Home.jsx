import { useNavigate } from "react-router"

export default function Home() {

    const navigate = useNavigate()

    
    
    return (
      <>
        <button onClick={() => navigate("/products")}>Go to products</button>
      </>
    );
}