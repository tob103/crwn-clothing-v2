import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import './CategoryDirectory.styles.scss'

const CategoryDirectory = (props) => {

    return (
        <div className='categories-container'>
            {/* <img /> */}
            {props.categoryArray.map((category) => {
                return <DirectoryItem key={category.id} category={category}/>
            })}
        </div>
    )
}

export default CategoryDirectory