import PryCtaBtn from './PryCtaBtn';
import SecCtaBtn from './SecCtaBtn';
import HeroImg from '/hero-img.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div 
            className="relative bg-white"
            style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className='relative max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-4'>
                <div className='py-[3.875rem] lg:py-[6.875rem] w-full lg:basis-[45%]'>
                    <h1 className="font-bold text-white text-[39px] mb-[18px] lg:mb-[22px] leading-tight animate-fade-in">
                    Join the Airtel CALL BONANZA of InnJoy Telcom's <span className='underline font-semibold text-[#fda93c]'>Reliable Telecommunication Solutions</span>
                    </h1>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white mb-8 lg:mb-10 animate-fade-in delay-200">
                        Stay connected and productive with our robust and secure telecommunication services for Airtel users, designed to support your remote work needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-stretch gap-[15px] lg:gap-[19px] animate-fade-in delay-400">
                        <PryCtaBtn link="/select-plan" text='Sign Up Now' />
                        <SecCtaBtn link="/about" text='Learn More' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
