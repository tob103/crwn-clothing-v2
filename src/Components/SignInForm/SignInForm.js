import React, {useState} from "react";

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    signInUserWithEmailAndPassword
} from "../../utils/Firebase/Firebase.utils";
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../SignUpForm/SignUpForm";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import './SignInForm.scss'

const SignInForm = () => {

    // useEffect( async () =>{
    //    const response = await getRedirectResult(auth);
    //    // console.log(response);
    //
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response);
        // createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    const signInFieldsList = {

        email: '',
        password: '',

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted the form!");
        console.log(email, password);

        try {
            const signedInUser = await signInUserWithEmailAndPassword(email, password)
            console.log(signedInUser);

        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password" : {
                    alert("You've entered the wrong password!");
                }
                    break;

                case 'auth/user/not-found': {
                    alert("There is no user associated with this email!");

                }
                    break;

                default:
                    console.log(error);

            }
        }
    }



            const handleChange = (event) => {
                const {name, value} = event.target;
                setSignInFields({...signInFields, [name]: value})
                console.log(signInFields)

            }

            const [signInFields, setSignInFields] = useState(signInFieldsList);
            const {email, password} = signInFields

            return (
                <div className='sign-up-container'>
                    <h2> I already have an account </h2>
                    <span> Sign in with your email and password </span>

                    <form onSubmit={handleSubmit}>
                        <FormInput label="email" type="email" required name="email" value={email}
                                   onChange={handleChange}/>
                        <FormInput label="password" type="password" required name="password" value={password}
                                   onChange={handleChange}/>

                        <div className="buttons-container">
                            <Button buttonType="" type="submit"> Sign In </Button>
                            <Button buttonType="google" onClick={signInWithGoogle} type="button"> Google Sign
                                In </Button>
                        </div>

                    </form>
                    {/*<button onClick={logGoogleRedirectUser}>*/}
                    {/*    Sign in with Google Redirect*/}
                    {/*</button>*/}
                </div>
            )
        }

        export default SignInForm;