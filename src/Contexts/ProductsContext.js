import {createContext, useState, useEffect } from "react";
import PRODUCTS from '../ShopData/shop-data.json'

//as the actual value that you want to access

export const ProductsContext = createContext({

    products: [],


});

//this is the actual component

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCTS);

    const productValue = {products};

    return <ProductsContext.Provider value={productValue}> {children} </ProductsContext.Provider>
}