import React from "react";
import './DirectoryItem.styles.scss'
import {Link} from "react-router-dom";

const DirectoryItem = (props) => {
    const {imageUrl, title} = props.category;
    return (
        <div className='directory-item-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
                <div className='directory-item-body'>
                    <Link className='title' to={`shop/${title}`}> {title} </Link>
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    )
}

export default DirectoryItem;