import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DetailShow from "./DetailShow";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { ImageContext } from "../context/ImageContext";

const Show = () => {

    const { auth } = useContext(AuthContext)
    const { images } = useContext(ImageContext)
    console.log(auth, images);


    return (
        <div className='mt-6'>
            <Navbar />
            <h1 className='text-xl text-secondary font-bold text-center font-Montserrat'>Hi <span className="text-accent">{auth?.user?.name}</span></h1>
            <h1 className='text-5xl text-primary font-bold text-center font-Montserrat'> Your Images</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-10 space-y-8'>
                {
                    images && images?.map(image => <DetailShow
                        key={image._id}
                        image={image}
                    />)
                }
            </div>

            {

            }
        </div>
    );
};

export default Show;