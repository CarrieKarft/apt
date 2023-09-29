

function SignupForm() {
    // fetch will be to user#create
    return (
        <div>
            <h2 style={{color: "red"}}>SignupForm</h2>
            <form>
                <lable> Full Name: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Username: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Password: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Password Confirmation: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Phone Number: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Location: 
                    <input type="text"
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignupForm;