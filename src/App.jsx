import { useEffect, useState } from "react";
import { ProductContext } from "./contexts/ProductContext";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/routes";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <NavBar />
      <AppRoutes />
    </ProductContext.Provider>
  );
}

export default App;

/**
 * Dynamic route
 * Programmatic Navigation
 * Nested Routes
 * 
 */
