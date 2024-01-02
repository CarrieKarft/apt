import {useState, useEffect, createContext} from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then((r) => {
            if(r.ok) {
                r.json().then((userData) => setCurrentUser(userData))
            } else {
                r.json().then((e) => console.log(e.error))
            }
        })
    }, [])


    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };