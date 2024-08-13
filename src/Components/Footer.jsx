import PryCtaBtn from "./PryCtaBtn";
import logo from "/injoylogo.jpg";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="px-[101px] bg-[#13111d]">
            <div className="pt-[75px] pb-[15px]  text-white max-w-[1440px] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    <div className="max-w-[267px] text-center sm:text-left ">
                        <img loading="lazy"className="mb-[18px] mx-auto sm:mx-0" src={logo} alt="" />
                        <p className="text-[12px] font-light">Stay connected and productive with our robust and secure telecommution services, designed to support your remote work needs.</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold">Company</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start text-[12px] font-semibold">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                            <li><Link to="/sign-up-now">Sign Up Now</Link></li>
                            <li><Link to="/our-reviews">Our Reviews</Link></li>
                        </ul>
                    </div>
                    <div className="max-w-[218.25px] text-center sm:text-left">
                        <h3 className="mb-[20px] text-[15px] font-bold">Join Us And Achieve Business Goal</h3>
                        <PryCtaBtn link="/sign-up-now" text="Join Us" />
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center">Powered By Innjoy Experience</p>
            </div>
        </footer>
    )
}

export default Footer;