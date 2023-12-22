import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function SignupPage({ handleSignupUser }) {

    return (
        <div className="signup">
            <h1 style={{color: 'black'}}>Apt</h1>
            <SignupForm handleSignupUser={handleSignupUser} />
            <LoginForm />
        </div>
    )
}

export default SignupPage;