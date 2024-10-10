const UpcomingCard = ({upcoming}) => {
    return (
        <div>
            <div className="card card-compact bg-slate-800/70 shadow-xl">
                <figure className="p-3">
                    <img src={upcoming.image} alt="Shoes" className="h-80 w-full object-cover rounded-t-lg"/>
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl">{upcoming.name}</h2>
                    <p className="text-yellow-600/70">{upcoming.description}</p>
                    <p><span className="font-semibold">Release Date :</span> {upcoming.release_date}</p>
                    <div className="card-actions mt-3">
                        <button className="btn text-xl btn-outline w-full text-yellow-500/70">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;