import PryCtaBtn from "./PryCtaBtn";
import logo from "/injoylogo.jpg";
import fbIcon from "/icon-facebook.svg"
import IgIcon from "/icon-instagram.svg"
import XIcon from "/icon-twitter.svg"
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="px-4 bg-[#13111d]">
            <div className="pt-[75px] pb-[15px]  text-white max-w-[1440px] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
                    <div className="max-w-[267px] text-center sm:text-left ">
                        <img loading="lazy"className="mb-[18px] mx-auto sm:mx-0" src={logo} alt="" />
                        <p className="text-[12px] font-light">Stay connected and productive with our robust and secure telecommution services, designed to support your remote work needs.</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold">Company</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start text-[12px] font-semibold">
                            <li><Link className="hover:text-blue-500" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-blue-500" to="/contact-us">Contact</Link></li>
                            <li><Link className="hover:text-blue-500" to="/select-plan">Sign Up Now</Link></li>
                            <li><Link className="hover:text-blue-500" to="/sign-in">Add Number To Your Account</Link></li>
                            <li><Link className="hover:text-blue-500" to="/our-reviews">Our Reviews</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href=""><svg className="fill-white hover:fill-blue-500" style={{borderRadius: "5px"}} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" fillRule="nonzero"/></svg></a>
                        <a href=""><svg className="fill-white hover:fill-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fillRule="nonzero"/></svg></a>
                        <a href=""><svg className="fill-white hover:fill-blue-500" width="20" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" fillRule="nonzero"/></svg></a>
                    </div>
                    <div className="max-w-[218.25px] text-center sm:text-left">
                        <h3 className="mb-[20px] text-[15px] font-bold">Join Us And Achieve Business Goal</h3>
                        <PryCtaBtn link="/select-plan" text="Join Us" />
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center text-sm sm:text-base">Copyright © 2024.</p>
                <p className="text-center text-sm sm:text-base">Powered by innjoy experience.</p>
                <p className="text-center text-sm sm:text-base">All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;