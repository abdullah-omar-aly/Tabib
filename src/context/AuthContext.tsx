import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth } from '../../firebase.config'
import { User, onAuthStateChanged } from 'firebase/auth'
const AuthContext = createContext({} as IAuthContext)

interface IAuthContextProvider {
    children: JSX.Element
}
interface IAuthContext {
    currentUser: User | null
    setCurrentUser: React.SetStateAction<(prevState: User | null) => void>
}

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {

    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        const unSubscribeAuthState = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })
        return () => {
            unSubscribeAuthState()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

