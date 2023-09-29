

function LoginForm() {
    return (
        <div>
            {/* hide this form and have it show when user clicks login button located in signup page */}
            {/* fetch will be to sessions#crate */}
            <h2 style={{color: "red"}}>LoginForm</h2>
            <form>
                <lable> Username: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Password: 
                    <input type="text"
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LoginForm;