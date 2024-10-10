const About = () => {
    return (
        <div className="mt-20 mx-32">
            <div className="flex gap-8">
                <div className="flex-1">
                    <div className="">
                        <img className="w-60 h-80" src="https://i.ibb.co.com/7XkHXtC/front-view-man-with-motorcycle.jpg" alt="" />
                    </div>
                    <div className="relative bottom-20 left-44">
                        <img className="h-40 w-40" src="https://i.ibb.co.com/TrZydJ8/green-motorcycle-is-parked-room-with-brick-wall-it-1273185-2463.jpg" alt="" />
                    </div>
                </div>
                <div className="flex-1 space-y-3">
                    <h1 className="text-xl text-gray-300">About Us</h1>
                    <h2 className="text-4xl">Your One-Stop Shop for All Things Motorcycle</h2>
                    <p className="text-yellow-200/70">At Moto Market, we specialize in offering a wide selection of high-quality bikes for riders who seek performance, style, and reliability. Whether you're an enthusiast or a casual rider, our collection features top-tier bikes designed to meet your needs.
                    <br />
                    We are committed to providing an easy and enjoyable shopping experience, ensuring you find the perfect bike to match your passion for the road.</p>
                    <button className="btn btn-outline px-6 text-xl font-semibold text-white/70">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;