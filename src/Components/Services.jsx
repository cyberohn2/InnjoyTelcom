import ArrowSVG from "/Arrow.svg";
import ServiceImage1 from "/people-roof.png";
import ServiceImage2 from "/group-call.png";
import ServiceImage3 from "/briefcase.png";
import ServiceImage4 from "/users.png";
import { Link } from "react-router-dom";

const serviceDetails = [
    {
        image: ServiceImage1,
        title: "Family Calls",
        desc: "Family call is a call plan that allows you to make unlimited calls for free.",
    },
    {
        image: ServiceImage2,
        title: "Friends Calls",
        desc: "Connect with your friends all day long with no interruption.",
    },
    {
        image: ServiceImage3,
        title: "Business Calls",
        desc: "Call your office colleague non stop all day long. Never miss any business again.",
    },
    {
        image: ServiceImage4,
        title: "Meetings",
        desc: "Let your meeting member call each other with one click.",
    },
];

const ServiceItem = ({ image, title, desc }) => {
    return (
        <div className="flex flex-col rounded-lg bg-white hover:shadow-lg p-5">
            <img loading="lazy" className="rounded-[22.5px] mb-[12px] self-start" src={image} alt={title} />
            <div className="flex-grow mb-4">
                <h3 className="text-[18px] font-semibold mb-[12px]">{title}</h3>
                <p className="text-[12px] text-[#666666]">{desc}</p>
            </div>
            <button className="border border-black rounded-[4.5px] px-[15px] py-2 text-[12px] hover:bg-[#3a40d4] hover:text-white hover:border-white">
                <Link to="/sign-up">Sign Up <img loading="lazy" src={ArrowSVG} alt="" className="w-[15px] aspect-square inline" /></Link>
            </button>
        </div>
    );
};

const Services = () => {
    return (
        <div id="service" className="text-[#111d15] pt-[113px] pb-[56px] max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="flex items-center gap-2 justify-between">
                <h2 className="sm:text-[33px] text-[24px] font-semibold max-w-[402px]">Our Services</h2>
                <div className="max-w-[324.75px] text-right sm:text-left">
                    <p className="sm:text-[15px] text-[11px] font-semibold">We always provide the best service</p>
                </div>
            </div>
            <div className="divider border border-[83A790] my-[30px]"></div>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-[22px]">
                {serviceDetails.map((service, index) => (
                    <ServiceItem title={service.title} image={service.image} desc={service.desc} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Services;
