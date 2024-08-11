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
                            <li><Link to="/sign-up">Sign Up</Link></li>
                            <li><Link to="/our-reviews">Our Reviews</Link></li>
                        </ul>
                    </div>
                    <div className="max-w-[218.25px] text-center sm:text-left">
                        <h3 className="mb-[20px] text-[15px] font-bold">Newsletter </h3>
                        <input className="rounded-[4.5px] border border-[#808080] p-[8px] mb-[20px] bg-transparent" type="email" name="newsletter" id="newsletter" placeholder="Email Goes here" />
                        <PryCtaBtn link="/contact-us" text="Send" />
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center">2024 “InnJoy Telcom” All Rights Received</p>
            </div>
        </footer>
    )
}

export default Footer;