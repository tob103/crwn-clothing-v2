import React, {Fragment} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './NavigationBar.styles.scss'

const NavigationBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                {/*<h1> I am the navigation bar </h1>*/}
                <Link className='logo-container' to='/'>
                   <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/sign-in'>
                        Sign In
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;