import {useState} from 'react'

function SignupForm({ handleSignupUser }) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    
    function handleOnSubmit(e) {
        e.preventDefault()
        const newUserObj = {
            name,
            password,
            password_confirmation,
            username,
            phone,
            location
        }
        handleSignupUser(newUserObj)
    }

    return (
        <div>
            <h2 style={{color: "black"}}>Signup</h2>
            <form onSubmit={e => handleOnSubmit(e)}>
                <label> Full Name: 
                    <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    ></input>
                </label>
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
                <label> Password Confirmation: 
                    <input type="text"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    ></input>
                </label>
                <label> Phone Number: 
                    <input type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    ></input>
                </label>
                <label> Location: 
                    <input type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    ></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignupForm;