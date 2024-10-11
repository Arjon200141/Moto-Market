import Link from 'next/link';
import { bikes } from '../../../lib/bikes';
import BikeCards from '../cards/BikeCards';

const Popular = () => {
    console.log(bikes);
    return (
        <div className="my-16">
            <div className="mx-40">
                <h1 className="text-5xl font-medium text-center">The Bikes That Stand Out</h1>
                <p className="text-center mt-4 mb-8 text-yellow-300/50">
                    Discover our selection of exceptional bikes that redefine performance and style. Each model is carefully curated for its unique features and unparalleled riding experience.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mx-12">
                {
                    bikes
                        .filter((bike) => bike.category === "popular")
                        .map((bike) => (
                            <BikeCards bike={bike} key={bike.id} />
                        ))
                }
            </div>
            <Link href={'/bikes'}>
            <div className="flex justify-center mt-6">
                <button className="btn text-xl px-6 btn-outline text-yellow-500/70">Explore Additional Bikes</button>
            </div>
            </Link>
        </div>
    );
};

export default Popular;
