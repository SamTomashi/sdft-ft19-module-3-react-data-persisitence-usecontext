// import { useEffect, useState } from "react";
import { ProductProvider } from "./contexts/ProductContext";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/routes";
// import useFetchData from "./hooks/useFetchData";
// import useFetchData from "./hooks/useFetchData";


function App() {
  

  return (
      <ProductProvider>
      <NavBar />
      <AppRoutes />
    </ProductProvider>
  );
}

export default App;

/**
 * Dynamic route
 * Programmatic Navigation
 * Nested Routes
 * 
 */
