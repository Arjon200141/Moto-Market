import { upcoming } from '../../../lib/upcoming'
import UpcomingCard from '../cards/UpcomingCard';
const Upcoming = () => {
    console.log(upcoming);
    return (
        <div className=" my-12">
            <div className="mx-40">
                <h1 className="text-5xl font-medium text-center">Spotlight on Upcoming Bikes</h1>
                <p className="text-center mt-4 mb-8 text-yellow-300/50">Don't miss your chance to secure your dream ride—book your upcoming bike now! By reserving your motorcycle today, you’ll be among the first to experience these impressive machines as soon as they launch.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mx-12">
                {
                    upcoming.map((upcoming) => (
                        <UpcomingCard upcoming={upcoming} key={upcoming.id}></UpcomingCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Upcoming;