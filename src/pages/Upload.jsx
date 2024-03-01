import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Upload = () => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const { auth } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0]);

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('photo', file);
        formData.append('user', auth?.user?._id)

        try {
            setLoading(true);
            const res = await axios.post('http://localhost:8000/api/images/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${auth?.token}`
                }
            })

            console.log(res);
            setLoading(false);
            // Reset form fields
            setName('');
            setFile(null);
            navigate('/show')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center py-20">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file"
                            onChange={handleChange}
                            className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Upload;