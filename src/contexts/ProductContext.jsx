import { createContext, useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const ProductContext = createContext()


export function ProductProvider({children}) {

    const {data:products, setData: setProducts, loading, error} = useFetchData("http://localhost:4000/products/");

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductContext)
}