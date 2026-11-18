import { useNavigate } from "react-router"

export default function Home() {

    const navigate = useNavigate()

    
    
    return (
      <>
        <div className="position-absolute top-50 start-50 text-center">
          <h1>Home</h1>
          <button
            className="btn btn-warning"
            onClick={() => navigate("/products")}
          >
            Go to products
          </button>
        </div>
      </>
    );
}