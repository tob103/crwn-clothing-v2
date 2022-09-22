import React, {Fragment, useContext} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './NavigationBar.styles.scss'
import {UserContext} from "../../Contexts/UserContext";
import {signOutUser} from "../../utils/Firebase/Firebase.utils";
const NavigationBar = () => {

    const {currentUser, setCurrentUser }= useContext(UserContext);
    console.log(currentUser);

    // console.log(currentUser);

    const signOutHandler = async () => {

        const response = await signOutUser();

        // console.log(response);

     // setCurrentUser(null);


    }

    return (
        <Fragment>
            <div className='navigation'>
                {/*<h1> I am the navigation bar </h1>*/}
                <Link className='logo-container' to='/'>
                   <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    {/*<Link className='nav-link' to='/sign-in'>*/}
                    {/*    Sign In*/}
                    {/*</Link>*/}
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    { currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}> SIGN OUT </span> )
                     : (<Link className="nav-link" to="/sign-in"> SIGN IN</Link> )
                    }

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;