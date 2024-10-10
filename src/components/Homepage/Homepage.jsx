import About from "./About";
import Banner from "./Banner";
import Popular from "./Popular";
import Upcoming from "./Upcoming";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Upcoming></Upcoming>
            <Popular></Popular>
        </div>
    );
};

export default Homepage;