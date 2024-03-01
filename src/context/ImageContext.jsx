import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const ImageContext = createContext()

// eslint-disable-next-line react/prop-types
export const ImageContextProvider = ({ children }) => {
    const [images, setImages] = useState([])
    const { auth } = useContext(AuthContext)
    console.log(auth);

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://raiyan-dobby-be.onrender.com/api/users/single', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${auth?.token}`
                }
            })
            console.log(res.data.data.images);
            setImages(res?.data?.data?.images)
        })()
    }, [auth?.token])
    const value = {
        images, auth
    }

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}