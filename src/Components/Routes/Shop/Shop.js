import SHOP_DATA from '../../../ShopData/shop-data.json'
import React, {useContext} from "react";

import {ProductsContext} from "../../../Contexts/ProductsContext";

import ProductCard from "../../ProductCard/ProductCard";

import './Shop.scss'

const Shop = () => {

    const {products} = useContext(ProductsContext)

    return (
        <div className='products-container'>
            {products.map((product) => (

                <ProductCard key={product.id} product={product}> </ProductCard>

                // <div key={id}>

                //
                //     <h1> {name}</h1>
                //
                // </div>
            ))
            }

        </div>
    )
}

export default Shop;