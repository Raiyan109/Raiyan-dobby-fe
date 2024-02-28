import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parsedData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parsedData.user,
                token: parsedData.access_token
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const value = {
        user, loading, auth, setAuth
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}