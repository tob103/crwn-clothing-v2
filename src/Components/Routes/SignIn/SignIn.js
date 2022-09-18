import React from "react";
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../../utils/Firebase/Firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response);
        // createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1> Sign In Page </h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
        </div>
    )
}

export default SignIn;