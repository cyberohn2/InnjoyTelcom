import { useEffect } from "react"
import Cta from "../Components/Cta"
import PryCtaBtn from "../Components/PryCtaBtn"
import AboutHeroImgMobile from "/about-hero-mobile.png"
import check from "/check.svg"


const About = () =>{
    useEffect(() => {
        document.title = "About Us - InnjoyTelcom"; 
      }, []);
    return(
        <div className=" ">
            <div style={{backgroundImage: `url(${AboutHeroImgMobile})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="px-8 bg-no-repeat md:bg-[url(/about-hero.png)] relative isolate before:absolute before:inset-0 before:bg-[#2525258f] before:-z-10">
                <div className="py-[6.875rem] max-w-[1440px] mx-auto">
                    <div className="hero-content mr-auto max-w-[450px]">
                        <div className="mb-[30px]">
                            <h1 className="font-bold sm:text-[39px] text-[29px] mb-[18px] text-white">InnJoy Telcom's Reliable Telecommunication Solutions
                            </h1>
                            <p className="text-[13.5px] text-gray-300">Innjoy Telcom understands the importance of flexibility and reliability in today's remote work environment. Our telecommunication services are designed to help you stay connected and productive from anywhere, at any time.</p>
                        </div>
                        <div className="flex items-center gap-[19px]">
                            <PryCtaBtn link="/select-plan" text="Sign Up Now"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
                <div>
                    <h3 className="mb-4 font-semibold text-xl">Key Features</h3>
                    <div className=" grid grid-cols-1 gap-[12px] justify-between mb-[36px] ">
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Uninterrupted calls</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Crystal-clear voice and conferencing</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Scalable solutions for businesses of all sizes</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">24/7 technical support</p>
                        </div>
                    </div>
                </div>
                <div className="sm:col-start-2 lg:col-start-3">
                    <h3 className="mb-4 font-semibold text-xl">Benefits</h3>
                    <div className=" grid grid-cols-1 gap-[12px] justify-between mb-[36px]">
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Free SMS Available For All Plans</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Increase productivity and efficiency</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Enhance collaboration and communication</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Reduce costs and improve work-life balance</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Stay ahead of the competition with our cutting-edge technology</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta />
        </div>
    )
}

export default About;