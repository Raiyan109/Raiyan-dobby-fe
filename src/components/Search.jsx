import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";

const Search = () => {
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value)
        console.log(searchText);
    }
    const { images } = useContext(ImageContext)
    console.log(images);

    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(searchText)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(images)
    return (
        <div className="modal-box">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text"
                    value={searchText}
                    onChange={handleChange}
                    className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className="">
                {
                    searchText &&
                    <div className="   space-y-3">
                        {
                            searchText && filtered.map((image) => (
                                <div key={image._id} className="border border-primary/75 hover:border-primary hover:bg-secondary hover:text-neutral font-bold cursor-pointer  rounded-2xl px-3 py-3 text-lg">
                                    <h1 className="">{image.name}</h1>

                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Search;