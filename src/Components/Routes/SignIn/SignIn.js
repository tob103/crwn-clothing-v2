import React from "react";

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../../utils/Firebase/Firebase.utils";
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../SignUpForm/SignUpForm";
const SignIn = () => {

    // useEffect( async () =>{
    //    const response = await getRedirectResult(auth);
    //    // console.log(response);
    //
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response);
        // createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return (
        <div>
            <h1> Sign In Page </h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>

            <SignUpForm />
        {/*<button onClick={logGoogleRedirectUser}>*/}
        {/*    Sign in with Google Redirect*/}
        {/*</button>*/}
        </div>
    )
}

export default SignIn;