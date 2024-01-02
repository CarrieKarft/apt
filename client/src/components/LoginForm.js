import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setCurrentUser} = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if(r.ok) {
                r.json().then(loginData => setCurrentUser(loginData))
            } else {
                r.json().then((e) => alert(e.error))
            }
        })
        navigate('/user-profile')
    }

   
    return (
        <div>
            <h2 style={{color: "black"}}>Login</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label> Username: 
                    <input type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    ></input>
                </label>
                <label> Password: 
                    <input type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    ></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LoginForm;