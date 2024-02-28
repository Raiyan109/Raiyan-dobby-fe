import axios from "axios";
import { useEffect, useState } from "react";
import DetailShow from "./DetailShow";
import Navbar from "../components/Navbar";

const Show = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:8000/api/images')
            // console.log(res);
            setImages(res.data.data)
        })()
    }, [])
    return (
        <div className='mt-6'>
            <Navbar />
            <h1 className='text-5xl text-primary font-bold text-center font-Montserrat'> Our Fragments</h1>
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