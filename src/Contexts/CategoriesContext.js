import {createContext, useState, useEffect } from "react";

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

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    const categoryValue = {categoriesMap}


    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }


        getCategoriesMap();


    }, [])

    return <CategoriesContext.Provider value={categoryValue}> {children} </CategoriesContext.Provider>

}