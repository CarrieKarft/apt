import { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";

function LoginForm() {
    // come back to raise fetch up one level to parent component after logout functionality and signup functionality finished
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setCurrentUser} = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/sessions',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ username, password }),
        }).then(r => r.json())
        .then(loginData => setCurrentUser(loginData))
    }
   
    return (
        <div>
            {/* hide this form and have it show when user clicks login button located in signup page */}
            {/* fetch will be to sessions#crate */}
            {/* needs redirect on submit */}
            <h2 style={{color: "red"}}>LoginForm</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <lable> Username: 
                    <input type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    ></input>
                </lable>
                <lable> Password: 
                    <input type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LoginForm;