import React from "react";
import './DirectoryItem.styles.scss'
import {Link, useNavigate} from "react-router-dom";


const DirectoryItem = (props) => {
    const {imageUrl, title, route} = props.category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <div onClick={onNavigateHandler} className='directory-item-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
                <div className='directory-item-body'>
                    <h2> {title} </h2>
                    <p> Shop Now </p>
                </div>
            </div>
        </div>
    )
}

export default DirectoryItem;