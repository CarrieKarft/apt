import {useState} from 'react'

function SignupForm({ handleSignupUser }) {
    // fetch will be to user#create
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
            <h2 style={{color: "red"}}>SignupForm</h2>
            <form onSubmit={e => handleOnSubmit(e)}>
                <lable> Full Name: 
                    <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    ></input>
                </lable>
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
                <lable> Password Confirmation: 
                    <input type="text"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    ></input>
                </lable>
                <lable> Phone Number: 
                    <input type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    ></input>
                </lable>
                <lable> Location: 
                    <input type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignupForm;