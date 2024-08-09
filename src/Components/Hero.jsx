import PryCtaBtn from './PryCtaBtn';
import SecCtaBtn from './SecCtaBtn';
import HeroImg from '/hero-img.png';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-white">
            <div className='max-w-[1440px] mx-auto px-8 flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-4'>
                <div className='py-[3.875rem] lg:py-[6.875rem] w-full lg:basis-[45%] '>
                    <h1 className="font-bold text-[39px] mb-[18px] lg:mb-[22px] leading-tight animate-fade-in">
                        Call from Anywhere with Innjoy Telecom's <span className='underline font-semibold text-[#fda93c]'>Reliable Telecommution Solutions</span>
                    </h1>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#666666] mb-8 lg:mb-10 animate-fade-in delay-200">
                        Stay connected and productive with our robust and secure telecommution services, designed to support your remote work needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-stretch gap-[15px] lg:gap-[19px] animate-fade-in delay-400">
                        <PryCtaBtn link="/sign-up" text='Sign Up' />
                        <SecCtaBtn link="/about" text='Learn More' />
                    </div>
                </div>
                <div
                    className="w-full sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[400px] bg-no-repeat bg-center bg-contain drop-shadow-lg animate-fade-in-right delay-600"
                    style={{
                        backgroundImage: `url(${HeroImg})`,
                    }}
                >
                </div>
            </div>
        </div>
    );
}

export default Hero;
