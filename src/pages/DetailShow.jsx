
// eslint-disable-next-line react/prop-types
const DetailShow = ({ image }) => {
    console.log(image);
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { _id, name, photo } = image
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={`https://raiyan-dobby-be.onrender.com/${photo}`} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailShow;