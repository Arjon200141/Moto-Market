const Footer = () => {
    return (
        <div>
            <footer className="footer p-4  text-base-content">
                <aside className="ml-8">
                    <div className="flex gap-4 items-center mt-6">
                        <img src="https://i.ibb.co.com/Z1XmXj6/199506217.png" alt="" className="h-16 w-48 ml-12 rounded-2xl" />
                    </div>
                    <div className="ml-12 space-y-3 mt-4 text-md">
                        <p className="flex gap-3 items-center">Email : motomarket12@gmail.com</p>
                        <p className="flex gap-3 items-center">Phone : +880 123 456 7890</p>
                        <p className="flex gap-3 items-center">Location : 123 Gulshan Avenue , Badda , <br />Dhaka-1213 , Bangladesh</p>
                    </div>
                </aside>
                <nav className="text-md mt-8">
                    <h6 className="footer-title text-2xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-md mt-8">
                    <h6 className="footer-title text-2xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-md mt-8">
                    <h6 className="footer-title text-2xl">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className=" md:mx-0 mt-8">
                    <h2 className="footer-title pt-8 text-center text-black border-b-2 border-gray-500 w-full pb-4 text-2xl">Social</h2>

                    <div className="grid grid-flow-col gap-2 md:gap-12">
                        <a><img src="https://i.ibb.co/GTL1Rfz/twitter-1.png" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/dbvX6Fr/instagram-icon-1057-2227.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/181L2mT/facebook-icon-488108-2.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/hKQbH1J/3d-icon-social-media-app-23-2150049587.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/fHBG2jM/github.png" alt="" className="h-8 w-8" /></a>
                    </div>
                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center text-lg  p-2 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by MOTO MARKET</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;