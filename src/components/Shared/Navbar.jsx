import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Bikes",
            path: "/bikes"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact US",
            path: "/contact"
        },

    ]
    return (
        <div className="bg-black text-yellow-500/70 ">
            <div className=" navbar container mx-auto">
                <div className="navbar-start">
                    <Link href={'/'}>
                        <img src="https://i.ibb.co.com/Z1XmXj6/199506217.png" alt="" className="h-16 w-48 rounded-2xl" />
                    </Link>
                </div>
                <div className="navbar-center flex items-center space-x-6 text-xl ">
                    {
                        navItems.map((item) =>
                            <Link className='font-semibold hover:text-white duration-300' href={item.path} key={item.path}>
                                {item.title}
                            </Link>
                        )
                    }
                </div>
                <div className="navbar-end flex items-center space-x-4">
                     <div ><IoCartOutline className="text-2xl"/></div>
                     <div ><IoSearchSharp className="text-2xl"/></div>
                    <a className="btn btn-outline text-yellow-500/70 hover:text-black hover:bg-yellow-500/70 px-6 text-xl font-semibold">Bookings</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;