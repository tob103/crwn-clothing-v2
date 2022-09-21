import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import './SignInPage.scss'

const SignInPage = () => {
    return (
        <div>
            <div className="authentication-container">
            <SignInForm></SignInForm>

            <SignUpForm> </SignUpForm>
            </div>
        </div>
    )
}

export default SignInPage;