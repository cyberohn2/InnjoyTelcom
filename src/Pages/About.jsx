import Cta from "../Components/Cta"
import PryCtaBtn from "../Components/PryCtaBtn"
import SecCtaBtn from "../Components/SecCtaBtn"
import AboutHeroImg from "/about-hero.jpg"
import check from "/check.svg"


const About = () =>{
    return(
        <div className=" ">
            <div style={{backgroundImage: `url(${AboutHeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="px-8 bg-no-repeat ">
                <div className="py-[6.875rem] max-w-[1440px] mx-auto">
                    <div className="hero-content mr-auto max-w-[450px]">
                        <div className="mb-[30px]">
                            <h1 className="font-bold sm:text-[39px] text-[29px] mb-[18px]">InnJoy Telcom's Reliable Telecommunication Solutions
                            </h1>
                            <p className="text-[13.5px] text-[#666666]">Innjoy Telcom understands the importance of flexibility and reliability in today's remote work environment. Our telecommunication services are designed to help you stay connected and productive from anywhere, at any time.</p>
                        </div>
                        <div className="flex items-center gap-[19px]">
                            <PryCtaBtn link="/sign-up" text="Sign Up"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
                <div>
                    <h3 className="mb-4 font-semibold text-xl">Key Features</h3>
                    <div className=" grid grid-cols-1 gap-[12px] justify-between mb-[36px] ">
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">High-speed internet connectivity</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Crystal-clear voice and conferencing</p>
                        </div>
                        <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                            <img loading="lazy"src={check} alt="" />
                            <p className="text-[12px] font-semibold">Secure and reliable data transfer</p>
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
                <div>
                    <h3 className="mb-4 font-semibold text-xl">Benefits</h3>
                    <div className=" grid grid-cols-1 gap-[12px] justify-between mb-[36px]">
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