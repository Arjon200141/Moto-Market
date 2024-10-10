import { IoPricetagsSharp } from "react-icons/io5";

const BikeCards = ({bike}) => {
    return (
        <div>
            <div className="card card-compact bg-slate-800/70 shadow-xl">
            <figure className="p-3">
                    <img src={bike.image} alt="Shoes" className="h-80 w-full object-cover rounded-t-lg"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bike.name}</h2>
                    <p className="text-yellow-600/70">{bike.description}</p>
                    <div className="flex justify-between text-lg gap-28">
                        <p className="text-md flex items-center gap-2"><IoPricetagsSharp />{bike.price}$</p>
                        <p className="text-md">Warranty : {bike.warranty}</p>
                    </div>
                    <div className="card-actions mt-3">
                        <button className="btn text-xl btn-outline w-full text-yellow-500/70">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCards;