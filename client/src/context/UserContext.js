import {useState, useEffect, createContext} from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [errors, setErrors] = useState()
    // const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('/users/1')
        .then((r) => {
            if(r.ok) {
                r.json().then((userData) => setCurrentUser(userData))
            } else {
                r.json().then((errorData) => console.log(errorData.errors))
            }
        })
    }, [])

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };