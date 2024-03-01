import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const ImageContext = createContext()

// eslint-disable-next-line react/prop-types
export const ImageContextProvider = ({ children }) => {
    const [images, setImages] = useState([])
    const [searchText, setSearchText] = useState('')
    const { auth } = useContext(AuthContext)



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

    const handleChange = (e) => {
        setSearchText(e.target.value)
        console.log(searchText);
    }

    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(searchText)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(images)
    const value = {
        images, auth, searchText, handleChange, filtered
    }

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}