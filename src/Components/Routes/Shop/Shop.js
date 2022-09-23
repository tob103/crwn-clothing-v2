import SHOP_DATA from '../../../ShopData/shop-data.json'
import React, {Fragment, useContext} from "react";
import {Routes, Route} from "react-router";

//import {ProductsContext} from "../../../Contexts/ProductsContext";

import CategoryPreview from "../../CategoryPreview/CategoryPreview";

import {CategoriesContext} from "../../../Contexts/CategoriesContext";

import ProductCard from "../../ProductCard/ProductCard";

import './Shop.scss'
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

const Shop = () => {

    const {categoriesMap} = useContext(CategoriesContext)

    return (

        //This is a pattern for using nested Routes!
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>

        // <div className='shop-container'>
        //     {Object.keys(categoriesMap).map((title) => {
        //         const products = categoriesMap[title];
        //         return <CategoryPreview key={title} title={title} products={products}/>
        //     })
        //     }
        // </div>
    );


    //This code has been refactored//
    // <Fragment>
    // {Object.keys(categoriesMap).map((title) => (
    //         <Fragment key={title} >
    //             <h2> {title} </h2>
    //             <div className='products-container'>
    //                 {
    //                     categoriesMap[title].map((product) => (
    //
    //                         <ProductCard key={product.id} product={product}/>
    //                     ))
    //                 }
    //             </div>
    //         </Fragment>
    //     ))}
    // </Fragment>
//);


    {/*<div className='products-container'>*/
    }
    {/*{[].map((product) => (*/
    }

    {/*    <ProductCard key={product.id} product={product}> </ProductCard>*/
    }

    {/*    // <div key={id}>*/
    }

    {/*    //*/
    }
    {/*    //     <h1> {name}</h1>*/
    }
    {/*    //*/
    }
    {/*    // </div>*/
    }
    {/*))*/
    }
    {/*}*/
    }

}

export default Shop;