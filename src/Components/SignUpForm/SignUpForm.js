import React from "react";
import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/Firebase/Firebase.utils";
import FormInput from "../FormInput/FormInput";
import './SignUpForm.scss'

const SignUpForm = () => {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const resetFormFields = () => {

        setFormFields(defaultFormFields);
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
        console.log(formFields)

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(password, confirmPassword);

        //confirm that the password matches

        if (password !== confirmPassword) {
            alert("Please make sure your passwords match!");
            console.log("The passwords don't match!");
            return


        } else {
            alert("The passwords match! ");

            try {
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                // eUser.user.displayName = displayName;
                console.log(user);
                await createUserDocumentFromAuth(user, {displayName});
                resetFormFields();

            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use!')
                } else {
                    console.log('user create encountered an error', error);
                }
            }
        }


        //wants to create a userDocRef from the user.


    }

    return (

        <div className="sign-up-container">
            <h2> Don't have an Account? </h2>
            <span> Sign Up with your email and password </span>
            <form onSubmit={handleSubmit}>
                {/*<label> Display Name </label>*/}
                {/*<input required onChange={handleChange} name="displayName" value={displayName}/>*/}

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password"
                           value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword"
                           value={confirmPassword}/>

                {/*<label> Email </label>*/}
                {/*<input type="email" required onChange={handleChange} name="email" value={email}/>*/}

                {/*<label> Password </label>*/}
                {/*<input type="password" required onChange={handleChange} name="password" value={password}/>*/}

                {/*<label> Confirm Password </label>*/}
                {/*<input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>*/}

                <button type="submit"> Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;