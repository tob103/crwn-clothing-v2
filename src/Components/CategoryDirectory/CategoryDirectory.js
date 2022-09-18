import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryDirectory.styles.scss'

const CategoryDirectory = (props) => {

    return (
        <div className='categories-container'>
            {/* <img /> */}
            {props.categoryArray.map((category) => {
                return <CategoryItem key={category.id} category={category}/>
            })}
        </div>
    )
}

export default CategoryDirectory