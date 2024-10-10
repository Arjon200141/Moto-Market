import About from "./About";
import Banner from "./Banner";
import Faq from "./Faq";
import Popular from "./Popular";
import Review from "./Review";
import Upcoming from "./Upcoming";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Upcoming></Upcoming>
            <Popular></Popular>
            <Faq></Faq>
            <Review></Review>
            <div className="divider divider-warning"></div>
        </div>
    );
};

export default Homepage;