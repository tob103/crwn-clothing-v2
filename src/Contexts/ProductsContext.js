import {createContext, useState, useEffect } from "react";

// import PRODUCTS from '../ShopData/shop-data.json'

import {addCollectionAndDocuments,getCategoriesAndDocuments} from "../utils/Firebase/Firebase.utils";

import SHOP_DATA_PRODUCTS from "../ShopData/ShopProducts";

//as the actual value that you want to access

//In this iteration, we've moved to a dynamic Category map from a db so we need to remove this code

// export const ProductsContext = createContext({
//
//     products: [],
//
//
// });

//This is the code for accessing the Products from Firestore db:

export const CategoriesContext= createContext({
    categoriesMap: [],

})

//this is the actual component

// export const ProductsProvider = ({children}) => {
//
//     const [productList, setProductList] = useState(SHOP_DATA_PRODUCTS);
//
//     const productListValue= {SHOP_DATA_PRODUCTS}
//
//     // This is a sample method for how you can load data from SHOP_DATA_PRODUCTS into a Firestore Database.
//
//     // useEffect(()=> {
//     //     addCollectionAndDocuments('categories',SHOP_DATA_PRODUCTS)
//     // }, [])
//     //
//
//     useEffect( () => {
//
//         const getCategoriesMap = async () => {
//         const categoryMap = await getCategoriesAndDocuments();
//         console.log(categoryMap);
//         }
//
//
//         getCategoriesMap();
//
//
//     },[])
//
//     // const [products, setProducts] = useState(PRODUCTS);
//     //
//     // const productValue = {products};
//
//     return <ProductsContext.Provider value={productListValue}> {children} </ProductsContext.Provider>
// }

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    const categoryValue = {categoriesMap}


    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }


        getCategoriesMap();


    }, [])

    return <CategoriesProvider.Provider value={categoryValue}> {children} </CategoriesProvider.Provider>

}