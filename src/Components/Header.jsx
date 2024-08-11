import { Link, NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/injoylogo.jpg";
import burgerMenu from "/menu-burger.svg";
import closeMenu from "/cross.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`sticky top-0 z-40 transition-all duration-300 ${
                isScrolled ? "bg-[#dce3f1]" : "bg-white"
            }`}
        >
            <nav className="py-[1.125rem] max-w-[1440px] mx-auto px-8 flex items-center justify-between">
                <Link to="/">
                    <div className="logo flex gap-2 items-center">
                            <img
                                width={40}
                                src={logo}
                                alt="Innjoy Telcom Logo"
                                className="rounded-full"
                            />
                            <p className="font-bold text-lg">INNJOY TELCOM</p>
                    </div>
                </Link>
                <ul className="hidden md:flex gap-4">
                    {["Home", "About", "Contact Us", "Our Reviews"].map((item, index) => (
                        <li key={index}>
                            <NavLink className="hover:text-[#3a40d4]" to={ item !== "Home" ? `/${item.toLowerCase().replace(/\s+/g, "-")}` : "/"}>
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Link
                    to="/sign-up"
                    className="hidden md:block bg-[#3a40d4] hover:shadow-lg rounded-[4.5px] px-6 py-2 text-white w-fit text-[12px] lg:text-[16px]"
                >
                    Sign up
                </Link>
                <img
                    src={isMobileMenuOpen ? closeMenu : burgerMenu}
                    alt="Menu"
                    width={40}
                    className="block md:hidden cursor-pointer z-50"
                    onClick={toggleMobileMenu}
                />
            </nav>
            <div
                className={`fixed inset-y-0 w-1/2 right-0 py-20 bg-white z-40 transform ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 md:hidden shadow-md`}
            >
                <div className="flex flex-col items-end p-6">
                    <ul className="flex flex-col items-start w-full gap-8 text-lg mb-8">
                        {["Home", "About", "Contact Us", "Our Reviews"].map((item, index) => (
                            <li className="border-b w-full" key={index}>
                                <Link
                                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={toggleMobileMenu}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <Link
                            to="/sign-up"
                            className="bg-[#3a40d4] hover:bg-[#111D15] rounded-[4.5px] px-6 py-2 text-white text-lg"
                            onClick={toggleMobileMenu}
                        >
                            Sign up
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
