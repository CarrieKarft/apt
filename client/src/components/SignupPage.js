import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function SignupPage({ handleSignupUser }) {

    return (
        <div>
            <h1>SignupPage</h1>
            {/* need to fix this so that components are being rendered by app probably */}
            <SignupForm handleSignupUser={handleSignupUser}/>
            <LoginForm />
        </div>
    )
}

export default SignupPage;