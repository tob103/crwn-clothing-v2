import './Category.scss'
import {useParams} from "react-router";
import {useContext, useState, useEffect, Fragment} from "react";
import {CategoriesContext} from "../../../Contexts/CategoriesContext";
import ProductCard from "../../ProductCard/ProductCard";

const Category = () => {

    const {category } = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return (
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
        </Fragment>

    );
}

export default Category;